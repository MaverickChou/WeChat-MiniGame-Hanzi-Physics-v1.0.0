export class CanvasRenderer {
  private ctx: CanvasRenderingContext2D;

  constructor(private canvas: any) {
    this.ctx = canvas.getContext('2d');
  }

  clear(width: number, height: number) {
    this.ctx.clearRect(0, 0, width, height);
  }

  drawBody(body: Matter.Body, text: string) {
    const { x, y } = body.position;
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(body.angle);

    // 绘制物理体轮廓（调试用）
    this.ctx.strokeStyle = 'rgba(76, 175, 80, 0.5)';
    this.ctx.beginPath();
    body.vertices.forEach((v, i) => {
      if (i === 0) this.ctx.moveTo(v.x - x, v.y - y);
      else this.ctx.lineTo(v.x - x, v.y - y);
    });
    this.ctx.closePath();
    this.ctx.stroke();

    // 绘制汉字
    this.ctx.font = 'bold 32px sans-serif';
    this.ctx.fillStyle = '#333';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, 0, 0);

    this.ctx.restore();
  }
}