export default {

    revealPercentage: 75,

    stride: 32,

	getLastPointAxisValue: function(axis, angle, index) {

		return axis + (Math.sin(angle) * index) - 25;

    },

    distanceBetween: function(point1, point2) {

        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));

    },

    angleBetween: function(point1, point2) {

        return Math.atan2( point2.x - point1.x, point2.y - point1.y );

    },

    getFilledInPixels: function(stride, context, canvasWidth, canvasHeight) {

        if (!stride || stride < 1) {

            stride = 1;

        }

        let pixels = context.getImageData(0, 0, canvasWidth, canvasHeight),

        pdata    = pixels.data,

        l        = pdata.length,

        total    = (l / stride),

        count    = 0;

        for(var i = count = 0; i < l; i += stride) {

            if (parseInt(pdata[i]) === 0) {

                count++;

            }

        }

        return Math.round((count / total) * 100);

    },

    handlePercentage: function(canvas, context, canvasWidth, canvasHeight) {

        let filledInPixels = this.getFilledInPixels(this.stride, context, canvasWidth, canvasHeight);

        filledInPixels = filledInPixels || 0;

        if (filledInPixels > this.revealPercentage) {

            canvas.parentNode.removeChild(canvas);

        }

    },

    getMouseCordinates: function(e, canvas) {

        let offsetX = 0,

            offsetY = 0,

            mx,

            my;

        if(canvas.offsetParent !== undefined) {

            do {

                offsetX += canvas.offsetLeft;

                offsetY += canvas.offsetTop;

            } while ((canvas = canvas.offsetParent));

        }

        mx = (e.pageX || e.touches[0].clientX) - offsetX;

        my = (e.pageY || e.touches[0].clientY) - offsetY;

        return {x: mx, y: my};

    }

}
