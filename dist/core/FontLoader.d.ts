/// <reference path="../../src/types.d.ts" />
import opentype from 'opentype.js';
export declare class FontLoader {
    private font;
    loadFont(buffer: ArrayBuffer): Promise<void>;
    getFont(): opentype.Font;
}
