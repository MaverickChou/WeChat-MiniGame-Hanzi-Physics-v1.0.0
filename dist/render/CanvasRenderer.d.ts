/// <reference types="matter-js" />
export declare class CanvasRenderer {
    private canvas;
    private ctx;
    constructor(canvas: any);
    clear(width: number, height: number): void;
    drawBody(body: Matter.Body, text: string): void;
}
