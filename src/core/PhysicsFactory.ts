import Matter from 'matter-js';
import * as decomp from 'poly-decomp-es';
import { Point } from './PathParser';

// 将 poly-decomp 注入 Matter.js 处理凹多边形
Matter.Common.setDecomp(decomp as any);

export class PhysicsFactory {
  static createBodyFromPoints(
    points: Point[],
    options: Matter.IBodyDefinition = {}
  ): Matter.Body {
    const vertices = points.map(p => ({ x: p.x, y: p.y }));

    // 【核心修复】：提取 position，把它作为 fromVertices 的 x, y 参数
    // 否则 fromVertices(0, 0, ...) 会把所有汉字都创建在屏幕左上角
    const { position, ...restOptions } = options;
    const pos = position || { x: 0, y: 0 };

    const body = Matter.Bodies.fromVertices(pos.x, pos.y, [vertices], restOptions) as Matter.Body | undefined;

    if (!body) {
      console.warn('多边形生成失败，已降级为矩形。');
      const fallbackOptions = { ...restOptions, position: pos };
      return Matter.Bodies.rectangle(pos.x, pos.y, 50, 50, fallbackOptions as any);
    }

    return body;
  }
}