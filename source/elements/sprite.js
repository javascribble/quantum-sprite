import { Component } from '../../references/quantum.js';

export class Sprite extends Component {
    constructor() {
        super();

        const style = query(this.shadowRoot, 'div').style;
        style.width = '15px';
        style.height = '20px';
        style.background = `url('${this.getAttribute('url')}')`;
        style.animation = 'play 1s steps(10) infinite';
    }

    static template = document.querySelector('#quantum-sprite');

    static attributes = [];
}

customElements.define('quantum-sprite', Sprite);