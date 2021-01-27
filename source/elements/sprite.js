import html from '../templates/sprite.js';

const { Component, template, define } = quantum;

export class Sprite extends Component {
    constructor() {
        super();

        const style = query(this.shadowRoot, 'div').style;
        style.width = '15px';
        style.height = '20px';
        style.background = `url('${this.getAttribute('url')}')`;
        style.animation = 'play 1s steps(10) infinite';
    }

    static template = template(html);
}

define('quantum-sprite', Sprite);