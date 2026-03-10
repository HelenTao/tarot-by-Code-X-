const SPREADS = [
  { id: "single-guidance", name: "单张指引", cards: 1, difficulty: "simple", keywords: ["建议", "方向", "提醒"], positions: ["核心指引"], image: "assets/single-guidance.svg", description: "用于快速聚焦当下最关键的提醒。" },
  { id: "three-time", name: "时间三牌（过去-现在-未来）", cards: 3, difficulty: "simple", keywords: ["未来", "发展", "趋势"], positions: ["过去成因", "现在状态", "近期走向"], image: "assets/three-time.svg", description: "经典三牌结构，适合看清事件脉络。" },
  { id: "choice-3", name: "二选一决策阵", cards: 3, difficulty: "simple", keywords: ["选择", "比较", "纠结"], positions: ["方案A能量", "方案B能量", "综合建议"], image: "assets/choice-3.svg", description: "帮助比较两条路径的代价与回报。" },
  { id: "relationship-5", name: "关系五张牌阵", cards: 5, difficulty: "medium", keywords: ["感情", "关系", "复合"], positions: ["你当前状态", "对方当前状态", "关系核心", "阻碍/误区", "下一步行动"], image: "assets/relationship-5.svg", description: "从双人视角拆解关系问题。" },
  { id: "career-6", name: "事业六芒阵", cards: 6, difficulty: "medium", keywords: ["事业", "工作", "跳槽", "晋升"], positions: ["现状", "优势资源", "潜在盲点", "外部机会", "现实风险", "行动策略"], image: "assets/career-6.svg", description: "判断职业机会窗口与执行路径。" },
  { id: "horseshoe-7", name: "马蹄七张阵", cards: 7, difficulty: "advanced", keywords: ["全貌", "复杂", "综合"], positions: ["过去影响", "当前处境", "隐藏因素", "当事人态度", "外部环境", "行动建议", "结果趋势"], image: "assets/celtic-lite-8.svg", description: "适合中长期复杂问题。" },
  { id: "celtic-lite-8", name: "凯尔特十字（精简8位）", cards: 8, difficulty: "advanced", keywords: ["全局", "长期", "深度"], positions: ["核心议题", "当前阻力", "深层动因", "显性目标", "过往基础", "近期发展", "外部互动", "综合结论"], image: "assets/celtic-lite-8.svg", description: "适用于需要深挖动机与结构的问题。" },
  { id: "annual-12", name: "年度十二宫阵", cards: 12, difficulty: "advanced", keywords: ["一年", "年度", "长期", "规划"], positions: ["第一阶段/起点", "第二阶段/资源", "第三阶段/推进", "第四阶段/关系", "第五阶段/扩张", "第六阶段/调整", "第七阶段/挑战", "第八阶段/突破", "第九阶段/收获", "第十阶段/内在课题", "第十一阶段/外部机会", "第十二阶段/总结与收口"], image: "assets/annual-12.svg", description: "适合做年度策略与复盘。" },
];

const CARD_OPTIONS = ["愚者", "魔术师", "女祭司", "皇后", "皇帝", "教皇", "恋人", "战车", "力量", "隐者", "命运之轮", "正义", "倒吊人", "死神", "节制", "恶魔", "高塔", "星星", "月亮", "太阳", "审判", "世界", "权杖王牌", "权杖二", "权杖三", "权杖四", "权杖五", "权杖六", "权杖七", "权杖八", "权杖九", "权杖十", "权杖侍者", "权杖骑士", "权杖皇后", "权杖国王", "圣杯王牌", "圣杯二", "圣杯三", "圣杯四", "圣杯五", "圣杯六", "圣杯七", "圣杯八", "圣杯九", "圣杯十", "圣杯侍者", "圣杯骑士", "圣杯皇后", "圣杯国王", "宝剑王牌", "宝剑二", "宝剑三", "宝剑四", "宝剑五", "宝剑六", "宝剑七", "宝剑八", "宝剑九", "宝剑十", "宝剑侍者", "宝剑骑士", "宝剑皇后", "宝剑国王", "星币王牌", "星币二", "星币三", "星币四", "星币五", "星币六", "星币七", "星币八", "星币九", "星币十", "星币侍者", "星币骑士", "星币皇后", "星币国王"];

const CARD_MEANINGS = {
  愚者: { upright: "新旅程、信任直觉、勇敢尝试", reversed: "冲动冒进、准备不足", advice: "保持开放，同时把风险管理做扎实。" },
  魔术师: { upright: "资源整合、行动力", reversed: "分心、技巧滥用", advice: "聚焦一个关键目标。" },
  恋人: { upright: "价值一致、连接", reversed: "犹豫、价值冲突", advice: "厘清底线与优先级。" },
  战车: { upright: "推进、执行", reversed: "硬推受阻", advice: "统一方向后再发力。" },
  命运之轮: { upright: "转机、周期变化", reversed: "停滞重复", advice: "把握窗口期。" },
  节制: { upright: "平衡、整合", reversed: "失衡、极端", advice: "先做小幅校准。" },
  月亮: { upright: "不确定、潜意识", reversed: "迷雾渐散", advice: "把模糊感逐条验证。" },
  太阳: { upright: "清晰、成功", reversed: "短暂受挫", advice: "保持坦诚沟通。" },
};

const DEFAULT_SUIT_MEANINGS = {
  权杖: { upright: "行动、热情、推进", reversed: "冲动、耗竭", advice: "聚焦优先级，避免无效忙碌。" },
  圣杯: { upright: "情感、关系、共鸣", reversed: "情绪化、回避", advice: "先命名情绪，再沟通诉求。" },
  宝剑: { upright: "思考、决策、沟通", reversed: "焦虑、争执", advice: "回到事实层面。" },
  星币: { upright: "现实、资源、积累", reversed: "拖延、错配", advice: "做预算和时间表。" },
};

const questionInput = document.querySelector("#question");
const recommendBtn = document.querySelector("#recommendBtn");
const spreadSection = document.querySelector("#spreadSection");
const spreadRecommendations = document.querySelector("#spreadRecommendations");
const drawSection = document.querySelector("#drawSection");
const drawForm = document.querySelector("#drawForm");
const selectedSpreadInfo = document.querySelector("#selectedSpreadInfo");
const analyzeBtn = document.querySelector("#analyzeBtn");
const resultSection = document.querySelector("#resultSection");
const result = document.querySelector("#result");
const collectiveSymbols = document.querySelector("#collectiveSymbols");

let selectedSpread = null;

Array.from(document.querySelectorAll('input[name="readingMode"]')).forEach((el) => {
  el.addEventListener("change", () => {
    collectiveSymbols.classList.toggle("hidden", getMode() !== "collective");
    drawSection.classList.add("hidden");
    resultSection.classList.add("hidden");
  });
});

recommendBtn.addEventListener("click", () => {
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  const question = questionInput.value.trim();
  const recommendations = recommendSpreads(question, difficulty);
  renderRecommendations(recommendations, question, difficulty);
});

analyzeBtn.addEventListener("click", () => {
  if (!selectedSpread) return;
  if (getMode() === "collective") {
    const symbols = getCollectiveSymbols();
    const groups = collectCollectiveDrawData(selectedSpread.positions.length, symbols);
    if (!groups) return;
    renderCollectiveAnalysis(questionInput.value.trim(), groups);
    return;
  }
  const drawData = collectDrawData(selectedSpread.positions.length);
  if (!drawData) return;
  renderPersonalAnalysis(questionInput.value.trim(), drawData);
});

function getMode() {
  return document.querySelector('input[name="readingMode"]:checked').value;
}

function getCollectiveSymbols() {
  return ["A", "B", "C"].map((k) => (document.querySelector(`#symbol${k}`)?.value || `意象${k}`).trim() || `意象${k}`);
}

function recommendSpreads(question, difficulty) {
  const keyTerms = question.toLowerCase();
  const targetRange = { simple: [1, 3], medium: [3, 6], advanced: [6, 12] }[difficulty];
  return SPREADS.filter((spread) => spread.difficulty === difficulty)
    .map((spread) => {
      const keywordScore = spread.keywords.reduce((acc, kw) => (keyTerms.includes(kw.toLowerCase()) ? acc + 2 : acc), 0);
      return { ...spread, score: keywordScore - Math.abs(spread.cards - targetRange[1]) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function renderRecommendations(recommendations, question, difficulty) {
  spreadSection.classList.remove("hidden");
  spreadRecommendations.innerHTML = "";
  recommendations.forEach((spread, index) => {
    const item = document.createElement("div");
    item.className = "recommend-item";
    item.innerHTML = `
      <h3>${spread.name}（${spread.cards}张）</h3>
      <img src="${spread.image}" alt="${spread.name}牌阵示意图" class="spread-image" />
      <p>${spread.description}</p>
      <p><strong>推荐理由：</strong>${buildReason(spread, question, difficulty, index === 0)}</p>
      <button type="button" data-spread-id="${spread.id}">使用这个牌阵</button>
    `;
    spreadRecommendations.appendChild(item);
  });

  spreadRecommendations.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSpread = SPREADS.find((s) => s.id === button.dataset.spreadId) || null;
      if (!selectedSpread) return;
      getMode() === "collective" ? renderCollectiveDrawForm(selectedSpread, getCollectiveSymbols()) : renderDrawForm(selectedSpread);
    });
  });
}

function buildReason(spread, question, difficulty, isTopChoice) {
  const base = `该牌阵属于${difficultyLabel(difficulty)}，牌数匹配本次解读深度。`;
  const keywordHint = spread.keywords.some((kw) => question.includes(kw)) ? "与问题关键词高度贴合。" : "结构完整，适合系统分析。";
  return `${base}${keywordHint}${isTopChoice ? "建议优先使用。" : "可做备选。"}`;
}

function renderDrawForm(spread) {
  drawSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  selectedSpreadInfo.innerHTML = `<strong>当前模式：</strong>个人占卜｜<strong>牌阵：</strong>${spread.name}（${spread.cards}张）`;
  drawForm.innerHTML = "";

  spread.positions.forEach((position, idx) => {
    const row = document.createElement("div");
    row.className = "position-row";
    const cardSelect = createCardSelect(`card-${idx}`, position);
    const orientationSelect = createOrientationSelect(`orientation-${idx}`);
    row.appendChild(wrapField(`位置${idx + 1}：${position}`, cardSelect));
    row.appendChild(wrapField("牌面朝向", orientationSelect));
    drawForm.appendChild(row);
  });
}

function renderCollectiveDrawForm(spread, symbols) {
  drawSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  selectedSpreadInfo.innerHTML = `<strong>当前模式：</strong>大众占卜｜<strong>牌阵：</strong>${spread.name}（每个意象${spread.cards}张，共${spread.cards * 3}张）`;
  drawForm.innerHTML = "";

  symbols.forEach((symbol, gIdx) => {
    const box = document.createElement("section");
    box.className = "collective-group";
    box.innerHTML = `<h3>${symbol}</h3>`;

    spread.positions.forEach((position, idx) => {
      const row = document.createElement("div");
      row.className = "position-row";
      const cardSelect = createCardSelect(`g${gIdx}-card-${idx}`, position);
      const orientationSelect = createOrientationSelect(`g${gIdx}-orientation-${idx}`);
      row.appendChild(wrapField(`位置${idx + 1}：${position}`, cardSelect));
      row.appendChild(wrapField("牌面朝向", orientationSelect));
      box.appendChild(row);
    });

    drawForm.appendChild(box);
  });
}

function createCardSelect(name, position) {
  const cardSelect = document.createElement("select");
  cardSelect.name = name;
  cardSelect.innerHTML = `<option value="">请选择：${position}</option>${CARD_OPTIONS.map((card) => `<option value="${card}">${card}</option>`).join("")}`;
  return cardSelect;
}

function createOrientationSelect(name) {
  const orientationSelect = document.createElement("select");
  orientationSelect.name = name;
  orientationSelect.innerHTML = '<option value="upright">正位</option><option value="reversed">逆位</option>';
  return orientationSelect;
}

function wrapField(labelText, fieldEl) {
  const container = document.createElement("label");
  container.textContent = labelText;
  container.appendChild(fieldEl);
  return container;
}

function collectDrawData(total) {
  const output = [];
  for (let i = 0; i < total; i += 1) {
    const card = drawForm.querySelector(`[name="card-${i}"]`).value;
    const orientation = drawForm.querySelector(`[name="orientation-${i}"]`).value;
    if (!card) return window.alert(`请先选择第 ${i + 1} 个位置的牌。`) || null;
    output.push({ position: selectedSpread.positions[i], card, orientation, meaning: resolveMeaning(card, orientation) });
  }
  return output;
}

function collectCollectiveDrawData(total, symbols) {
  const groups = [];
  for (let g = 0; g < symbols.length; g += 1) {
    const drawData = [];
    for (let i = 0; i < total; i += 1) {
      const card = drawForm.querySelector(`[name="g${g}-card-${i}"]`).value;
      const orientation = drawForm.querySelector(`[name="g${g}-orientation-${i}"]`).value;
      if (!card) return window.alert(`${symbols[g]} 的第 ${i + 1} 张牌还未选择。`) || null;
      drawData.push({ position: selectedSpread.positions[i], card, orientation, meaning: resolveMeaning(card, orientation) });
    }
    groups.push({ symbol: symbols[g], drawData });
  }
  return groups;
}

function renderPersonalAnalysis(question, drawData) {
  const reading = buildIntegratedReading(question, drawData);
  result.innerHTML = `<p><strong>问题：</strong>${question || "（未填写）"}</p><p><strong>牌阵：</strong>${selectedSpread.name}</p>${reading.map((paragraph) => `<p class="reading-paragraph">${paragraph}</p>`).join("")}`;
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCollectiveAnalysis(question, groups) {
  const blocks = groups.map((group) => {
    const reading = buildIntegratedReading(`${question}（${group.symbol}）`, group.drawData);
    return `<section class="collective-result"><h3>${group.symbol}</h3>${reading.map((p) => `<p class="reading-paragraph">${p}</p>`).join("")}</section>`;
  }).join("");

  result.innerHTML = `
    <p><strong>大众占卜问题：</strong>${question || "（未填写）"}</p>
    <p><strong>牌阵：</strong>${selectedSpread.name}（每个意象一组）</p>
    <p class="reading-paragraph">请让客人凭直觉选择意象，再阅读对应解读。三组牌不是“对错关系”，而是三条不同能量路径，关键看客人与哪一组最有共振。</p>
    ${blocks}
  `;
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resolveMeaning(card, orientation) {
  const known = CARD_MEANINGS[card];
  if (known) return { main: orientation === "upright" ? known.upright : known.reversed, advice: known.advice };
  const suit = Object.keys(DEFAULT_SUIT_MEANINGS).find((s) => card.startsWith(s));
  if (suit) {
    const info = DEFAULT_SUIT_MEANINGS[suit];
    return { main: orientation === "upright" ? info.upright : info.reversed, advice: info.advice };
  }
  return { main: "当前仍有未知信息需要被看见", advice: "先把事实和感受分开，再做决定。" };
}

function buildIntegratedReading(question, drawData) {
  const theme = detectTheme(question);
  const suitSummary = buildSuitSummary(drawData);
  const challengeLine = buildChallengeLine(drawData);
  const positionFusion = buildPositionFusion(drawData);
  const phaseLine = buildPhaseLine(drawData);
  const advicePack = buildActionLine(drawData);

  const textA = `你问的这件事，其实已经不是要不要做的问题，而是怎么做才不会白消耗。牌面里最明显的一条线是${suitSummary}，说明你并不缺机会，难点在于你把力气放在哪里、什么时候发力。`;

  const textB = `现在的状态更像${phaseLine}。${challengeLine}，所以你会时不时冒出“再等等会不会更好”的念头，或者刚下决心又退回去。这并不代表你判断错了，而是节奏还没完全对上。`;

  const textC = `把牌位连起来看，${positionFusion}。这组信息给得很直接：别把所有问题一次性解决，先拿下最关键的一步，你的信心和外部反馈会跟着回来，后面的路就顺了。`;

  const textD = `${theme}这条线上，你可以这样落地：${advicePack}。你不需要追求一步到位，只要每周都看得到一点推进，结果就会慢慢站稳，而且这种稳定是可以持续的。`;

  return [textA, textB, textC, textD];
}

function buildSuitSummary(drawData) {
  const suitCounts = { 权杖: 0, 圣杯: 0, 宝剑: 0, 星币: 0 };
  let majorCount = 0;

  drawData.forEach(({ card }) => {
    const suit = Object.keys(suitCounts).find((suitName) => card.startsWith(suitName));
    if (suit) {
      suitCounts[suit] += 1;
    } else {
      majorCount += 1;
    }
  });

  const [dominant, count] = Object.entries(suitCounts).sort((a, b) => b[1] - a[1])[0];

  if (majorCount >= Math.ceil(drawData.length / 2)) {
    return "大阿卡纳比例偏高，重点在方向和取舍，不在小技巧";
  }

  if (count === 0) {
    return "能量分散，建议先把目标收敛到一条主线";
  }

  const core = DEFAULT_SUIT_MEANINGS[dominant].upright.split("、").slice(0, 2).join("和");
  return `${dominant}能量最强，核心议题围绕${core}`;
}

function buildChallengeLine(drawData) {
  const reversedCount = drawData.filter((item) => item.orientation === "reversed").length;

  if (reversedCount === 0) {
    return "阻力不算重，更像执行层面的细节卡顿";
  }

  if (reversedCount >= Math.ceil(drawData.length / 2)) {
    return "逆位偏多，最需要处理的是反复和内耗";
  }

  return "机会和压力一起出现，先解决眼前最具体的卡点会更有效";
}

function buildPositionFusion(drawData) {
  const first = drawData[0];
  const middle = drawData[Math.floor((drawData.length - 1) / 2)];
  const last = drawData[drawData.length - 1];

  return `开端位置的${first.card}在说${first.meaning.main}，中段的${middle.card}提醒你${middle.meaning.main}，收尾位置的${last.card}把方向落在${last.meaning.main}`;
}

function buildPhaseLine(drawData) {
  const hasMajor = drawData.some((item) => !Object.keys(DEFAULT_SUIT_MEANINGS).some((suit) => item.card.startsWith(suit)));
  const reversedCount = drawData.filter((item) => item.orientation === "reversed").length;

  if (hasMajor && reversedCount === 0) {
    return "转折已经出现、可以稳步提速的阶段";
  }

  if (hasMajor && reversedCount > 0) {
    return "转折正在发生、但还需要一点校准的阶段";
  }

  if (!hasMajor && reversedCount > 0) {
    return "持续推进中、但细节容易反复的阶段";
  }

  return "可以稳扎稳打放大成果的阶段";
}

function detectTheme(question = "") {
  const q = question.toLowerCase();
  if (/[爱感情关系复合婚伴侣]/.test(q)) return "感情";
  if (/[事业工作跳槽升职职场创业]/.test(q)) return "事业";
  if (/[钱财务收入投资副业]/.test(q)) return "财务";
  return "现实";
}

function buildActionLine(drawData) {
  const unique = [...new Set(drawData.map((item) => item.meaning.advice))].slice(0, 3);
  return `${unique.join("；")}；给自己一个2到4周的小周期，按结果、情绪、资源三个维度复盘`;
}

function difficultyLabel(value) {
  return { simple: "简单解读", medium: "中级解读", advanced: "高级解读" }[value];
}
