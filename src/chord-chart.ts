import { CHORDS } from "./chords";

const hasChords = Object.entries(CHORDS).length > 0 || false;
if (hasChords) {
  const pianoChordChartContainer = document.getElementById(
    "piano-chord-chart-container"
  );
  for (const key of Object.keys(CHORDS)) {
    const chordsList = CHORDS[key];
    const hasChordsList = Object.entries(chordsList).length > 0 || false;
    if (hasChordsList) {
      const chordRow = document.createElement("div");
      chordRow.style.display = "flex";
      chordRow.style.gap = "8px";
      for (const chordName of Object.keys(chordsList)) {
        chordRow.appendChild(chordsList[chordName]);
      }
      if (pianoChordChartContainer) {
        pianoChordChartContainer.appendChild(chordRow);
      }
    }
  }
}

// const testContainer = document.getElementById("svg-test-container");
// testContainer.appendChild(CHORDS.CMajor);
