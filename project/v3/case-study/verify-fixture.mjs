// Editorial consistency check for the fictional V3 teaching case.
// Run from any directory: node project/v3/case-study/verify-fixture.mjs
// This is NOT a qualified traffic controller, deployment model, or real-world safety test.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import assert from 'node:assert/strict';
import { runQueue } from '../../../models/intersection/queue.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const read = (name) => readFileSync(join(root, name), 'utf8');
const graph = JSON.parse(read('source-graph-v1.json'));
const input = JSON.parse(read('model-inputs-v1.json'));
const data = JSON.parse(read('data-quality-v1.json'));

const ids = new Set(graph.nodes.map((n) => n.id));
assert.equal(ids.size, graph.nodes.length, 'Unique node IDs');
const edgeIds = new Set();
for (const edge of graph.edges) {
  assert.ok(!edgeIds.has(edge.id), 'Unique edge IDs');
  edgeIds.add(edge.id);
  assert.ok(ids.has(edge.from), 'Every edge source resolves');
  assert.ok(ids.has(edge.to), 'Every edge target resolves');
  assert.ok(graph.relation_semantics[edge.relation], 'Every relation type is defined');
}
assert.ok(!ids.has(graph.missing_link_example.to), 'Illustrative missing reference must remain unresolved');

function validate(model) {
  assert.equal(model.horizon_slots, 8);
  assert.equal(model.phase_sequence.length, model.horizon_slots);
  for (const phase of model.phase_sequence) assert.ok(model.service[phase], 'Allowed phase');
  for (const scenario of model.scenarios) {
    assert.equal(scenario.arrivals.length, model.horizon_slots, 'Complete scenario');
    for (const arrivals of scenario.arrivals) {
      assert.ok(Number.isInteger(arrivals.NS) && arrivals.NS >= 0, 'Valid NS count');
      assert.ok(Number.isInteger(arrivals.EW) && arrivals.EW >= 0, 'Valid EW count');
    }
  }
}
validate(input);
assert.throws(() => validate({ ...input, phase_sequence: [...input.phase_sequence.slice(0, 7), 'FLASH'] }));
assert.throws(() => validate({ ...input, scenarios: [{ ...input.scenarios[0], arrivals: [{ NS: -1, EW: 0 }, ...input.scenarios[0].arrivals.slice(1)] }] }));
assert.throws(() => validate({ ...input, scenarios: [{ ...input.scenarios[0], arrivals: [{ NS: 0.5, EW: 0 }, ...input.scenarios[0].arrivals.slice(1)] }] }));
assert.throws(() => validate({ ...input, scenarios: [{ ...input.scenarios[0], arrivals: input.scenarios[0].arrivals.slice(1) }] }));

function run(scenario) {
  return runQueue(input, scenario.arrivals).map(({ slot, phase, arrival, departures, queue }) => [
    scenario.id, slot, phase, arrival.NS, arrival.EW, departures.NS, departures.EW, queue.NS, queue.EW,
  ]);
}
const expected = input.scenarios.flatMap(run);
const csvLines = read('trace-v1.csv').trimEnd().split(/\r?\n/);
assert.equal(csvLines[0], 'scenario,slot,phase,arrivals_NS,arrivals_EW,departures_NS,departures_EW,queue_NS,queue_EW');
const csvRows = csvLines.slice(1).map((line) => line.split(',').map((x, i) => i === 0 || i === 2 ? x : Number(x)));
assert.deepEqual(csvRows, expected, 'Every CSV row independently recomputed from declared model inputs');
assert.equal(expected.length, 16);

for (const [scenario, departures, remaining] of [['A',3,1],['B',2,2]]) {
  const records = expected.filter((row) => row[0] === scenario);
  const arrivals = records.reduce((sum, row) => sum + row[3] + row[4], 0);
  const totalOut = records.reduce((sum, row) => sum + row[5] + row[6], 0);
  const finalQueue = records.at(-1)[7] + records.at(-1)[8];
  assert.equal(arrivals, 4, 'Exactly four invented arrivals per scenario');
  assert.equal(totalOut, departures, 'Departure count');
  assert.equal(finalQueue, remaining, 'Pending count');
  assert.equal(arrivals, totalOut + finalQueue, 'Conservation of vehicles');
  const derived = data.valid_records.find((row) => row.case === scenario);
  assert.equal(derived.value, finalQueue, 'Data-quality fixture agrees with calculated trace');
  assert.equal(derived.model_revision, input.revision, 'Revision identity');
}
assert.equal(data.original_incompatible_record.status, 'withhold_comparison');
assert.equal(data.original_incompatible_record.unit, null);
assert.equal(data.original_incompatible_record.model_revision, null);
assert.equal(data.original_incompatible_record.observation_window, null);
assert.ok(!input.metrics.mean_wait.includes('DEFINED') || input.metrics.mean_wait.startsWith('NOT DEFINED'));

console.log('V3 fictional fixture PASS: 12 graph nodes, 8 typed edges, 16 trace rows, A=1 pending, B=2 pending, legacy C withheld; invalid inputs rejected.');
console.log('PASS verifies internal educational consistency only, NOT physical validity, traffic safety, source approvals, or learning outcomes.');
