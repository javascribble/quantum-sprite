import { Component, define, query } from '../../references/quantum.js';
import { sprite } from '../templates/sprite.js';

export class Sprite extends Component {
    constructor() {
        super(sprite);

        const style = query(this.shadowRoot, 'div').style;
        style.width = '15px';
        style.height = '20px';
        style.background = `url('${this.getAttribute('url')}')`;
        style.animation = 'play 1s steps(10) infinite';
    }
}

define(Sprite);