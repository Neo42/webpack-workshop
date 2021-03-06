import makeButton from './button';
import { makeColorStyle } from './button-styles';
const getFooter = () => import('./footer');
import './button.css';
import imageUrl from './icon.jpg';
import makeImage from './image';
import Foo from './foo.ts';

const button = makeButton('Wat?');
button.style = makeColorStyle('cyan');
const image = makeImage(imageUrl);
const foo = new Foo();
foo.blah();

document.body.appendChild(button);
document.body.appendChild(image);

button.addEventListener('click', e =>
  getFooter().then(footerModule => document.appendChild(footerModule.footer))
);
