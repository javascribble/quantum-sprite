import html from '../templates/sprite.js';

export class Sprite extends Quantum {
    constructor() {
        super();

        const style = query(this.shadowRoot, 'div').style;
        style.width = '15px';
        style.height = '20px';
        style.background = `url('${this.getAttribute('url')}')`;
        style.animation = 'play 1s steps(10) infinite';
    }
}

Sprite.define('quantum-sprite', html);