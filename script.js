const regionRules = {
  north: {
    name: "华北迎门派",
    tagline: "迎门不失礼",
    orientation: { type: "entrance", tagline: "门向即尊位" },
    explanation: "北方饭局喜欢\"见门见尊\"，鱼头锁定门向代表把尊贵与财气迎进场。主陪背墙面门掌控全局，副陪居右侧随时补位。",
    etiquette: [
      "主陪背墙面门坐镇，副陪居右手位，便于控场传话",
      "敬酒逆时针而行，从门口顺势\"迎宾回敬\"",
      "菜品上桌先照顾门侧宾客，体现\"客从门来，礼从鱼起\"",
      "鱼头揭开后主陪先动筷，示意开席"
    ],
    roles: [
      "主陪：背墙正对门，负责开场与第一杯",
      "副陪：主陪右手位，盯门口与传话",
      "贵宾：主陪对侧或左侧，方便礼敬",
      "同伴：顺门向顺时针排开，填补空位"
    ],
    hostCue: "主陪守正对大门黄金位",
    legend: "以大门为尊，鱼头迎门即迎财",
    palette: { accent: "#ff9a62", glow: "#ffdd9b" },
    story:
      "北派酒店多把门向视为气口，鱼头正对门，寓意\"贵客从门进，由鱼来迎\"。老话说\"鱼头对门，桌上不乱\"，主陪能第一时间察觉宾客进出。"
  },
  south: {
    name: "江南尊长派",
    tagline: "先尊后序",
    orientation: { type: "host", tagline: "鱼头朝向主宾" },
    explanation: "江浙沪讲究\"谁出面谁受敬\"，鱼头必须凝视主宾或长辈，以示礼数。主陪常坐景窗侧，背景优雅，主宾面向美景。",
    etiquette: [
      "主陪通常坐门斜对面景窗前，背景留白便于寒暄",
      "敬酒顺时针而行，优先长辈→贵宾→同辈→晚辈",
      "鱼头朝主宾时，副陪负责夹鱼身，避免尊长动手",
      "第一杯酒由主陪向主宾敬，开启全场节奏",
      "菜品摆盘讲究\"鱼头对贵、鱼尾向己\"，强调谦逊"
    ],
    roles: [
      "主陪：靠景窗或背景墙，主持节奏",
      "副陪：贴近主宾，负责夹鱼与敬酒动线",
      "长辈/主宾：鱼头正前位，享受最佳视野",
      "晚辈/团队：从副陪侧顺时针排，确保尊长居中"
    ],
    hostCue: "主陪坐景窗侧，视野最佳",
    legend: "鱼头永远跟着买单的人",
    palette: { accent: "#79f2c5", glow: "#c4ffe6" },
    story:
      "江南包间常有落地窗或水墨屏风，鱼头盯住主宾，整桌人瞬间明白谁是焦点。老苏州有句俗语：\"鱼头朝谁，谁掌话语权\"，体现江南商务宴的含蓄智慧。"
  },
  east: {
    name: "东部向日派",
    tagline: "朝日而设",
    orientation: { type: "fixed", degree: 90, tagline: "向东聚吉光" },
    explanation: "沿海东部受海港文化影响，朝东被视为迎接日出与新项目好运。",
    etiquette: [
      "若房间无窗，仍以东侧当作“海口”",
      "第一杯敬酒献给最年轻或最具创意的人，象征“新日出”",
      "鱼身切片由副陪顺时针传递，保持节奏"
    ],
    roles: [
      "主陪：占东侧位，守住\"向日\"视角",
      "副陪：靠门或西南侧，负责传菜与节奏",
      "主宾：主陪对侧，视线同向东光",
      "年轻/创意宾：紧邻主陪，负责抛话题"
    ],
    hostCue: "主陪守住东侧 90° 位",
    legend: "不管门在哪，东侧永远是鱼头的方向",
    palette: { accent: "#6ac4ff", glow: "#b8e5ff" },
    story:
      "东部商务饭局常把鱼头当作“项目指针”，谁拿到东侧位就默认主导议题。"
  },
  southwest: {
    name: "西南烟火派",
    tagline: "顺火护桌",
    orientation: { type: "offset", offset: -45, tagline: "门左 45° 为财神位" },
    explanation: "川渝黔把门左前方视作\"聚财火口\"，鱼头朝此位象征掌火控局。饭局围绕热菜、火锅，气氛热烈，副陪需随时加汤调味。",
    etiquette: [
      "副陪负责掌控辣度及加汤，随时照顾同桌需求",
      "敬酒强调\"左先右后\"，与朝向呼应",
      "鱼头落位后避免随意转盘，保留\"火口\"方位",
      "第一轮敬酒从主陪左侧(财神位)开始",
      "热菜上桌遵循\"先辣后清，先荤后素\"原则"
    ],
    roles: [
      "主陪：门左财神位坐镇火候",
      "副陪：门右或锅侧，负责加汤与分菜",
      "贵客：主陪对侧，方便敬酒与取菜",
      "随行：顺时针排开，避开锅口留出操作区"
    ],
    hostCue: "主陪偏门左，控锅控火",
    legend: "门左 45° 既顾财神又顾火喉",
    palette: { accent: "#ff6d91", glow: "#ffc1d3" },
    story:
      "西南包间多半围绕火锅或热菜展开，鱼头朝财神位让整桌气氛更热烈。川渝民间有\"鱼头向火，生意不败\"的说法，寓意生意红火、财源广进。"
  },
  coastal: {
    name: "沿海景观派",
    tagline: "向景取势",
    orientation: { type: "opposite", tagline: "鱼头对景窗" },
    explanation: "沿海酒店喜欢把鱼头对准窗景或海面，让主宾“看海决定方向”。",
    etiquette: [
      "若无窗景，改以最开阔的墙面或大屏为景",
      "副陪安排嘉宾轮流与景合照，提升仪式感",
      "敬酒路线“景→门→主桌”，呼应观景顺序"
    ],
    roles: [
      "主陪：靠景窗侧，背景即风景",
      "副陪：临门或侧边，负责摄影与节奏",
      "贵宾：面景而坐，成为“C 位”",
      "团队：沿两侧排布，避免挡住视线"
    ],
    hostCue: "主陪背景窗，宾客面海",
    legend: "让鱼头先看到风景，谈判才有空间",
    palette: { accent: "#8c9bff", glow: "#d3d7ff" },
    story:
      "临海饭局常以景观为主轴，鱼头对景时，照片与故事都更好讲。"
  },
  hk: {
    name: "港澳仪式派",
    tagline: "流程至上",
    orientation: { type: "fixed", degree: 315, tagline: "北西 45° 即主持位" },
    explanation: "港澳宴会受英式流程影响，鱼头常朝向西北 45° 的主持台/投影方向。",
    etiquette: [
      "主持或司仪位于西北 45°，鱼头指向即可互相提示",
      "敬酒与发言穿插，副陪负责 cue flow",
      "鱼头揭盖时配合灯光或音乐，强调典礼感"
    ],
    roles: [
      "主陪：靠近主持台或投影，随时串场",
      "副陪：门口或音控侧，负责时间提醒",
      "贵宾：主位对面，面向舞台或屏幕",
      "随行：按流程顺时针落座，预留走线"
    ],
    hostCue: "主陪靠近主持台，方便控场",
    legend: "一切围绕流程台展开",
    palette: { accent: "#f6b3ff", glow: "#ffe1ff" },
    story:
      "宴会流程紧凑，鱼头对准主持方向，谁该发言一目了然。"
  }
};

const directionMap = {
  north: { label: "正北", degree: 0, story: "正北被视作财位入口", tip: "门口正北时，先礼后食" },
  northeast: { label: "东北", degree: 45, story: "东北角象征新进贵宾", tip: "记得给东北侧宾客第一块鱼腮" },
  east: { label: "正东", degree: 90, story: "东面代表日出与崭新议题", tip: "东侧座位负责抛出开场话题" },
  southeast: { label: "东南", degree: 135, story: "东南常被视为贵人位", tip: "东南位宾客敬酒次序靠前" },
  south: { label: "正南", degree: 180, story: "正南象征火热、人情", tip: "南侧宾客负责烘托气氛" },
  southwest: { label: "西南", degree: 225, story: "西南位稳重务实", tip: "该席通常安排财务或决策者" },
  west: { label: "正西", degree: 270, story: "西面等同收官与复盘", tip: "西侧负责总结发言" },
  northwest: { label: "西北", degree: 315, story: "西北联想到掌舵者", tip: "西北席位多为司仪或主持" }
};

const directionOrder = ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"];

const tableBlueprints = {
  round: {
    label: "圆桌 · 对称敬酒",
    toastDirection: "顺时针",
    orientationCue: "圆桌强调均衡，所有人都能被鱼头照顾到。",
    highlight: "圆桌更适合 10~12 人，方便传菜"
  },
  oval: {
    label: "椭圆 · 长桌逻辑",
    toastDirection: "从长边开始",
    orientationCue: "椭圆桌需要“前后排”，鱼头指向的一侧默认为主排。",
    highlight: "两端可安排随从或主持"
  },
  square: {
    label: "方桌 · 新派仪式",
    toastDirection: "对角敬酒",
    orientationCue: "方桌更像会议，鱼头朝向即“议题屏幕”。",
    highlight: "适合 8~10 人，视觉利落"
  }
};

const vibeProfiles = {
  balanced: {
    name: "标准模式",
    tagline: "专业通俗兼顾",
    highlight: "兼顾专业性与易读性，适合日常使用",
    copyTone: "专业平实"
  },
  calm: {
    name: "庄重模式",
    tagline: "传统礼仪为重",
    highlight: "强调传统礼数，适合正式宴席",
    copyTone: "严谨庄重"
  },
  bold: {
    name: "生动模式",
    tagline: "文化特色突出",
    highlight: "强调地域文化特色，生动易懂",
    copyTone: "生动形象"
  }
};

const BUILD_ID = "2025-12-09";

const assetSources = {
  fish: `资源/鱼/鱼01.webp?v=${BUILD_ID}`,
  seat: `资源/座椅/座椅.webp?v=${BUILD_ID}`,
  tables: {
    // 若无桌子素材，保持 src 为空以跳过加载
    round: { src: null },
    oval: { src: null },
    square: { src: null }
  }
};

const tableContours = {};

const refs = {
  region: document.getElementById("regionSelect"),
  direction: document.getElementById("entryDirection"),
  table: document.getElementById("tableShape"),
  seats: document.getElementById("seatCount"),
  vibe: document.getElementById("vibeLevel"),
  screenshot: document.getElementById("screenshotMode"),
  seatLabel: document.getElementById("seatCountLabel"),
  tableLabel: document.getElementById("tableLabel"),
  orientation: document.getElementById("orientationOutput"),
  orientationDetail: document.getElementById("orientationDetail"),
  arrow: document.getElementById("arrowIndicator"),
  hostSeat: document.getElementById("hostSeat"),
  viceSeat: document.getElementById("viceSeat"),
  seatFlow: document.getElementById("seatFlow"),
  seatHighlights: document.getElementById("seatHighlights"),
  etiquette: document.getElementById("etiquetteList"),
  reason: document.getElementById("reasonBlock"),
  story: document.getElementById("regionStory"),
  planMood: document.getElementById("planMood"),
  regionBadge: document.getElementById("regionBadge"),
  vibeTagline: document.getElementById("vibeTagline"),
  highlightRow: document.getElementById("highlightRow"),
  stageTitle: document.getElementById("stageTitle"),
  stageRegionTag: document.getElementById("stageRegionTag"),
  stageDoorTag: document.getElementById("stageDoorTag"),
  stageTableTag: document.getElementById("stageTableTag"),
  stageNarrative: document.getElementById("stageNarrative"),
  seatRing: document.getElementById("seatRing"),
  stageTable: document.getElementById("stageTable"),
  stageFish: document.getElementById("stageFish"),
  stageArrow: document.getElementById("stageArrow"),
  doorIndicator: document.getElementById("doorIndicator"),
  regionPin: document.getElementById("regionPin"),
  dialPad: document.getElementById("dialPad"),
  dialPointer: document.getElementById("dialPointer"),
  copyBtn: document.getElementById("copyBtn"),
  resetBtn: document.getElementById("resetBtn"),
  regionGrid: document.getElementById("regionGrid"),
  planHeader: document.getElementById("planHeader")
};

if (assetSources.seat) {
  document.documentElement.style.setProperty("--seat-image", `url(${assetSources.seat})`);
}
if (assetSources.fish) {
  document.documentElement.style.setProperty("--fish-image", `url(${assetSources.fish})`);
}

const dialState = {
  active: false,
  pointerId: null,
  bounds: null,
  lastKey: refs.direction?.value ?? directionOrder[0],
  previewAngle: null,
  lastSnappedAngle: 0,
  snapIncrement: 0.5
};

let latestPlan = null;

const syncInputs = document.querySelectorAll("[data-sync]");
syncInputs.forEach((input) => input.addEventListener("input", handleUpdate));
refs.copyBtn.addEventListener("click", handleCopy);
refs.resetBtn.addEventListener("click", resetForm);
if (refs.dialPad) {
  refs.dialPad.addEventListener("pointerdown", handleDialPointerDown);
  refs.dialPad.addEventListener("wheel", handleDialWheel, { passive: false });
  refs.dialPad.addEventListener("keydown", handleDialKeyDown);
}

const customSelects = [];
initCustomSelects();

function handleUpdate() {
  const plan = composePlan();
  latestPlan = plan;
  renderPlan(plan);
}

function initCustomSelects() {
  const selects = [refs.region, refs.table, refs.vibe];
  selects.forEach((select) => {
    if (!select) return;
    const widget = createCustomSelect(select);
    if (widget) customSelects.push(widget);
  });
  document.addEventListener("click", (event) => {
    customSelects.forEach((widget) => {
      if (!widget.root.contains(event.target)) {
        widget.root.classList.remove("is-open");
      }
    });
  });
}

function createCustomSelect(select) {
  select.classList.add("sr-hidden");
  const wrapper = document.createElement("div");
  wrapper.className = "custom-select";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "select-trigger";

  const labelSpan = document.createElement("span");
  labelSpan.className = "select-label";

  const caret = document.createElement("span");
  caret.className = "select-caret";

  trigger.appendChild(labelSpan);
  trigger.appendChild(caret);

  const menu = document.createElement("div");
  menu.className = "select-menu";

  const buildOptions = () => {
    menu.innerHTML = "";
    Array.from(select.options).forEach((opt) => {
      const item = document.createElement("div");
      item.className = "select-option";
      item.dataset.value = opt.value;
      item.textContent = opt.textContent;
      if (opt.selected) item.classList.add("is-selected");
      item.addEventListener("click", () => {
        select.value = opt.value;
        select.dispatchEvent(new Event("input", { bubbles: true }));
        refreshLabel();
        wrapper.classList.remove("is-open");
      });
      menu.appendChild(item);
    });
  };

  const refreshLabel = () => {
    const active = select.options[select.selectedIndex];
    labelSpan.textContent = active ? active.textContent : "请选择";
    menu.querySelectorAll(".select-option").forEach((node) => {
      node.classList.toggle("is-selected", node.dataset.value === select.value);
    });
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const alreadyOpen = wrapper.classList.contains("is-open");
    customSelects.forEach((w) => w.root.classList.remove("is-open"));
    if (!alreadyOpen) wrapper.classList.add("is-open");
  });

  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);
  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);

  select.addEventListener("change", refreshLabel);
  select.addEventListener("input", refreshLabel);

  buildOptions();
  refreshLabel();

  return { root: wrapper, refreshLabel };
}

function composePlan() {
  const regionKey = refs.region.value;
  const directionKey = refs.direction.value;
  const tableKey = refs.table.value;
  const seats = Number(refs.seats.value);
  const vibeKey = refs.vibe.value;
  const screenshotMode = refs.screenshot.checked;

  const region = regionRules[regionKey];
  const direction = directionMap[directionKey];
  const table = tableBlueprints[tableKey];
  const vibe = vibeProfiles[vibeKey];
  const tableProfile = tableContours[tableKey] || null;

  const doorDegree = direction.degree;
  const hostDegree = normalizeDegree(doorDegree + 180);
  const viceDegree = normalizeDegree(hostDegree + (seats > 10 ? -40 : 40));
  const orientationDegree = resolveOrientation(region.orientation, doorDegree, hostDegree);
  const compass = describeCompass(orientationDegree);
  const hostClock = degreeToClock(hostDegree);
  const viceClock = degreeToClock(viceDegree);

  const orientationText = `${compass} · ${region.orientation.tagline}`;
  const orientationDetail = `${region.explanation} ${direction.story}，${table.orientationCue}`;
  const seatFlow = `主陪(${hostClock}) → 副陪(${viceClock}) → 贵宾 → 同伴，${table.toastDirection}落座`;

  const seatHighlights = buildSeatHighlights({
    seats,
    hostClock,
    viceClock,
    table,
    region,
    vibe
  });

  const etiquette = [...region.etiquette.slice(0, 3), direction.tip];

  const reason = `${vibe.copyTone}语气：以 ${region.name} 的“${region.tagline}”哲学为底，参考入门${direction.label}的动线及 ${table.label} 的秩序，得出此鱼头指令。`;
  const story = region.story;
  const highlights = [region.legend, table.highlight, vibe.highlight];
  const regionShort = region.name.replace(/派/g, "") || region.name;
  const stageNarrative = `${direction.story}，${region.legend}。${table.orientationCue}`;
  const stageTitle = `${region.name} · ${direction.label}门向`;

  const summary = `【鱼头朝向指示器】地域：${region.name}；门向：${direction.label}；桌型：${table.label}；人数：${seats}。鱼头建议：${orientationText}。座次：${seatFlow}。提醒：${etiquette.join(" / ")}`;

  return {
    region,
    direction,
    directionKey,
    table,
    vibe,
    seats,
    screenshotMode,
    tableKey: tableKey,
    orientationText,
    orientationDetail,
    orientationDegree,
    doorDegree,
    hostSeatText: `${hostClock} · ${region.hostCue}`,
    viceSeatText: `${viceClock} · 护持主宾`,
    seatFlow,
    seatHighlights,
    etiquette,
    reason,
    story,
    highlights,
    summary,
    regionShort,
    stageNarrative,
    stageTitle,
    hostDegree,
    viceDegree,
    tableProfile
  };
}

function renderPlan(plan) {
  document.body.classList.toggle("screenshot-mode", plan.screenshotMode);
  refs.seatLabel.textContent = `${plan.seats}席`;
  refs.tableLabel.textContent = plan.table.label;
  refs.orientation.textContent = plan.orientationText;
  refs.orientationDetail.textContent = plan.orientationDetail;
  refs.arrow.style.transform = `translate(-50%, -100%) rotate(${plan.orientationDegree}deg)`;
  refs.stageArrow.style.transform = `translate(-50%, -100%) rotate(${plan.orientationDegree}deg)`;
  const doorAngle = getDoorAngleForRender(plan);
  updateDoorVisual(doorAngle);
  if (refs.dialPad) {
    refs.dialPad.setAttribute("aria-valuenow", String(Math.round(doorAngle)));
    refs.dialPad.setAttribute("aria-valuetext", plan.direction.label);
  }
  refs.hostSeat.textContent = plan.hostSeatText;
  refs.viceSeat.textContent = plan.viceSeatText;
  refs.seatFlow.textContent = plan.seatFlow;
  refs.reason.textContent = plan.reason;
  refs.story.textContent = plan.story;
  refs.stageTitle.textContent = plan.stageTitle;
  refs.stageRegionTag.textContent = plan.region.name;
  refs.stageDoorTag.textContent = `门向 ${plan.direction.label}`;
  refs.stageTableTag.textContent = plan.table.label;
  refs.stageNarrative.textContent = plan.stageNarrative;
  refs.regionPin.textContent = plan.regionShort;
  refs.planMood.textContent = `${plan.region.tagline} · ${plan.vibe.name}`;
  refs.regionBadge.textContent = plan.region.name;
  refs.regionBadge.style.background = `${plan.region.palette.accent}1a`;
  refs.regionBadge.style.borderColor = plan.region.palette.accent;
  refs.regionBadge.style.color = plan.region.palette.accent;
  refs.vibeTagline.textContent = plan.vibe.tagline;
  dialState.lastKey = plan.directionKey;

  const tableAsset = assetSources.tables[plan.tableKey];
  if (tableAsset?.src) {
    refs.stageTable.style.setProperty("--table-image", `url(${tableAsset.src})`);
  } else {
    refs.stageTable.style.removeProperty("--table-image");
  }
  if (refs.stageFish) {
    refs.stageFish.style.transform = `translate(-50%, -50%) rotate(${plan.orientationDegree}deg)`;
  }

  refs.stageTable.classList.remove("stage-table--round", "stage-table--oval", "stage-table--square");
  refs.stageTable.classList.add(`stage-table--${plan.tableKey}`);

  document.documentElement.style.setProperty("--accent", plan.region.palette.accent);
  document.documentElement.style.setProperty("--accent-2", plan.region.palette.glow);

  refs.seatHighlights.innerHTML = plan.seatHighlights
    .map(
      (item) => `
        <li>
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
        </li>
      `
    )
    .join("");

  refs.etiquette.innerHTML = plan.etiquette
    .map((tip) => `<li>${tip}</li>`)
    .join("");

  refs.highlightRow.innerHTML = plan.highlights
    .map((text) => `<span class="soft-pill">${text}</span>`)
    .join("");

  const tableBounds = refs.stageTable?.getBoundingClientRect();
  const seatBounds = refs.seatRing?.getBoundingClientRect();
  const tableRadius = tableBounds?.width ? Math.max(60, tableBounds.width / 2) : 120;
  const railRadius = seatBounds?.width ? Math.max(tableRadius + 12, seatBounds.width / 2) : tableRadius + 28;
  const seatMarkers = buildSeatMarkers({
    seats: plan.seats,
    hostDegree: plan.hostDegree,
    viceDegree: plan.viceDegree,
    contourProfile: plan.tableProfile,
    tableRadius,
    railRadius,
    tableKey: plan.tableKey
  });
  renderSeatMarkers(seatMarkers);
}

function buildSeatHighlights({ seats, hostClock, viceClock, table, region, vibe }) {
  const layers = seats > 12 ? "双圈" : "单圈";
  const buffer = seats - 2;
  const roleLine = region.roles?.join("；") ?? "主陪锁位，副陪护菜，宾客顺时针排位";
  return [
    {
      title: "落座节奏",
      detail: `${hostClock} 主陪、${viceClock} 副陪先定，剩余 ${buffer} 席顺着${table.toastDirection}排布。`
    },
    {
      title: "氛围提示",
      detail: `${vibe.highlight}，${region.tagline} 做底色。`
    },
    {
      title: "桌面结构",
      detail: `${table.label} 建议 ${layers} 摆位，超过 12 人可从副陪侧外扩。`
    },
    {
      title: "角色分工",
      detail: roleLine
    }
  ];
}

function resolveOrientation(strategy, doorDegree, hostDegree) {
  switch (strategy.type) {
    case "entrance":
      return doorDegree;
    case "opposite":
      return normalizeDegree(doorDegree + 180);
    case "host":
      return hostDegree;
    case "fixed":
      return strategy.degree ?? 0;
    case "offset":
      return normalizeDegree(doorDegree + (strategy.offset ?? 0));
    default:
      return doorDegree;
  }
}

function buildSeatMarkers({ seats, hostDegree, viceDegree, contourProfile, tableRadius, railRadius, tableKey }) {
  const markers = [];
  const step = 360 / seats;
  const baseRadius = tableRadius || 120;
  
  // 根据桌型计算边缘距离
  const getTableEdgeRadius = (angle) => {
    if (tableKey === 'oval') {
      // 椭圆桌: 水平方向更宽
      const rad = (angle * Math.PI) / 180;
      const a = baseRadius * 1.15; // 长轴
      const b = baseRadius * 0.95; // 短轴
      return Math.sqrt((a * a * b * b) / (b * b * Math.cos(rad) ** 2 + a * a * Math.sin(rad) ** 2));
    } else if (tableKey === 'square') {
      // 方桌: 计算到正方形边的距离
      const rad = (angle * Math.PI) / 180;
      const halfSide = baseRadius * 0.85;
      const dx = Math.abs(Math.cos(rad));
      const dy = Math.abs(Math.sin(rad));
      if (dx > dy) {
        return halfSide / dx;
      } else {
        return halfSide / dy;
      }
    } else {
      // 圆桌: 固定半径
      return baseRadius;
    }
  };
  
  const seatGap = 32; // 座椅与桌边的距离
  
  for (let i = 0; i < seats; i++) {
    const angle = normalizeDegree(hostDegree + i * step);
    const edgeRadius = getTableEdgeRadius(angle);
    const distance = edgeRadius + seatGap;
    const { x, y } = polarToCartesian(angle, distance);
    markers.push({
      angle,
      role: "guest",
      label: i + 1,
      title: `席位 ${i + 1}`,
      x,
      y
    });
  }
  
  if (markers.length) {
    markers[0].role = "host";
    markers[0].label = "主";
    markers[0].title = "主陪";
  }
  const viceIndex = markers.reduce((bestIdx, marker, idx) => {
    const currentDiff = angularDistance(marker.angle, viceDegree);
    const bestDiff = angularDistance(markers[bestIdx].angle, viceDegree);
    return currentDiff < bestDiff ? idx : bestIdx;
  }, 0);
  markers[viceIndex].role = "vice";
  markers[viceIndex].label = "副";
  markers[viceIndex].title = "副陪";
  return markers;
}

function normalizeDegree(value) {
  return ((value % 360) + 360) % 360;
}

function describeCompass(degree) {
  const spans = [
    { label: "正北", start: 337.5, end: 360 },
    { label: "正北", start: 0, end: 22.5 },
    { label: "东北", start: 22.5, end: 67.5 },
    { label: "正东", start: 67.5, end: 112.5 },
    { label: "东南", start: 112.5, end: 157.5 },
    { label: "正南", start: 157.5, end: 202.5 },
    { label: "西南", start: 202.5, end: 247.5 },
    { label: "正西", start: 247.5, end: 292.5 },
    { label: "西北", start: 292.5, end: 337.5 }
  ];
  const target = spans.find((span) => inRange(degree, span.start, span.end));
  return target ? target.label : "正北";
}

function inRange(value, start, end) {
  if (start > end) {
    return value >= start || value < end;
  }
  return value >= start && value < end;
}

function nearestDirectionKey(angle) {
  let closestKey = directionOrder[0];
  let minDiff = Number.POSITIVE_INFINITY;
  directionOrder.forEach((key) => {
    const targetDegree = directionMap[key]?.degree ?? 0;
    const diff = angularDistance(angle, targetDegree);
    if (diff < minDiff) {
      minDiff = diff;
      closestKey = key;
    }
  });
  return closestKey;
}

function normalizeIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function angularDistance(a, b) {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}

function polarToCartesian(angle, radius) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius
  };
}

function getContourRadius(profile, angle) {
  if (!profile || !profile.contour || !profile.contour.length) {
    return 1;
  }
  const contour = profile.contour;
  const normalizedAngle = normalizeDegree(angle);
  const exact = (normalizedAngle / 360) * contour.length;
  const baseIndex = Math.floor(exact) % contour.length;
  const nextIndex = (baseIndex + 1) % contour.length;
  const fraction = exact - Math.floor(exact);
  const baseValue = contour[baseIndex]?.value ?? 1;
  const nextValue = contour[nextIndex]?.value ?? baseValue;
  const interpolated = baseValue + (nextValue - baseValue) * fraction;
  return Math.max(0.5, Math.min(1.2, interpolated || 1));
}

function renderSeatMarkers(markers) {
  if (!refs.seatRing) return;
  refs.seatRing.innerHTML = markers
    .map((marker) => {
      // 计算座椅旋转角度,使其面向桌子中心
      const rotation = marker.angle + 90;
      return `<div class="seat-marker seat-marker--${marker.role}" style="--x:${marker.x}px; --y:${marker.y}px; --rotation:${rotation}deg;" title="${marker.title}">${marker.label}</div>`;
    })
    .join("");
}

function getDoorAngleForRender(plan) {
  if (dialState.active && typeof dialState.previewAngle === "number") {
    return dialState.previewAngle;
  }
  return plan.doorDegree;
}

function updateDoorVisual(angle) {
  if (refs.dialPointer) {
    refs.dialPointer.style.transform = `rotate(${angle}deg)`;
  }
  if (refs.doorIndicator) {
    refs.doorIndicator.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
  }
}

function handleDialPointerDown(event) {
  console.log("🎯 handleDialPointerDown triggered", { dialPad: refs.dialPad, event });
  if (!refs.dialPad) {
    console.warn("❌ refs.dialPad is null!");
    return;
  }
  event.preventDefault();
  refs.dialPad.setPointerCapture?.(event.pointerId);
  dialState.active = true;
  dialState.pointerId = event.pointerId;
  dialState.bounds = refs.dialPad.getBoundingClientRect();
  
  // 初始化lastSnappedAngle为当前角度
  const currentAngle = computeDialAngle(event.clientX, event.clientY, dialState.bounds);
  dialState.lastSnappedAngle = Math.round(currentAngle / dialState.snapIncrement) * dialState.snapIncrement;
  
  refs.dialPad.classList.add("is-grabbing");
  refs.dialPad.focus();
  window.addEventListener("pointermove", handleDialPointerMove);
  window.addEventListener("pointerup", handleDialPointerUp);
  window.addEventListener("pointercancel", handleDialPointerUp);
  console.log("✅ Dial activated", dialState);
  updateDialFromPointer(event);
}

function handleDialPointerMove(event) {
  if (!dialState.active || event.pointerId !== dialState.pointerId) return;
  console.log("🔄 handleDialPointerMove", { x: event.clientX, y: event.clientY });
  event.preventDefault();
  updateDialFromPointer(event);
}

function handleDialPointerUp(event) {
  if (!dialState.active || (event.pointerId !== undefined && event.pointerId !== dialState.pointerId)) return;
  dialState.active = false;
  dialState.pointerId = null;
  dialState.bounds = null;
  dialState.previewAngle = null;
  refs.dialPad?.classList.remove("is-grabbing");
  refs.dialPad?.releasePointerCapture?.(event.pointerId);
  window.removeEventListener("pointermove", handleDialPointerMove);
  window.removeEventListener("pointerup", handleDialPointerUp);
  window.removeEventListener("pointercancel", handleDialPointerUp);
  if (latestPlan) {
    updateDoorVisual(latestPlan.doorDegree);
  }
}

function handleDialWheel(event) {
  if (!refs.dialPad) return;
  event.preventDefault();
  const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  if (!delta) return;
  rotateDialBy(delta > 0 ? 1 : -1);
}

function handleDialKeyDown(event) {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    rotateDialBy(1);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    rotateDialBy(-1);
  }
}

function updateDialFromPointer(event) {
  if (!refs.dialPad) return;
  const bounds = dialState.bounds || refs.dialPad.getBoundingClientRect();
  dialState.bounds = bounds;
  const rawAngle = computeDialAngle(event.clientX, event.clientY, bounds);
  
  // 将角度量化为0.5度的倍数
  const snappedAngle = Math.round(rawAngle / dialState.snapIncrement) * dialState.snapIncrement;
  
  // 只有当角度变化达到0.5度时才更新
  if (Math.abs(snappedAngle - dialState.lastSnappedAngle) >= dialState.snapIncrement) {
    dialState.lastSnappedAngle = snappedAngle;
    dialState.previewAngle = snappedAngle;
    updateDoorVisual(snappedAngle);
    
    const snappedKey = nearestDirectionKey(snappedAngle);
    if (snappedKey && snappedKey !== refs.direction.value) {
      refs.direction.value = snappedKey;
      handleUpdate();
    }
  }
}

function rotateDialBy(step) {
  const currentKey = refs.direction.value || dialState.lastKey || directionOrder[0];
  const currentIndex = directionOrder.indexOf(currentKey);
  const nextIndex = normalizeIndex(currentIndex + step, directionOrder.length);
  const nextKey = directionOrder[nextIndex];
  if (nextKey && nextKey !== refs.direction.value) {
    refs.direction.value = nextKey;
    handleUpdate();
  }
}

function computeDialAngle(clientX, clientY, bounds) {
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  const dx = clientX - centerX;
  const dy = clientY - centerY;
  const rad = Math.atan2(dx, -dy);
  return normalizeDegree((rad * 180) / Math.PI);
}

function preloadTableContours() {
  Object.entries(assetSources.tables).forEach(([key, asset]) => {
    if (!asset?.src) return;
    extractContourFromImage(asset.src)
      .then((profile) => {
        tableContours[key] = profile;
        if (latestPlan?.tableKey === key) {
          handleUpdate();
        }
      })
      .catch((error) => {
        console.warn("无法解析桌子轮廓", asset.src, error);
      });
  });
}

function extractContourFromImage(src, sampleCount = 96) {
  return loadImage(src).then((image) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const contour = sampleContour(data, canvas.width, canvas.height, sampleCount);
    return { contour, src };
  });
}

function sampleContour(data, width, height, sampleCount) {
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(centerX, centerY) - 2;
  const contour = [];
  const alphaThreshold = 24;
  for (let i = 0; i < sampleCount; i++) {
    const angle = (i / sampleCount) * 360;
    const rad = (angle * Math.PI) / 180;
    let lastSolid = maxRadius;
    for (let r = 0; r < maxRadius; r++) {
      const x = Math.round(centerX + Math.cos(rad) * r);
      const y = Math.round(centerY + Math.sin(rad) * r);
      if (x < 0 || x >= width || y < 0 || y >= height) break;
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha < alphaThreshold) {
        break;
      }
      lastSolid = r;
    }
    const normalized = Math.max(0.4, lastSolid / maxRadius);
    contour.push({ angle, value: normalized });
  }
  return contour;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

function degreeToClock(degree) {
  const normalized = normalizeDegree(degree);
  const clockIndex = Math.round(normalized / 30) % 12;
  const labels = ["12点位", "1点位", "2点位", "3点位", "4点位", "5点位", "6点位", "7点位", "8点位", "9点位", "10点位", "11点位"];
  return labels[clockIndex];
}

function populateRegionGrid() {
  const fragment = document.createDocumentFragment();
  Object.values(regionRules).forEach((region) => {
    const card = document.createElement("article");
    card.className = "region-card";
    card.innerHTML = `
      <span class="soft-pill" style="border-color:${region.palette.accent}; color:${region.palette.accent}">${region.tagline}</span>
      <h4>${region.name}</h4>
      <p>${region.legend}</p>
    `;
    fragment.appendChild(card);
  });
  refs.regionGrid.appendChild(fragment);
}

function handleCopy() {
  if (!latestPlan) return;
  navigator.clipboard
    .writeText(latestPlan.summary)
    .then(() => {
      refs.copyBtn.textContent = "已复制";
      setTimeout(() => (refs.copyBtn.textContent = "复制方案"), 1600);
    })
    .catch(() => {
      refs.copyBtn.textContent = "复制失败";
      setTimeout(() => (refs.copyBtn.textContent = "复制方案"), 1600);
    });
}

function resetForm() {
  refs.region.value = "north";
  refs.direction.value = "north";
  refs.table.value = "round";
  refs.seats.value = 10;
  refs.vibe.value = "balanced";
  refs.screenshot.checked = false;
  handleUpdate();
}

populateRegionGrid();
handleUpdate();
preloadTableContours();
