import { ChordBuilder } from "./piano-keys-svg-builder/ChordBuilder";
import {
  FourKeyBuilder,
  ThreeKeyBuilder,
} from "./piano-keys-svg-builder/KeySetBuilder";

const CHORDS_C = {
  CMajor: ChordBuilder("CMajor", [
    ThreeKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  cminor: ChordBuilder("cminor", [
    ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  CMajor7: ChordBuilder("CMajor7", [
    ThreeKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6] }),
  ]),
  cminor7: ChordBuilder("cminor7", [
    ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6] }),
  ]),
  CSus2: ChordBuilder("CSus2", [
    ThreeKeyBuilder({ activeKeys: [1, 3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  CSus4: ChordBuilder("CSus4", [
    ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3] }),
  ]),
};

const CHORDS_C_SHARP = {
  CMajor: ChordBuilder("C#Major", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  cminor: ChordBuilder("c#minor", [
    ThreeKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4] }),
  ]),
  CMajor7: ChordBuilder("C#Major7", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4, 7] }),
  ]),
  cminor7: ChordBuilder("c#minor7", [
    ThreeKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 7] }),
  ]),
  CSus2: ChordBuilder("C#Sus2", [
    ThreeKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4] }),
  ]),
  CSus4: ChordBuilder("C#Sus4", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4] }),
  ]),
};

export const CHORDS: any = {
  CHORDS_C,
  CHORDS_C_SHARP,
};
