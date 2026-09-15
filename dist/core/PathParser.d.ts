/// <reference path="../../src/types.d.ts" />
import opentype from 'opentype.js';
export interface Point {
    x: number;
    y: number;
}
export declare class PathParser {
    static getCharOutline(font: opentype.Font, char: string, fontSize?: number): Point[];
}
