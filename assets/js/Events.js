import Utils from './Utils';

export default {

  isDrawing: false,

  lastPoint: {},

  handleMouseUp: function(ev) {

    this.isDrawing = false;

  },

  handleMouseDown: function(ev, canvas) {

    this.isDrawing = true;

    this.lastPoint = Utils.getMouseCordinates(ev, canvas);

  },

  handleMouseMove: function(ev, canvas, context, brush, canvasWidth, canvasHeight) {

    if (this.isDrawing) {

      ev.preventDefault();

      let currentPoint = Utils.getMouseCordinates(ev, canvas),

        dist = Utils.distanceBetween(this.lastPoint, currentPoint),

        angle = Utils.angleBetween(this.lastPoint, currentPoint),

        x, y;

      for (let i = 0; i < dist; i++) {

        x = Utils.getLastPointAxisValue(this.lastPoint.x, angle, i);

        y = Utils.getLastPointAxisValue(this.lastPoint.y, angle, i);

        context.globalCompositeOperation = 'destination-out';

        context.drawImage(brush, x, y);

      }

      this.lastPoint = currentPoint;

      Utils.handlePercentage(canvas, context, canvasWidth, canvasHeight);

    }

  }

}
