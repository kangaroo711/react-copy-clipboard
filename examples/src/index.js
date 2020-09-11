import React from 'react';
import { render } from 'react-dom';
import CopyClipboard from '../../src';

const text = 'copy txt'
const suffix = '(click me to copy)'
const App = () => (
  <CopyClipboard text={text} suffix={suffix}>
    <span>{text}</span>
  </CopyClipboard>
);
render(<App />, document.getElementById("root"));