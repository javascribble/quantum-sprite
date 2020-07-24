import html from '../templates/sprite.js';

export class Sprite extends quantum.Component {
    constructor() {
        super();

        const style = query(this.shadowRoot, 'div').style;
        style.width = '15px';
        style.height = '20px';
        style.background = `url('${this.getAttribute('url')}')`;
        style.animation = 'play 1s steps(10) infinite';
    }

    static template = quantum.template(html);
}

quantum.define('quantum-sprite', Sprite);