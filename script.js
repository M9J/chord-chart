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
      loadChordTemplates(key, chords);
    }
  }
})();

async function buildChordTemplates(key, chords) {
  if (!key) throw new Error("key not provided");
  if (!chords) throw new Error("chords not provided");
  const chordList1 = document.createElement("div");
  chordList1.classList.add("chord-list");
  const chordListPreview1 = document.createElement("div");
  chordListPreview1.classList.add("chord-list-preview");
  const previewContainer1 = document.createElement("div");
  previewContainer1.classList.add("preview-container");
  const previewWindow1 = document.createElement("div");
  previewWindow1.classList.add("preview-window");
  previewWindow1.id = "preview-window_" + key;
  previewContainer1.appendChild(previewWindow1);
  chordListPreview1.appendChild(previewContainer1);
  chordList1.appendChild(chordListPreview1);
  return chordList1;
}

async function loadChordTemplates(key, chords) {
  if (!key) throw new Error("key not provided");
  if (!chords) throw new Error("chords not provided");
  for (let chord of chords) {
    const chordPath = `${baseURL}chord-chart/${key}/${chord}.html`;
    if (chordPath) await loadChord(chordPath, key);
  }
}

async function loadChord(chordPath, key) {
  if (!chordPath) throw new Error("chordPath not provided");
  if (!key) throw new Error("key not provided");
  const chordFile = await fetch(chordPath);
  const chordHTML = await chordFile.text();
  const previewWindow1 = document.getElementById("preview-window_" + key);
  previewWindow1.innerHTML = previewWindow1.innerHTML + chordHTML;
}
