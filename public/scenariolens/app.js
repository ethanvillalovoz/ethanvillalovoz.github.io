const state = {
  payload: null,
  run: null,
  selectedId: null,
  datasets: new Set(),
  tags: new Set(),
  components: new Set(),
  tagSearch: "",
  minScore: 0,
  sort: "score-desc",
  diagnosticGroup: null,
  selectorAtlas: null,
  selectorAtlasCategory: null,
};

const nodes = {
  datasetFilters: document.querySelector("#datasetFilters"),
  tagFilters: document.querySelector("#tagFilters"),
  componentFilters: document.querySelector("#componentFilters"),
  datasetCount: document.querySelector("#datasetCount"),
  tagCount: document.querySelector("#tagCount"),
  tagSearch: document.querySelector("#tagSearch"),
  scoreRange: document.querySelector("#scoreRange"),
  scoreLabel: document.querySelector("#scoreLabel"),
  clearFilters: document.querySelector("#clearFilters"),
  resultCount: document.querySelector("#resultCount"),
  datasetSummary: document.querySelector("#datasetSummary"),
  sortSelect: document.querySelector("#sortSelect"),
  scenarioRows: document.querySelector("#scenarioRows"),
  detailTitle: document.querySelector("#detailTitle"),
  detailSubtitle: document.querySelector("#detailSubtitle"),
  detailTags: document.querySelector("#detailTags"),
  scenarioImage: document.querySelector("#scenarioImage"),
  baselineCard: document.querySelector("#baselineCard"),
  componentBars: document.querySelector("#componentBars"),
  metricGrid: document.querySelector("#metricGrid"),
  reasonList: document.querySelector("#reasonList"),
  diagnosticsPanel: document.querySelector("#diagnosticsPanel"),
  diagnosticSummary: document.querySelector("#diagnosticSummary"),
  diagnosticReportLink: document.querySelector("#diagnosticReportLink"),
  diagnosticTabs: document.querySelector("#diagnosticTabs"),
  diagnosticRows: document.querySelector("#diagnosticRows"),
  selectorAtlasPanel: document.querySelector("#selectorAtlasPanel"),
  selectorAtlasSummary: document.querySelector("#selectorAtlasSummary"),
  selectorAtlasReportLink: document.querySelector("#selectorAtlasReportLink"),
  selectorAtlasMetrics: document.querySelector("#selectorAtlasMetrics"),
  selectorAtlasTabs: document.querySelector("#selectorAtlasTabs"),
  selectorAtlasCards: document.querySelector("#selectorAtlasCards"),
  previousScenario: document.querySelector("#previousScenario"),
  nextScenario: document.querySelector("#nextScenario"),
  heroScenarioCount: document.querySelector("#heroScenarioCount"),
  heroMaxFde: document.querySelector("#heroMaxFde"),
  heroAnalyzedCount: document.querySelector("#heroAnalyzedCount"),
  heroSourceCount: document.querySelector("#heroSourceCount"),
  heroDuration: document.querySelector("#heroDuration"),
  heroPeakMemory: document.querySelector("#heroPeakMemory"),
  runStatus: document.querySelector("#runStatus"),
  runDigest: document.querySelector("#runDigest"),
  runSubtitle: document.querySelector("#runSubtitle"),
  runScope: document.querySelector("#runScope"),
  pipelineStatus: document.querySelector("#pipelineStatus"),
  stageSummary: document.querySelector("#stageSummary"),
  primaryReportLink: document.querySelector("#primaryReportLink"),
  reportLinks: document.querySelector("#reportLinks"),
};

const metricLabels = {
  agent_count: "Agents",
  scoring_agent_count: "Scored agents",
  excluded_track_count: "Excluded tracks",
  low_quality_track_count: "Low-quality tracks",
  vulnerable_road_user_count: "VRUs",
  scoring_vulnerable_road_user_count: "Scored VRUs",
  sdc_track_present: "SDC present",
  prediction_target_count: "Prediction targets",
  object_of_interest_count: "Objects of interest",
  min_pairwise_distance_m: "Min distance",
  min_vru_distance_m: "Min VRU distance",
  min_path_distance_m: "Min path distance",
  min_time_to_collision_s: "Screened TTC",
  max_speed_mps: "Max speed",
  ego_max_speed_mps: "Ego speed",
  max_deceleration_mps2: "Robust max decel",
  prediction_target_source: "Target source",
  prediction_target_evaluated_count: "Evaluated targets",
  baseline_ade_m: "Baseline ADE",
  baseline_fde_m: "Baseline FDE",
  baseline_max_fde_m: "Max baseline FDE",
  baseline_miss_rate: "Baseline miss rate",
  baseline_failure_score: "Baseline failure",
  lane_aware_ade_m: "Lane-aware ADE",
  lane_aware_fde_m: "Lane-aware FDE",
  lane_aware_miss_rate: "Lane-aware miss rate",
  baseline_fde_improvement_m: "FDE improvement",
  lane_aware_map_used_count: "Lane map used",
  lane_aware_fallback_count: "Lane fallback",
};

const metricUnits = {
  min_pairwise_distance_m: "m",
  min_vru_distance_m: "m",
  min_path_distance_m: "m",
  min_time_to_collision_s: "s",
  max_speed_mps: "m/s",
  ego_max_speed_mps: "m/s",
  max_deceleration_mps2: "m/s^2",
  baseline_ade_m: "m",
  baseline_fde_m: "m",
  baseline_max_fde_m: "m",
  lane_aware_ade_m: "m",
  lane_aware_fde_m: "m",
  baseline_fde_improvement_m: "m",
};

async function boot() {
  try {
    const response = await fetch("scenarios.json");
    if (!response.ok) {
      throw new Error(`Unable to load scenarios.json (${response.status})`);
    }
    state.payload = await response.json();
    state.run = await optionalJson("run.json");
    state.selectorAtlas = state.run?.mode === "public_demo"
      ? await optionalJson("selector_decisions.json")
      : null;
    state.datasets = new Set(state.payload.filters.datasets);
    renderRunOverview();
    renderHeroStats();
    renderFilters();
    render();
  } catch (error) {
    nodes.resultCount.textContent = "Unable to load dashboard data";
    nodes.datasetSummary.textContent = error.message;
    nodes.scenarioRows.innerHTML = `
      <tr class="empty-row">
        <td colspan="7">Dashboard data could not be loaded.</td>
      </tr>
    `;
  }
}

async function optionalJson(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

function renderHeroStats() {
  const scenarios = state.payload.scenarios;
  const maxFde = Math.max(
    0,
    ...scenarios.map((scenario) => scenario.metrics.baseline_fde_m ?? 0),
  );
  nodes.heroScenarioCount.textContent = String(state.payload.reported_count ?? scenarios.length);
  nodes.heroMaxFde.textContent = `${formatNumber(maxFde)} m`;
}

function renderRunOverview() {
  const run = state.run;
  const summary = run?.summary ?? {};
  const stages = Array.isArray(run?.stages) ? run.stages : [];
  const reports = Array.isArray(run?.reports) ? run.reports : [];
  const readyCount = stages.filter((stage) => stage.ready).length;
  const analyzedCount = summary.scenario_count ?? state.payload.scenario_count;
  const sourceCount = summary.source_count ?? state.payload.datasets.length;
  const digest = String(summary.analysis_digest ?? "");
  const runState = nodes.runStatus.closest(".run-state");

  nodes.heroAnalyzedCount.textContent = formatInteger(analyzedCount);
  nodes.heroSourceCount.textContent = formatInteger(sourceCount);
  nodes.heroDuration.textContent = formatDuration(summary.duration_seconds);
  nodes.heroPeakMemory.textContent = formatBytes(summary.peak_rss_bytes);
  nodes.runStatus.textContent = run ? (run.ready ? "Run ready" : "Run needs review") : "Demo payload";
  nodes.runDigest.textContent = digest ? digest.slice(0, 12) : "";
  nodes.runDigest.title = digest;
  runState.classList.toggle("ready", Boolean(run?.ready));
  runState.classList.toggle("not-ready", Boolean(run && !run.ready));

  const mode = run?.mode === "public_demo" ? "Public evidence" : "Local analysis";
  nodes.runSubtitle.textContent = `${mode}: ${formatInteger(analyzedCount)} scenarios across ${formatInteger(sourceCount)} source${Number(sourceCount) === 1 ? "" : "s"}, with ${formatInteger(state.payload.reported_count)} ranked cases rendered for inspection.`;
  nodes.runScope.textContent = run?.scope_note ?? "Ranked scenario evidence generated from the loaded dashboard payload.";
  nodes.pipelineStatus.textContent = `${readyCount}/${stages.length} ready`;
  nodes.pipelineStatus.classList.toggle("not-ready", stages.length > 0 && readyCount !== stages.length);

  nodes.stageSummary.innerHTML = stages.length > 0
    ? stages.map(stageSummaryTemplate).join("")
    : `<div class="stage-card"><header><h3>Run metadata unavailable</h3><span class="not-ready">payload only</span></header><p>The scenario table remains available.</p></div>`;

  if (reports.length > 0) {
    nodes.primaryReportLink.href = reports[0].path;
    nodes.reportLinks.innerHTML = reports.map((report) => `
      <a href="${escapeHtml(report.path)}">
        <strong>${escapeHtml(report.label)}</strong>
        <span>${escapeHtml(report.description ?? "Open generated analysis report.")}</span>
      </a>
    `).join("");
  } else {
    nodes.reportLinks.innerHTML = `<a href="./scenarios.json"><strong>Scenario data</strong><span>Open the loaded dashboard payload.</span></a>`;
  }
}

function stageSummaryTemplate(stage) {
  const metrics = stageMetrics(stage);
  return `
    <article class="stage-card">
      <header>
        <h3>${escapeHtml(stage.label ?? stage.stage_id)}</h3>
        <span class="${stage.ready ? "" : "not-ready"}">${stage.ready ? "ready" : "review"}</span>
      </header>
      <dl>
        ${metrics.map((metric) => `
          <div>
            <dt>${escapeHtml(metric.label)}</dt>
            <dd class="${escapeHtml(metric.className ?? "")}">${escapeHtml(metric.value)}</dd>
          </div>
        `).join("")}
      </dl>
      <a href="${escapeHtml(stage.report_path)}">Open stage report</a>
    </article>
  `;
}

function stageMetrics(stage) {
  const aggregate = stage.aggregate ?? {};
  if (stage.stage_id === "baseline_comparison") {
    return [
      { label: "Targets", value: formatInteger(stage.evaluated_count) },
      { label: "Lane FDE", value: formatMetric(aggregate.lane_aware_fde_m, "m") },
      deltaMetric("FDE delta", aggregate.fde_improvement_m),
    ];
  }
  if (stage.stage_id === "lane_selection") {
    return [
      { label: "Targets", value: formatInteger(stage.evaluated_count) },
      { label: "Heading FDE", value: formatMetric(aggregate.heading_lane_fde_m, "m") },
      deltaMetric("Vs nearest", aggregate.heading_vs_nearest_fde_improvement_m),
    ];
  }
  if (stage.stage_id === "lane_continuation") {
    return [
      { label: "Targets", value: formatInteger(stage.evaluated_count) },
      { label: "Improved", value: formatInteger(aggregate.improved_over_nearest_count) },
      deltaMetric("Link gain", aggregate.mean_lane_link_improvement_m),
    ];
  }
  return [
    { label: "Scenarios", value: formatInteger(stage.scenario_count) },
    { label: "Evaluated", value: formatInteger(stage.evaluated_count) },
    { label: "Duration", value: formatDuration(stage.duration_seconds) },
  ];
}

function deltaMetric(label, value) {
  const numeric = Number(value);
  return {
    label,
    value: value === null || value === undefined ? "n/a" : formatDelta(numeric),
    className: numeric > 0 ? "delta-positive" : numeric < 0 ? "delta-negative" : "",
  };
}

function renderFilters() {
  nodes.datasetFilters.innerHTML = state.payload.datasets
    .map((dataset) => checkboxTemplate({
      name: "dataset",
      value: dataset.dataset_id,
      label: `${dataset.label} (${dataset.scenario_count})`,
      checked: state.datasets.has(dataset.dataset_id),
    }))
    .join("");

  nodes.tagFilters.innerHTML = visibleTags()
    .map((tag) => checkboxTemplate({
      name: "tag",
      value: tag,
      label: tagLabel(tag),
      checked: state.tags.has(tag),
    }))
    .join("");

  nodes.componentFilters.innerHTML = state.payload.filters.component_names
    .map((component) => checkboxTemplate({
      name: "component",
      value: component,
      label: componentLabel(component),
      checked: state.components.has(component),
      className: "toggle-row",
    }))
    .join("");
}

function checkboxTemplate({ name, value, label, checked, className = "check-row" }) {
  const safeValue = escapeHtml(value);
  return `
    <label class="${className}">
      <input type="checkbox" name="${name}" value="${safeValue}" ${checked ? "checked" : ""} />
      <span>${escapeHtml(label)}</span>
    </label>
  `;
}

function render() {
  const scenarios = filteredScenarios();
  const selected = selectedScenario(scenarios);
  state.selectedId = selected?.scenario_id ?? null;

  renderCounts(scenarios);
  renderSelectorAtlas();
  renderDiagnostics();
  renderRows(scenarios);
  renderDetail(selected, scenarios);
  updateFilterChrome();
}

function renderCounts(scenarios) {
  const total = state.payload.scenarios.length;
  nodes.resultCount.textContent = `${scenarios.length} of ${total} scenarios`;
  nodes.datasetSummary.textContent = state.payload.datasets
    .map((dataset) => `${dataset.label}: ${dataset.scenario_count}`)
    .join(" / ");
}

function renderRows(scenarios) {
  if (scenarios.length === 0) {
    nodes.scenarioRows.innerHTML = `
      <tr class="empty-row">
        <td colspan="7">No scenarios match the active filters.</td>
      </tr>
    `;
    return;
  }

  nodes.scenarioRows.innerHTML = scenarios.map((scenario) => `
    <tr data-scenario-id="${escapeHtml(scenario.scenario_id)}" class="${scenario.scenario_id === state.selectedId ? "selected" : ""}" tabindex="0">
      <td><span class="rank-cell">#${scenario.rank}</span></td>
      <td>
        <span class="scenario-name">${escapeHtml(scenarioLabel(scenario.scenario_id))}</span>
        <span class="scenario-source">${escapeHtml(scenario.scenario_id)} / ${escapeHtml(scenario.source)}</span>
      </td>
      <td><span class="dataset-chip">${escapeHtml(shortDatasetLabel(scenario.dataset_id))}</span></td>
      <td><span class="score-chip">${formatNumber(scenario.score.interaction)}</span></td>
      <td><span class="failure-chip">${formatMetric(scenario.metrics.baseline_fde_m, "m")}</span></td>
      <td><div class="tag-cell">${tagChips(scenario.tags, 4)}</div></td>
      <td><div class="reason-snippet">${escapeHtml(scenario.reasons[0] ?? "Included for comparison.")}</div></td>
    </tr>
  `).join("");
}

function renderSelectorAtlas() {
  const atlas = state.selectorAtlas;
  if (!atlas || !Array.isArray(atlas.cases) || atlas.cases.length === 0) {
    nodes.selectorAtlasPanel.hidden = true;
    return;
  }

  nodes.selectorAtlasPanel.hidden = false;
  const groups = selectorAtlasGroups(atlas);
  if (groups.length === 0) {
    nodes.selectorAtlasPanel.hidden = true;
    return;
  }

  if (!state.selectorAtlasCategory || !groups.some((group) => group.category === state.selectorAtlasCategory)) {
    state.selectorAtlasCategory = groups[0].category;
  }

  const selectedGroup = groups.find((group) => group.category === state.selectorAtlasCategory) ?? groups[0];
  const aggregate = atlas.aggregate ?? {};
  nodes.selectorAtlasSummary.textContent = selectorAtlasSummaryText(aggregate);
  nodes.selectorAtlasReportLink.href = atlas.report_path
    ?? "../reports/waymo_lane_continuation_terminal_neighborhood_selector_decision_atlas_200.md";
  nodes.selectorAtlasMetrics.innerHTML = selectorAtlasMetricCards(aggregate);
  nodes.selectorAtlasTabs.innerHTML = groups
    .map((group) => `
      <button
        type="button"
        role="tab"
        aria-selected="${group.category === selectedGroup.category ? "true" : "false"}"
        data-selector-category="${escapeHtml(group.category)}"
      >
        ${escapeHtml(group.label)}
        <span>${group.cases.length}</span>
      </button>
    `)
    .join("");
  nodes.selectorAtlasCards.innerHTML = selectedGroup.cases
    .map(selectorAtlasCard)
    .join("");
}

function selectorAtlasGroups(atlas) {
  const labels = [
    ["candidate_recovery", "Recovered false holds"],
    ["accepted_recovery", "Accepted recoveries"],
    ["negative_control", "Negative controls"],
    ["retained_hold", "Remaining holds"],
    ["false_promotion", "False promotions"],
  ];
  const groups = labels
    .map(([category, label]) => ({
      category,
      label,
      cases: atlas.cases.filter((item) => item.category === category),
    }))
    .filter((group) => group.cases.length > 0);
  const known = new Set(labels.map(([category]) => category));
  const extras = atlas.cases.filter((item) => !known.has(item.category));
  if (extras.length > 0) {
    groups.push({ category: "other", label: "Other", cases: extras });
  }
  return groups;
}

function selectorAtlasSummaryText(aggregate) {
  const matches = formatMetric(aggregate.candidate_match_count);
  const total = formatMetric(aggregate.case_count);
  const recovered = formatMetric(aggregate.recovered_false_hold_count);
  const falsePromotes = formatMetric(aggregate.candidate_false_promote_count);
  const falseHolds = formatMetric(aggregate.candidate_false_hold_count);
  return `${matches}/${total} candidate-label agreement; ${recovered} recovered false hold, ${falsePromotes} false promotions, ${falseHolds} remaining false hold.`;
}

function selectorAtlasMetricCards(aggregate) {
  const rows = [
    ["Cards", aggregate.visual_asset_count],
    ["Matches", `${formatMetric(aggregate.candidate_match_count)}/${formatMetric(aggregate.case_count)}`],
    ["Recovered", aggregate.recovered_false_hold_count],
    ["Negatives held", aggregate.negative_control_count],
    ["False promotes", aggregate.candidate_false_promote_count],
    ["False holds", aggregate.candidate_false_hold_count],
  ];
  return rows
    .map(([label, value]) => `
      <div>
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(formatMetric(value))}</dd>
      </div>
    `)
    .join("");
}

function selectorAtlasCard(row) {
  return `
    <article class="selector-atlas-card ${escapeHtml(row.category)}">
      <img src="${escapeHtml(row.asset_path)}" alt="${escapeHtml(row.case_label)} selector decision card" />
      <div class="selector-card-body">
        <header>
          <span>${escapeHtml(row.case_label)}</span>
          <strong>${escapeHtml(row.decision_label)}</strong>
        </header>
        <p>${escapeHtml(row.scenario_id)} / track ${escapeHtml(row.track_id)}</p>
        <dl>
          <div>
            <dt>Gain</dt>
            <dd>${formatDelta(row.replay_gain_m)}</dd>
          </div>
          <div>
            <dt>Route ext</dt>
            <dd>${formatMetric(row.route_extension_m, "m")}</dd>
          </div>
          <div>
            <dt>Alt heading</dt>
            <dd>${formatMetric(row.alternate_heading_alignment)}</dd>
          </div>
          <div>
            <dt>Candidate</dt>
            <dd>${escapeHtml(shortDecision(row.candidate_decision))}</dd>
          </div>
        </dl>
        <p>${escapeHtml(row.candidate_rationale)}</p>
      </div>
    </article>
  `;
}

function renderDiagnostics() {
  const diagnostics = state.payload.case_diagnostics;
  if (!diagnostics || !Array.isArray(diagnostics.groups) || diagnostics.groups.length === 0) {
    nodes.diagnosticsPanel.hidden = true;
    return;
  }

  nodes.diagnosticsPanel.hidden = false;
  const groups = diagnostics.groups.filter((group) => Array.isArray(group.cases) && group.cases.length > 0);
  if (groups.length === 0) {
    nodes.diagnosticsPanel.hidden = true;
    return;
  }

  if (!state.diagnosticGroup || !groups.some((group) => group.group_id === state.diagnosticGroup)) {
    state.diagnosticGroup = groups[0].group_id;
  }

  const selectedGroup = groups.find((group) => group.group_id === state.diagnosticGroup) ?? groups[0];
  const summary = diagnostics.summary ?? {};
  nodes.diagnosticSummary.textContent = diagnosticSummaryText(diagnostics, summary);
  nodes.diagnosticReportLink.href = diagnostics.debug_report_path
    ?? diagnostics.report_path
    ?? "../reports/waymo_heading_aware_debug_casebook.md";
  nodes.diagnosticTabs.innerHTML = groups
    .map((group) => `
      <button
        type="button"
        role="tab"
        aria-selected="${group.group_id === selectedGroup.group_id ? "true" : "false"}"
        data-diagnostic-group="${escapeHtml(group.group_id)}"
      >
        ${escapeHtml(group.label)}
        <span>${group.cases.length}</span>
      </button>
    `)
    .join("");
  nodes.diagnosticRows.innerHTML = selectedGroup.cases
    .map((row, index) => diagnosticCaseCard(row, selectedGroup.group_id, index))
    .join("");
}

function diagnosticSummaryText(diagnostics, summary) {
  const scenarioCount = formatMetric(diagnostics.scenario_count);
  const targetCount = formatMetric(summary.evaluated_target_count);
  const nearestDelta = improvementPhrase(summary.heading_vs_nearest_fde_improvement_m, "vs nearest lane");
  const cvDelta = improvementPhrase(summary.heading_vs_constant_velocity_fde_improvement_m, "vs constant velocity");
  return `${scenarioCount} real scenarios / ${targetCount} targets; heading-aware ${nearestDelta} and ${cvDelta}.`;
}

function diagnosticCaseCard(row, groupId, index) {
  const tone = diagnosticTone(row, groupId);
  const delta = row.heading_vs_nearest_fde_improvement_m;
  return `
    <article class="diagnostic-case ${tone}">
      <header>
        <span>${index + 1}</span>
        <div>
          <strong>${escapeHtml(row.scenario_id)}</strong>
          <small>${escapeHtml(row.source_name)} / case ${formatMetric(row.scenario_index)}</small>
        </div>
        <em>${formatDelta(delta)}</em>
      </header>
      <dl>
        <div>
          <dt>CV FDE</dt>
          <dd>${formatMetric(row.constant_velocity_fde_m, "m")}</dd>
        </div>
        <div>
          <dt>Nearest</dt>
          <dd>${formatMetric(row.nearest_lane_fde_m, "m")}</dd>
        </div>
        <div>
          <dt>Heading</dt>
          <dd>${formatMetric(row.heading_lane_fde_m, "m")}</dd>
        </div>
        <div>
          <dt>Targets</dt>
          <dd>${formatMetric(row.evaluated_target_count)}</dd>
        </div>
        <div>
          <dt>Map used</dt>
          <dd>${formatMetric(row.heading_map_used_count)}</dd>
        </div>
        <div>
          <dt>Fallbacks</dt>
          <dd>${formatMetric(row.heading_fallback_count)}</dd>
        </div>
      </dl>
      <p>${escapeHtml(diagnosticInterpretation(row, groupId))}</p>
    </article>
  `;
}

function diagnosticTone(row, groupId) {
  if (groupId === "fallbacks") return "fallback";
  if ((row.heading_vs_nearest_fde_improvement_m ?? 0) < 0) return "regression";
  return "improvement";
}

function diagnosticInterpretation(row, groupId) {
  const reason = row.top_heading_fallback_reason && row.top_heading_fallback_reason !== "none"
    ? ` Top fallback: ${row.top_heading_fallback_reason}.`
    : "";
  if (groupId === "fallbacks") {
    return `High fallback counts point to map-match coverage, threshold, or target-type limits.${reason}`;
  }
  if ((row.heading_vs_nearest_fde_improvement_m ?? 0) < 0) {
    return `Nearest-lane selection scored better here, making this a useful regression case for matcher debugging.${reason}`;
  }
  return `Heading alignment avoided a worse nearest-lane hypothesis on this case.${reason}`;
}

function renderDetail(scenario, scenarios) {
  if (!scenario) {
    nodes.detailTitle.textContent = "No scenario selected";
    nodes.detailSubtitle.textContent = "Adjust filters to inspect matching scenarios.";
    nodes.detailTags.innerHTML = "";
    nodes.scenarioImage.removeAttribute("src");
    nodes.scenarioImage.alt = "";
    nodes.baselineCard.innerHTML = "";
    nodes.componentBars.innerHTML = "";
    nodes.metricGrid.innerHTML = "";
    nodes.reasonList.innerHTML = "";
    return;
  }

  nodes.detailTitle.textContent = scenarioLabel(scenario.scenario_id);
  nodes.detailSubtitle.textContent = `${scenario.scenario_id} / ${scenario.dataset_label} / score ${formatNumber(scenario.score.interaction)}`;
  nodes.detailTags.innerHTML = tagChips(scenario.tags, scenario.tags.length);
  nodes.scenarioImage.src = scenario.svg_path;
  nodes.scenarioImage.alt = `Trajectory preview for ${scenario.scenario_id}`;
  nodes.baselineCard.innerHTML = baselineCard(scenario);
  nodes.componentBars.innerHTML = componentBars(scenario.score.components);
  nodes.metricGrid.innerHTML = metrics(scenario.metrics);
  nodes.reasonList.innerHTML = scenario.reasons
    .map((reason) => `<li>${escapeHtml(reason)}</li>`)
    .join("");

  const index = scenarios.findIndex((item) => item.scenario_id === scenario.scenario_id);
  nodes.previousScenario.disabled = scenarios.length <= 1;
  nodes.nextScenario.disabled = scenarios.length <= 1;
  nodes.previousScenario.dataset.index = String(index <= 0 ? scenarios.length - 1 : index - 1);
  nodes.nextScenario.dataset.index = String(index >= scenarios.length - 1 ? 0 : index + 1);
}

function baselineCard(scenario) {
  const metrics = scenario.metrics;
  const cvMissRate = percentMetric(metrics.baseline_miss_rate);
  const laneMissRate = percentMetric(metrics.lane_aware_miss_rate);
  const evaluatedTargets = formatMetric(metrics.prediction_target_evaluated_count);
  const laneFde = metrics.lane_aware_fde_m;
  const hasLaneComparison = laneFde !== null && laneFde !== undefined;
  const fallbackReasons = Array.isArray(metrics.lane_aware_fallback_reasons)
    ? metrics.lane_aware_fallback_reasons
    : [];
  if (!hasLaneComparison) {
    return `
      <div class="baseline-grid">
        <div>
          <dt>ADE</dt>
          <dd>${formatMetric(metrics.baseline_ade_m, "m")}</dd>
        </div>
        <div>
          <dt>FDE</dt>
          <dd>${formatMetric(metrics.baseline_fde_m, "m")}</dd>
        </div>
        <div>
          <dt>Miss rate</dt>
          <dd>${cvMissRate}</dd>
        </div>
        <div>
          <dt>Targets</dt>
          <dd>${evaluatedTargets}</dd>
        </div>
      </div>
      <p>${escapeHtml(baselineInterpretation(metrics))}</p>
    `;
  }

  return `
    <div class="baseline-grid compare-grid">
      <div>
        <dt>CV FDE</dt>
        <dd>${formatMetric(metrics.baseline_fde_m, "m")}</dd>
      </div>
      <div>
        <dt>Lane FDE</dt>
        <dd>${formatMetric(metrics.lane_aware_fde_m, "m")}</dd>
      </div>
      <div>
        <dt>FDE delta</dt>
        <dd>${formatDelta(metrics.baseline_fde_improvement_m)}</dd>
      </div>
      <div>
        <dt>Lane miss</dt>
        <dd>${laneMissRate}</dd>
      </div>
      <div>
        <dt>Map used</dt>
        <dd>${formatMetric(metrics.lane_aware_map_used_count)}</dd>
      </div>
      <div>
        <dt>Targets</dt>
        <dd>${evaluatedTargets}</dd>
      </div>
    </div>
    <p>${escapeHtml(baselineInterpretation(metrics))}</p>
    ${fallbackReasons.length ? `<p class="fallback-note">Fallback reasons: ${escapeHtml(fallbackReasons.join(", "))}</p>` : ""}
  `;
}

function baselineInterpretation(metrics) {
  if (metrics.baseline_fde_m === null || metrics.baseline_fde_m === undefined) {
    return "No evaluable future target was available for this scenario.";
  }
  if (metrics.baseline_fde_m >= 20 || (metrics.baseline_miss_rate ?? 0) >= 0.75) {
    return "The constant-velocity baseline struggles here, making this a useful scenario for deeper prediction or replay analysis.";
  }
  if ((metrics.baseline_fde_improvement_m ?? 0) > 1.0 && (metrics.lane_aware_map_used_count ?? 0) > 0) {
    return "The lane-aware baseline reduces final displacement error here, showing why map context can matter for prediction evaluation.";
  }
  if (metrics.baseline_fde_m >= 5) {
    return "The baseline has moderate error here, useful for comparing against stronger forecasting assumptions.";
  }
  return "The baseline explains this short fixture well; this scenario is mainly useful for interaction scoring and visual sanity checks.";
}

function componentBars(components) {
  const maxValue = Math.max(1, ...Object.values(components));
  return Object.entries(components)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => {
      const width = Math.max(2, (value / maxValue) * 100);
      return `
        <div class="bar-row">
          <span class="bar-label">${escapeHtml(componentLabel(name))}</span>
          <span class="bar-track"><span class="bar-fill" style="width: ${width}%"></span></span>
          <span class="bar-value">${formatNumber(value)}</span>
        </div>
      `;
    })
    .join("");
}

function metrics(metricMap) {
  return Object.entries(metricLabels)
    .map(([key, label]) => `
      <div>
        <dt>${escapeHtml(label)}</dt>
        <dd>${formatMetric(metricMap[key], metricUnits[key])}</dd>
      </div>
    `)
    .join("");
}

function filteredScenarios() {
  const scenarios = state.payload.scenarios
    .filter((scenario) => state.datasets.has(scenario.dataset_id))
    .filter((scenario) => scenario.score.interaction >= state.minScore)
    .filter((scenario) => state.tags.size === 0 || [...state.tags].every((tag) => scenario.tags.includes(tag)))
    .filter((scenario) => state.components.size === 0 || [...state.components].every((name) => scenario.score.components[name] > 0));

  return sortScenarios(scenarios);
}

function sortScenarios(scenarios) {
  const sorted = [...scenarios];
  const optional = (value) => value ?? Number.POSITIVE_INFINITY;
  switch (state.sort) {
    case "score-asc":
      return sorted.sort((a, b) => a.score.interaction - b.score.interaction);
    case "distance-asc":
      return sorted.sort((a, b) => optional(a.metrics.min_pairwise_distance_m) - optional(b.metrics.min_pairwise_distance_m));
    case "ttc-asc":
      return sorted.sort((a, b) => optional(a.metrics.min_time_to_collision_s) - optional(b.metrics.min_time_to_collision_s));
    case "fde-desc":
      return sorted.sort((a, b) => (b.metrics.baseline_fde_m ?? -1) - (a.metrics.baseline_fde_m ?? -1));
    case "rank-asc":
      return sorted.sort((a, b) => a.rank - b.rank);
    case "score-desc":
    default:
      return sorted.sort((a, b) => b.score.interaction - a.score.interaction);
  }
}

function selectedScenario(scenarios) {
  if (scenarios.length === 0) {
    return null;
  }
  return scenarios.find((scenario) => scenario.scenario_id === state.selectedId) ?? scenarios[0];
}

function visibleTags() {
  const query = state.tagSearch.trim().toLowerCase();
  if (!query) {
    return state.payload.filters.tags;
  }
  return state.payload.filters.tags.filter((tag) => tagLabel(tag).toLowerCase().includes(query));
}

function updateFilterChrome() {
  nodes.datasetCount.textContent = `${state.datasets.size}/${state.payload.filters.datasets.length}`;
  nodes.tagCount.textContent = String(state.tags.size);
  nodes.scoreLabel.textContent = formatNumber(state.minScore);
  nodes.scoreRange.value = String(state.minScore);
}

function selectScenario(id) {
  state.selectedId = id;
  render();
}

function onDatasetChange(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.checked) {
    state.datasets.add(input.value);
  } else {
    state.datasets.delete(input.value);
  }
  render();
}

function onTagChange(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.checked) {
    state.tags.add(input.value);
  } else {
    state.tags.delete(input.value);
  }
  render();
}

function onComponentChange(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.checked) {
    state.components.add(input.value);
  } else {
    state.components.delete(input.value);
  }
  render();
}

nodes.scenarioRows.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const row = event.target.closest("tr[data-scenario-id]");
  if (row) selectScenario(row.dataset.scenarioId);
});

nodes.scenarioRows.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (!(event.target instanceof Element)) return;
  const row = event.target.closest("tr[data-scenario-id]");
  if (row) {
    event.preventDefault();
    selectScenario(row.dataset.scenarioId);
  }
});

nodes.datasetFilters.addEventListener("change", onDatasetChange);
nodes.tagFilters.addEventListener("change", onTagChange);
nodes.componentFilters.addEventListener("change", onComponentChange);

nodes.diagnosticTabs.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("button[data-diagnostic-group]");
  if (!button) return;
  state.diagnosticGroup = button.dataset.diagnosticGroup;
  renderDiagnostics();
});

nodes.selectorAtlasTabs.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("button[data-selector-category]");
  if (!button) return;
  state.selectorAtlasCategory = button.dataset.selectorCategory;
  renderSelectorAtlas();
});

nodes.tagSearch.addEventListener("input", (event) => {
  state.tagSearch = event.target.value;
  const existing = new Set(state.tags);
  nodes.tagFilters.innerHTML = visibleTags()
    .map((tag) => checkboxTemplate({
      name: "tag",
      value: tag,
      label: tagLabel(tag),
      checked: existing.has(tag),
    }))
    .join("");
});

nodes.scoreRange.addEventListener("input", (event) => {
  state.minScore = Number(event.target.value);
  render();
});

nodes.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

nodes.clearFilters.addEventListener("click", () => {
  state.datasets = new Set(state.payload.filters.datasets);
  state.tags = new Set();
  state.components = new Set();
  state.tagSearch = "";
  state.minScore = 0;
  state.sort = "score-desc";
  nodes.tagSearch.value = "";
  nodes.sortSelect.value = state.sort;
  renderFilters();
  render();
});

nodes.previousScenario.addEventListener("click", (event) => {
  const scenarios = filteredScenarios();
  const next = scenarios[Number(event.currentTarget.dataset.index)];
  if (next) selectScenario(next.scenario_id);
});

nodes.nextScenario.addEventListener("click", (event) => {
  const scenarios = filteredScenarios();
  const next = scenarios[Number(event.currentTarget.dataset.index)];
  if (next) selectScenario(next.scenario_id);
});

function tagChips(tags, limit) {
  const visible = tags.slice(0, limit);
  const hidden = tags.length - visible.length;
  const chips = visible.map((tag) => `<span class="tag-chip ${tagClass(tag)}">${escapeHtml(tagLabel(tag))}</span>`);
  if (hidden > 0) {
    chips.push(`<span class="tag-chip">+${hidden}</span>`);
  }
  return chips.join("");
}

function tagClass(tag) {
  if (tag === "vulnerable_road_user") return "vru";
  return tag;
}

function tagLabel(value) {
  return value.replaceAll("_", " ");
}

function componentLabel(value) {
  return value.replaceAll("_", " ");
}

function scenarioLabel(value) {
  const acronyms = new Set(["csv", "json", "sdc", "ttc", "vru"]);
  return value
    .split("_")
    .filter(Boolean)
    .map((word) => {
      if (acronyms.has(word.toLowerCase())) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function shortDatasetLabel(datasetId) {
  const labels = {
    synthetic: "Synthetic",
    waymo_native_json: "Waymo JSON",
    waymo_normalized_csv: "Waymo CSV",
  };
  return labels[datasetId] ?? datasetId;
}

function shortDecision(value) {
  if (value === "promote_terminal_neighborhood_alternate") return "promote";
  if (value === "hold_for_terminal_neighborhood_context") return "hold";
  return formatMetric(value);
}

function formatMetric(value, unit) {
  if (value === null || value === undefined) {
    return "n/a";
  }
  if (typeof value === "boolean") {
    return value ? "yes" : "no";
  }
  if (typeof value === "string") {
    return value.replaceAll("_", " ");
  }
  if (unit === undefined && Number.isInteger(value)) {
    return String(value);
  }
  if (unit === undefined && String(value).includes(".")) {
    return formatNumber(value);
  }
  return `${formatNumber(value)}${unit ? ` ${unit}` : ""}`;
}

function percentMetric(value) {
  return value === null || value === undefined ? "n/a" : `${formatNumber(value * 100)}%`;
}

function formatDelta(value) {
  if (value === null || value === undefined) {
    return "n/a";
  }
  const formatted = formatNumber(value);
  return value > 0 ? `+${formatted} m` : `${formatted} m`;
}

function improvementPhrase(value, label) {
  if (value === null || value === undefined) {
    return `has n/a ${label}`;
  }
  const verb = value >= 0 ? "improved" : "regressed";
  return `${verb} ${formatDelta(value)} ${label}`;
}

function formatNumber(value) {
  return Number(value).toFixed(2);
}

function formatInteger(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "n/a";
  }
  return Math.round(Number(value)).toLocaleString("en-US");
}

function formatDuration(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "n/a";
  }
  const seconds = Number(value);
  if (seconds < 60) {
    return `${seconds.toFixed(seconds < 10 ? 1 : 0)} s`;
  }
  const minutes = Math.floor(seconds / 60);
  return `${minutes}m ${Math.round(seconds % 60)}s`;
}

function formatBytes(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "n/a";
  }
  const bytes = Number(value);
  if (bytes >= 1_000_000_000) {
    return `${(bytes / 1_000_000_000).toFixed(2)} GB`;
  }
  if (bytes >= 1_000_000) {
    return `${(bytes / 1_000_000).toFixed(1)} MB`;
  }
  return `${formatInteger(bytes)} B`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

boot();
