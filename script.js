const baseURL = location.href;

(async () => {
  const index = await import(baseURL + "chord-chart/index.js");
  const chordsList = index.default;
  if (chordsList.length > 0) {
    const ul = document.createElement("ul");
    for (let chord of chordsList) {
      const liNode = document.createElement("li");
      const a1 = document.createElement("a");
      a1.onclick = () => loadChord(chord);
      const span1 = document.createElement("span");
      span1.innerHTML = chord;
      a1.appendChild(span1);
      liNode.appendChild(a1);
      ul.appendChild(liNode);
    }
    loadChord(chordsList[0]);
    const indexContent = document.getElementById("index-content");
    indexContent.appendChild(ul);
  }
})();

async function loadChord(chordName) {
  if (!chordName) throw new Error("chordName not provided");
  console.log(chordName);
  const chordPath = baseURL + "chord-chart/" + chordName + ".html";
  const chordFile = await fetch(chordPath);
  if (!chordFile) throw new Error("chordFile not found");
  const chordHTML = await chordFile.text();
  if (chordHTML) {
    const previewWindow = document.getElementById("preview-window");
    previewWindow.innerHTML = chordHTML;
  }
}
