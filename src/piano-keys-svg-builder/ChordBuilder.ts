export function ChordBuilder(label: string, keySetArray: any[]): HTMLElement {
  const chordContainer = document.createElement("div");
  const hasKeySetArray = Array.isArray(keySetArray)
    ? keySetArray.length > 0
    : false;
  if (hasKeySetArray) {
    const keySetContainer = document.createElement("div");
    keySetContainer.style.display = "flex";
    keySetArray.forEach((c) => keySetContainer.appendChild(c));
    const labelDiv = document.createElement("div");
    labelDiv.style.padding = "8px 0px";
    labelDiv.style.fontWeight = "bold";
    labelDiv.innerHTML = label;
    chordContainer.style.display = "flex";
    chordContainer.style.flexDirection = "column";
    chordContainer.appendChild(labelDiv);
    chordContainer.appendChild(keySetContainer);
  }
  return chordContainer;
}
