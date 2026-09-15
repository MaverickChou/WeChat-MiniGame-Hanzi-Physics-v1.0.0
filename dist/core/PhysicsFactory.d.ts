import Matter from 'matter-js';
import { Point } from './PathParser';
export declare class PhysicsFactory {
    static createBodyFromPoints(points: Point[], options?: Matter.IBodyDefinition): Matter.Body;
}
