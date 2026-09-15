import Matter from 'matter-js';
import { FontLoader } from './core/FontLoader';
import { PathParser } from './core/PathParser';
import { PhysicsFactory } from './core/PhysicsFactory';
import { CanvasRenderer } from './render/CanvasRenderer';

export class HanziPhysics {
  private engine: Matter.Engine;
  private renderer: CanvasRenderer;
  private fontLoader: FontLoader;

  constructor(canvas: any) {
    this.engine = Matter.Engine.create();
    this.renderer = new CanvasRenderer(canvas);
    this.fontLoader = new FontLoader();
  }

  async initFont(buffer: ArrayBuffer) {
    await this.fontLoader.loadFont(buffer);
  }

  createHanzi(char: string, x: number, y: number, options?: Matter.IBodyDefinition) {
    const font = this.fontLoader.getFont();
    const points = PathParser.getCharOutline(font, char);
    const body = PhysicsFactory.createBodyFromPoints(points, {
      position: { x, y },
      ...options
    });

    // 【核心修复1】：如果物理体创建失败（顶点不足），直接返回 null，避免崩溃
    if (!body) {
      console.warn(`汉字 "${char}" 的物理体创建失败（顶点数量不足）`);
      return null;
    }

    // 【核心修复2】：将汉字文本绑定到父级和所有有效子部件上
    (body as any).renderText = char;
    if (body.parts && Array.isArray(body.parts)) {
      body.parts.forEach((part: any) => {
        if (part) {
          part.renderText = char;
        }
      });
    }

    Matter.Composite.add(this.engine.world, body);
    return body;
  }

  addStaticBoundary(x: number, y: number, width: number, height: number) {
    const boundary = Matter.Bodies.rectangle(x, y, width, height, { isStatic: true });
    Matter.Composite.add(this.engine.world, boundary);
  }

  start(onRender: (bodies: Matter.Body[]) => void) {
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, this.engine);

    const loop = () => {
      onRender(Matter.Composite.allBodies(this.engine.world));
      requestAnimationFrame(loop);
    };
    loop();
  }
}