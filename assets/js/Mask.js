export default class Mask {

	constructor(config){

		this.mask = new Image();

		this.mask.src = config.URLS.mask;

        this.mask.crossOrigin = '';


	}

}
