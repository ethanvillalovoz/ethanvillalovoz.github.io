const state = {
  payload: null,
  selectedId: null,
  datasets: new Set(),
  tags: new Set(),
  components: new Set(),
  tagSearch: "",
  minScore: 0,
  sort: "score-desc",
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
  componentBars: document.querySelector("#componentBars"),
  metricGrid: document.querySelector("#metricGrid"),
  reasonList: document.querySelector("#reasonList"),
  previousScenario: document.querySelector("#previousScenario"),
  nextScenario: document.querySelector("#nextScenario"),
};

const metricLabels = {
  agent_count: "Agents",
  vulnerable_road_user_count: "VRUs",
  min_pairwise_distance_m: "Min distance",
  min_vru_distance_m: "Min VRU distance",
  min_path_distance_m: "Min path distance",
  min_time_to_collision_s: "Min TTC",
  max_speed_mps: "Max speed",
  ego_max_speed_mps: "Ego speed",
  max_deceleration_mps2: "Max decel",
};

const metricUnits = {
  min_pairwise_distance_m: "m",
  min_vru_distance_m: "m",
  min_path_distance_m: "m",
  min_time_to_collision_s: "s",
  max_speed_mps: "m/s",
  ego_max_speed_mps: "m/s",
  max_deceleration_mps2: "m/s^2",
};

async function boot() {
  try {
    const response = await fetch("scenarios.json");
    if (!response.ok) {
      throw new Error(`Unable to load scenarios.json (${response.status})`);
    }
    state.payload = await response.json();
    state.datasets = new Set(state.payload.filters.datasets);
    renderFilters();
    render();
  } catch (error) {
    nodes.resultCount.textContent = "Unable to load dashboard data";
    nodes.datasetSummary.textContent = error.message;
    nodes.scenarioRows.innerHTML = `
      <tr class="empty-row">
        <td colspan="6">Dashboard data could not be loaded.</td>
      </tr>
    `;
  }
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
        <td colspan="6">No scenarios match the active filters.</td>
      </tr>
    `;
    return;
  }

  nodes.scenarioRows.innerHTML = scenarios.map((scenario) => `
    <tr data-scenario-id="${escapeHtml(scenario.scenario_id)}" class="${scenario.scenario_id === state.selectedId ? "selected" : ""}" tabindex="0">
      <td><span class="rank-cell">#${scenario.rank}</span></td>
      <td>
        <span class="scenario-name">${escapeHtml(scenario.scenario_id)}</span>
        <span class="scenario-source">${escapeHtml(scenario.source)}</span>
      </td>
      <td><span class="dataset-chip">${escapeHtml(shortDatasetLabel(scenario.dataset_id))}</span></td>
      <td><span class="score-chip">${formatNumber(scenario.score.interaction)}</span></td>
      <td><div class="tag-cell">${tagChips(scenario.tags, 4)}</div></td>
      <td><div class="reason-snippet">${escapeHtml(scenario.reasons[0] ?? "Included for comparison.")}</div></td>
    </tr>
  `).join("");
}

function renderDetail(scenario, scenarios) {
  if (!scenario) {
    nodes.detailTitle.textContent = "No scenario selected";
    nodes.detailSubtitle.textContent = "Adjust filters to inspect matching scenarios.";
    nodes.detailTags.innerHTML = "";
    nodes.scenarioImage.removeAttribute("src");
    nodes.scenarioImage.alt = "";
    nodes.componentBars.innerHTML = "";
    nodes.metricGrid.innerHTML = "";
    nodes.reasonList.innerHTML = "";
    return;
  }

  nodes.detailTitle.textContent = scenario.scenario_id;
  nodes.detailSubtitle.textContent = `${scenario.dataset_label} / score ${formatNumber(scenario.score.interaction)}`;
  nodes.detailTags.innerHTML = tagChips(scenario.tags, scenario.tags.length);
  nodes.scenarioImage.src = scenario.svg_path;
  nodes.scenarioImage.alt = `Trajectory preview for ${scenario.scenario_id}`;
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

function shortDatasetLabel(datasetId) {
  const labels = {
    synthetic: "Synthetic",
    waymo_native_json: "Waymo JSON",
    waymo_normalized_csv: "Waymo CSV",
  };
  return labels[datasetId] ?? datasetId;
}

function formatMetric(value, unit) {
  if (value === null || value === undefined) {
    return "n/a";
  }
  return `${formatNumber(value)}${unit ? ` ${unit}` : ""}`;
}

function formatNumber(value) {
  return Number(value).toFixed(2);
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
