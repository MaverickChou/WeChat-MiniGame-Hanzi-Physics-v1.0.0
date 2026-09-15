declare module 'simplify-js' {
  interface Point {
    x: number;
    y: number;
  }
  function simplify(points: Point[], tolerance?: number, highQuality?: boolean): Point[];
  export default simplify;
}

declare module 'poly-decomp-es';

// 手动声明 opentype.js
declare module 'opentype.js' {
  export interface PathCommand {
    type: string;
    x?: number;
    y?: number;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
  }

  export interface Path {
    commands: PathCommand[];
  }

  export interface Font {
    getPath(text: string, x: number, y: number, fontSize: number): Path;
  }

  export function parse(buffer: ArrayBuffer): Font;
}