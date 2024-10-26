import './style.scss';
import { Component } from './components/Component';

const title = new Component({
  tag: 'h1',
  classes: 'random',
  text: 'Christmas shop',
});

document.body.append(title.getNode());
