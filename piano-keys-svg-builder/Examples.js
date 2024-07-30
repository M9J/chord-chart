import {
  FourKeyBuilder,
  OneKeyBuilder,
  ThreeKeyBuilder,
  TwoKeyBuilder,
} from "./KeySetBuilder.js";

const Piano88Keys = [
  TwoKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder({}),
];

const Piano61Keys = [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder({}),
];
