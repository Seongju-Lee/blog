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
    label: "eda",
    path: "/icons/EDA.png",
    width: 260,
    height: 70,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "multi-module",
    path: "/icons/multi-module.png",
    width: 180,
    height: 60,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "high-availablity",
    path: "/icons/high-availablity.png",
    width: 160,
    height: 60,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "sqs",
    path: "/icons/sqs.png",
    width: 160,
    height: 60,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "spring",
    path: "/icons/spring.png",
    width: 140,
    height: 50,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "java",
    path: "/icons/java.png",
    width: 130,
    height: 60,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "redis",
    path: "/icons/redis.png",
    width: 140,
    height: 60,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "mysql",
    path: "/icons/mysql.png",
    width: 140,
    height: 60,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
];
