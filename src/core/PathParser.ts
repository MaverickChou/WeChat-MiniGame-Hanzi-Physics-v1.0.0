import opentype from 'opentype.js';
import simplify from 'simplify-js';

export interface Point {
  x: number;
  y: number;
}

export class PathParser {
  static getCharOutline(font: opentype.Font, char: string, fontSize: number = 100): Point[] {
    const path = font.getPath(char, 0, 0, fontSize);
    const commands = path.commands;
    const points: Point[] = [];

    for (const cmd of commands) {
      if (cmd.type === 'M' || cmd.type === 'L') {
        points.push({ x: cmd.x!, y: cmd.y! });
      } else if (cmd.type === 'Q') {
        points.push({ x: cmd.x1!, y: cmd.y1! });
        points.push({ x: cmd.x!, y: cmd.y! });
      } else if (cmd.type === 'C') {
        points.push({ x: cmd.x1!, y: cmd.y1! });
        points.push({ x: cmd.x2!, y: cmd.y2! });
        points.push({ x: cmd.x!, y: cmd.y! });
      }
    }

    // 使用 RDP 算法简化顶点（tolerance 越大，物理体越简单，性能越好）
    const simplifiedPoints = simplify(points, 1.0, true);
    return simplifiedPoints;
  }
}