import BaseCanvas from './BaseCanvas';
import Mask from './Mask';
import Brush from './Brush';
import Events from './Events';
import Utils from './Utils';

export default class ScratchCard {

	constructor(config){

		let { canvas, context, canvasWidth, canvasHeight } = new BaseCanvas(config),

            { brush } = new Brush(config),

            { mask } = new Mask(config);

        this.setMaskListener(mask, context, config.underlay);

        this.setListeners(canvas, context, mask, brush, canvasWidth, canvasHeight);

	}

    setListeners(canvas, context, mask, brush, canvasWidth, canvasHeight){

        canvas.addEventListener('mousedown', (ev) => {

            Events.handleMouseDown(ev, canvas);

        }, false);

        canvas.addEventListener('mousemove', (ev) => {

            Events.handleMouseMove(ev, canvas, context, brush, canvasWidth, canvasHeight);

        }, false);


        canvas.addEventListener('mouseup', (ev) => {

            Events.handleMouseUp(ev);

        }, false);

        canvas.addEventListener('touchmove', (ev) => {

            Events.handleMouseMove(ev, canvas, context, brush, canvasWidth, canvasHeight);

        },false);

        canvas.addEventListener('touchstart', (ev) => {

            Events.handleMouseDown(ev, canvas);

        }, false);

        canvas.addEventListener('touchend', (ev) => {

            Events.handleMouseUp(ev);

        }, false);

    }

    setMaskListener(mask, context, underlay){

        mask.onload = () => {

            context.drawImage(mask, 0, 0);

	    let overlayImage = document.getElementById(underlay);

            overlayImage.style.visibility = 'visible';

	    overlayImage.ondragstart = () => false;

        };

    }

}
