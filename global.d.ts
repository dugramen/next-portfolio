// global.d.ts (project root or src/)
import type { ComponentType, SVGProps } from "react";

declare module "react-icons" {
  // make IconType a normal React component type returning a React element
  export type IconType = ComponentType<SVGProps<SVGSVGElement>>;
}