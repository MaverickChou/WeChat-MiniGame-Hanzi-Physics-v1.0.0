import Matter from 'matter-js';
export declare class HanziPhysics {
    private engine;
    private renderer;
    private fontLoader;
    constructor(canvas: any);
    initFont(buffer: ArrayBuffer): Promise<void>;
    createHanzi(char: string, x: number, y: number, options?: Matter.IBodyDefinition): Matter.Body | null;
    addStaticBoundary(x: number, y: number, width: number, height: number): void;
    start(onRender: (bodies: Matter.Body[]) => void): void;
}
