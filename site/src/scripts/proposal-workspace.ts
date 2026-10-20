import { ZodError } from 'zod';
import { analyzeProposal } from '../../../exercises/proposal';

type Analysis = ReturnType<typeof analyzeProposal>;
const workspace = document.querySelector<HTMLElement>('[data-proposal-workspace]');
if (workspace) {
  const config: { baseline: Analysis['baseline']; threshold: Analysis['proposal']; radius: Analysis['proposal'] } = JSON.parse(workspace.dataset.config!);
  const controls = workspace.querySelector<HTMLFieldSetElement>('[data-proposal-controls]')!;
  const kind = controls.querySelector<HTMLSelectElement>('#proposal-kind')!;
  const value = controls.querySelector<HTMLInputElement>('#proposal-value')!;
  const need = controls.querySelector<HTMLInputElement>('#proposal-need')!;
  const label = controls.querySelector<HTMLLabelElement>('[data-value-label]')!;
  const error = workspace.querySelector<HTMLElement>('[data-proposal-error]')!;
  const result = workspace.querySelector<HTMLElement>('[data-proposal-result]')!;
  const differences = workspace.querySelector<HTMLTableSectionElement>('[data-proposal-differences]')!;
  const definition = workspace.querySelector<HTMLElement>('[data-proposal-definition]')!;
  function render() {
    differences.replaceChildren();
    definition.textContent = 'Not evaluated — no validated proposed definition.';
    error.hidden = true;
    value.setAttribute('aria-invalid', String(!value.validity.valid));
    need.setAttribute('aria-invalid', String(need.value !== config.baseline.requirement.source_need));
    try {
      if (!value.validity.valid || !Number.isFinite(value.valueAsNumber)) throw new Error('Enter a finite proposed value within the stated range; blank values are not evaluated.');
      const copy = structuredClone(config.baseline);
      copy.requirement.source_need = need.value;
      const thresholdMode = kind.value === 'requirement-threshold';
      const proposal = structuredClone(thresholdMode ? config.threshold : config.radius);
      proposal.change = thresholdMode ? { kind: 'requirement-threshold', threshold_percent: value.valueAsNumber } : { kind: 'sensor-radius', radius: value.valueAsNumber };
      const analysis = analyzeProposal(copy, proposal);
      const trial = analysis.calculation.proposed;
      result.textContent = `Temporary proposal: ${trial.evaluation.pass ? 'PASS' : 'FAIL'} — ${trial.coverage.coveragePercent.toFixed(2)}% estimated coverage against ${trial.thresholdPercent}%. Radius ${trial.inputs.sensor.radius} model units. Margin ${trial.evaluation.marginPercentagePoints.toFixed(2)} percentage points. Validation passed; engineering justification is not established.`;
      for (const difference of analysis.differences) {
        const row = document.createElement('tr');
        const heading = document.createElement('th'); heading.scope = 'row'; heading.textContent = difference.field; row.append(heading);
        for (const text of [difference.before, difference.after]) { const cell = document.createElement('td'); cell.textContent = String(text); row.append(cell); }
        differences.append(row);
      }
      if (!analysis.differences.length) {
        const row = document.createElement('tr'); const cell = document.createElement('td'); cell.colSpan = 3; cell.textContent = 'No definition changes from the canonical baseline.'; row.append(cell); differences.append(row);
      }
      definition.textContent = JSON.stringify({ status: 'unapproved temporary browser proposal', requirement: analysis.proposed.requirement, scenario: analysis.proposed.scenario, model: analysis.proposed.manifest.model }, null, 2);
    } catch (caught) {
      error.hidden = false;
      error.textContent = caught instanceof ZodError ? caught.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join('; ') : caught instanceof Error ? caught.message : 'Invalid proposed definition';
      result.textContent = 'Not evaluated — invalid proposed definition. Previous proposal results and differences have been removed.';
    }
  }
  function choose(mode: string) {
    kind.value = mode;
    const thresholdMode = mode === 'requirement-threshold';
    label.textContent = thresholdMode ? 'Proposed threshold (%)' : 'Proposed radius (model units)';
    value.max = thresholdMode ? '100' : '200';
    value.value = String(thresholdMode ? config.baseline.requirement.threshold_percent : config.baseline.scenario.sensor.radius);
  }
  controls.disabled = false;
  kind.addEventListener('change', () => { choose(kind.value); render(); });
  value.addEventListener('input', render);
  need.addEventListener('input', render);
  controls.querySelector<HTMLButtonElement>('[data-reset-proposal]')!.addEventListener('click', () => { choose('requirement-threshold'); need.value = config.baseline.requirement.source_need; render(); });
  for (const button of controls.querySelectorAll<HTMLButtonElement>('[data-example]')) button.addEventListener('click', () => {
    const fixture = button.dataset.example === 'threshold' ? config.threshold : config.radius;
    choose(fixture.change.kind); value.value = String(fixture.change.kind === 'requirement-threshold' ? fixture.change.threshold_percent : fixture.change.radius);
    need.value = config.baseline.requirement.source_need; render();
  });
  controls.querySelector<HTMLButtonElement>('[data-break-reference]')!.addEventListener('click', () => { need.value = 'UNKNOWN-NEED'; render(); });
  controls.querySelector<HTMLButtonElement>('[data-restore-reference]')!.addEventListener('click', () => { need.value = config.baseline.requirement.source_need; render(); });
  render();
}
