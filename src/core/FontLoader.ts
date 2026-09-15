import opentype from 'opentype.js';

export class FontLoader {
  private font: opentype.Font | null = null;

  async loadFont(buffer: ArrayBuffer): Promise<void> {
    this.font = opentype.parse(buffer);
  }

  getFont(): opentype.Font {
    if (!this.font) throw new Error('Font not loaded');
    return this.font;
  }
}