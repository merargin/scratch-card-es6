export default class BaseCanvas {

    constructor(config) {

        this.canvas = document.getElementById(config.canvas);

        this.context = this.canvas.getContext('2d');

        this.canvasWidth = this.canvas.width;

        this.canvasHeight = this.canvas.height;

    };

    clear() {

        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    }
}
