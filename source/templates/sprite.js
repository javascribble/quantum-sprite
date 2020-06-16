import { template } from '../../references/quantum.js';

const html = `<div></div>`;

const css = `
@keyframes play {
    100% {
        background-position: -150px
    }
}
`;

export const sprite = template(html, css);