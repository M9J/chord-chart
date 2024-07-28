const baseURL = location.href;

(async () => {
  const index = await import(baseURL + "chord-chart/index.js");
  const chordsIndex = index.default;
  const hasChordsIndex = chordsIndex
    ? Object.entries(chordsIndex).length > 0
    : false;
  if (hasChordsIndex) {
    for (let [key, chords] of Object.entries(chordsIndex)) {
      const chordScaleTemplate = await buildChordTemplates(key, chords);
      const indexContent = document.getElementById("index-content");
      indexContent.appendChild(chordScaleTemplate);
    }
  }
})();

async function buildChordTemplates(key, chords) {
  if (!key) throw new Error("key not provided");
  if (!chords) throw new Error("chords not provided");
  const chordList1 = document.createElement("div");
  chordList1.classList.add("chord-list");
  const chordListName1 = document.createElement("div");
  chordListName1.classList.add("chord-list-name");
  chordListName1.innerHTML = `${key} key`;
  const chordListPreview1 = document.createElement("div");
  chordListPreview1.classList.add("chord-list-preview");
  const previewContainer1 = document.createElement("div");
  previewContainer1.classList.add("preview-container");
  const previewWindow1 = document.createElement("div");
  previewWindow1.id = "preview-window";
  const chordTemplates = await loadChordTemplates(key, chords);
  if (chordTemplates.length > 0) {
    previewWindow1.innerHTML = chordTemplates.join("");
    previewContainer1.appendChild(previewWindow1);
    chordListPreview1.appendChild(previewContainer1);
    // chordList1.appendChild(chordListName1);
    chordList1.appendChild(chordListPreview1);
  }
  return chordList1;
}

async function loadChordTemplates(key, chords) {
  if (!key) throw new Error("key not provided");
  if (!chords) throw new Error("chords not provided");
  const chordHTMLs = [];
  for (let chord of chords) {
    const chordPath = `${baseURL}chord-chart/${key}/${chord}.html`;
    const chordFile = await fetch(chordPath);
    if (!chordFile) throw new Error("chordFile not found");
    const chordHTML = await chordFile.text();
    if (chordHTML) chordHTMLs.push(chordHTML);
  }
  return chordHTMLs;
}
