import { calculateCoverage, type CoverageInput } from '../../../models/coverage/coverage';
import { evaluateCoverage } from '../../../models/coverage/evaluate';

const lab = document.querySelector<HTMLElement>('[data-coverage-lab]');
if (lab) {
  const config: CoverageInput & { threshold: number } = JSON.parse(lab.dataset.config!);
  const controls = lab.querySelector<HTMLFieldSetElement>('[data-controls]')!;
  const inputs = [...controls.querySelectorAll<HTMLInputElement>('input')];
  const outcome = lab.querySelector<HTMLElement>('[data-outcome]')!;
  const detail = lab.querySelector<HTMLElement>('[data-detail]')!;
  const error = lab.querySelector<HTMLElement>('[data-error]')!;
  const svg = lab.querySelector<SVGSVGElement>('svg')!;
  const footprint = lab.querySelector<SVGCircleElement>('[data-footprint]')!;
  const sensor = lab.querySelector<SVGCircleElement>('[data-sensor]')!;
  const description = lab.querySelector<SVGDescElement>('desc')!;
  const recordButton = lab.querySelector<HTMLButtonElement>('[data-record]')!;
  const clearButton = lab.querySelector<HTMLButtonElement>('[data-clear-comparisons]')!;
  const comparisonNote = lab.querySelector<HTMLElement>('[data-comparison-note]')!;
  const comparisonBody = lab.querySelector<HTMLTableSectionElement>('[data-comparisons]')!;
  let current: CoverageInput | null = null;
  let trialCount = 0;
  function render() {
    const invalid = inputs.filter(input => !input.validity.valid || !Number.isFinite(input.valueAsNumber));
    for (const input of inputs) input.setAttribute('aria-invalid', String(invalid.includes(input)));
    error.hidden = invalid.length === 0;
    recordButton.disabled = invalid.length > 0 || trialCount >= 4;
    // Hide stale geometry and numbers while an edit is invalid.
    svg.style.visibility = invalid.length ? 'hidden' : 'visible';
    if (invalid.length) {
      current = null;
      error.textContent = 'Enter a whole number within each control’s stated range. Blank values are not evaluated.';
      outcome.textContent = 'Not evaluated — invalid configuration.';
      detail.textContent = '';
      return;
    }
    current = {
      area: config.area,
      sensor: {
        x: inputs.find(input => input.name === 'x')!.valueAsNumber,
        y: inputs.find(input => input.name === 'y')!.valueAsNumber,
        radius: inputs.find(input => input.name === 'radius')!.valueAsNumber,
      },
    };
    // The browser imports exactly the engineering modules exercised by Vitest.
    const result = calculateCoverage(current);
    const evaluation = evaluateCoverage(result, config.threshold);
    for (const circle of [footprint, sensor]) {
      circle.setAttribute('cx', String(current.sensor.x));
      circle.setAttribute('cy', String(current.sensor.y));
    }
    footprint.setAttribute('r', String(current.sensor.radius));
    description.textContent = `Area ${config.area.width} by ${config.area.height} model units. Sensor at (${current.sensor.x}, ${current.sensor.y}), radius ${current.sensor.radius}. Estimated coverage ${result.coveragePercent.toFixed(2)}%.`;
    outcome.textContent = `${evaluation.pass ? 'PASS' : 'FAIL'} — ${result.coveragePercent.toFixed(2)}% estimated coverage; threshold ${config.threshold.toFixed(2)}%.`;
    detail.textContent = `${result.coveredCells} / ${result.totalCells} cell centers covered. Margin: ${evaluation.marginPercentagePoints.toFixed(2)} percentage points.`;
  }
  controls.disabled = false;
  controls.addEventListener('input', render);
  lab.querySelector<HTMLButtonElement>('[data-reset]')!.addEventListener('click', () => {
    for (const input of inputs) input.value = String(config.sensor[input.name as keyof CoverageInput['sensor']]);
    render();
  });
  recordButton.addEventListener('click', () => {
    if (!current || trialCount >= 4) return;
    // Reuse the engineering model for each independent trial; nothing is persisted.
    const result = calculateCoverage(current);
    const evaluation = evaluateCoverage(result, config.threshold);
    trialCount++;
    const row = document.createElement('tr');
    const values = [String(trialCount), String(current.sensor.x), String(current.sensor.y),
      String(current.sensor.radius), `${result.coveragePercent.toFixed(2)}%`,
      evaluation.marginPercentagePoints.toFixed(2), evaluation.pass ? 'PASS' : 'FAIL'];
    for (const [index, value] of values.entries()) {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
      if (cell instanceof HTMLTableCellElement && index === 0) cell.scope = 'row';
      cell.textContent = value;
      row.append(cell);
    }
    comparisonBody.append(row);
    comparisonNote.textContent = `${trialCount} of 4 configurations recorded.${trialCount === 4 ? ' Clear comparison to start another set.' : ''}`;
    clearButton.disabled = false;
    render();
  });
  clearButton.addEventListener('click', () => {
    comparisonBody.replaceChildren();
    trialCount = 0;
    comparisonNote.textContent = 'No configurations recorded.';
    clearButton.disabled = true;
    render();
    // Keep keyboard users at an enabled control after clearing.
    inputs[0].focus();
  });
  render();
}
