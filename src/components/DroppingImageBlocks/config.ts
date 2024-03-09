import { IChamferableBodyDefinition } from "matter-js";

interface IMatterImageElement {
  label: string;
  path: string;
  width: number;
  height: number;
  coordinates: { x: number; y: number };
  offset: { x: number; width: number; height: number };
  options: IChamferableBodyDefinition;
}

export const Images: IMatterImageElement[] = [
  {
    label: "springboot",
    path: "/icons/React-Testing-Library.svg",
    width: 340,
    height: 68,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },

];
