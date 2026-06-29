const state = {
  data: null,
  selectedScenarioId: null,
};

const els = {
  summary: document.querySelector("#summary"),
  scenarioButtons: document.querySelector("#scenarioButtons"),
  title: document.querySelector("#scenarioTitle"),
  prompt: document.querySelector("#scenarioPrompt"),
  image: document.querySelector("#scenarioImage"),
  metricBest: document.querySelector("#metricBest"),
  learnedChoice: document.querySelector("#learnedChoice"),
  rows: document.querySelector("#candidateRows"),
  preference: document.querySelector("#preferenceBox"),
  ablations: document.querySelector("#ablationBars"),
  vlm: document.querySelector("#vlmExample"),
  rl: document.querySelector("#rlTable"),
};

fetch("scenarios.json")
  .then((response) => response.json())
  .then((data) => {
    state.data = data;
    state.selectedScenarioId = data.scenarios[0].scenario_id;
    render();
  })
  .catch((error) => {
    document.body.innerHTML = `<main class="intro"><h1>MetricDrive Explorer failed to load.</h1><p>${escapeHtml(error.message)}</p></main>`;
  });

function render() {
  renderSummary();
  renderScenarioButtons();
  renderScenario();
  renderAblations();
  renderVlmExample();
  renderRlTable();
}

function renderSummary() {
  const summary = state.data.summary;
  const items = [
    [summary.scenario_count, "long-tail scenario families"],
    [summary.candidate_count, "candidate trajectories with hard negatives"],
    [summary.preference_pair_count, "metric-derived preference pairs"],
    [`${summary.learned_heldout_match_count}/6`, "held-out learned reward recovery"],
  ];
  els.summary.innerHTML = items
    .map(([value, label]) => `<div class="proof"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function renderScenarioButtons() {
  els.scenarioButtons.innerHTML = state.data.scenarios
    .map((scenario) => {
      const active = scenario.scenario_id === state.selectedScenarioId;
      return `<button type="button" aria-pressed="${active}" data-scenario="${scenario.scenario_id}">${escapeHtml(scenario.category.replaceAll("_", " "))}</button>`;
    })
    .join("");

  els.scenarioButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedScenarioId = button.dataset.scenario;
      render();
    });
  });
}

function renderScenario() {
  const scenario = currentScenario();
  els.title.textContent = scenario.title;
  els.prompt.textContent = scenario.prompt;
  els.image.src = scenario.asset;
  els.image.alt = `${scenario.title} trajectory visualization`;
  els.metricBest.textContent = `Metric best: ${scenario.metric_best_trajectory_id}`;
  els.learnedChoice.textContent = `Learned reward: ${scenario.learned_trajectory_id}`;
  els.rows.innerHTML = scenario.scores.map(candidateRow).join("");
  const pref = scenario.top_preference;
  els.preference.innerHTML = `<strong>Preference row:</strong> choose <code>${escapeHtml(pref.preferred_trajectory_id)}</code> over <code>${escapeHtml(pref.rejected_trajectory_id)}</code> because ${escapeHtml(pref.reasons.join("; "))}.`;
}

function candidateRow(score) {
  const scoreClass = score.collision_clearance_m < 0 ? "score-bad" : "score-good";
  return `<tr>
    <td>${score.rank}</td>
    <td><code>${escapeHtml(score.trajectory_id)}</code></td>
    <td class="${scoreClass}">${format(score.total)}</td>
    <td>${format(score.collision_clearance_m)}m</td>
    <td>${format(score.progress_m)}m</td>
  </tr>`;
}

function renderAblations() {
  const rows = state.data.hard_negative.ablation_summaries;
  els.ablations.innerHTML = rows
    .slice(0, 9)
    .map((row) => {
      const pct = Math.round(row.heldout_match_rate * 100);
      const color = row.heldout_unsafe_count > 0 ? "var(--red)" : row.heldout_match_rate === 1 ? "var(--teal)" : "var(--amber)";
      return `<div class="bar-row">
        <span>${escapeHtml(row.label)}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
        <span>${row.heldout_match_count}/6</span>
      </div>`;
    })
    .join("");
}

function renderVlmExample() {
  const example = state.data.vlm_examples.find((item) => item.scenario_id === state.selectedScenarioId) || state.data.vlm_examples[0];
  const payload = {
    example_id: example.example_id,
    prompt: example.prompt,
    chosen: JSON.parse(example.chosen),
    rejected: JSON.parse(example.rejected),
  };
  els.vlm.textContent = JSON.stringify(payload, null, 2);
}

function renderRlTable() {
  const rows = state.data.rl_alignment.summaries;
  els.rl.innerHTML = `<table>
    <thead><tr><th>Method</th><th>Match</th><th>Unsafe</th><th>Gap</th></tr></thead>
    <tbody>
      ${rows.map((row) => `<tr>
        <td>${escapeHtml(row.label)}</td>
        <td>${row.metric_match_count}/${row.scenario_count}</td>
        <td>${row.unsafe_collision_count}</td>
        <td>${format(row.mean_metric_score_gap)}</td>
      </tr>`).join("")}
    </tbody>
  </table>`;
}

function currentScenario() {
  return state.data.scenarios.find((scenario) => scenario.scenario_id === state.selectedScenarioId);
}

function format(value) {
  return Number(value).toFixed(3);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
