import React from 'react';
import { render } from 'react-dom';
import CopyClipboard from '../../src';
const App = () => (
  <CopyClipboard text="可复制文本">
    <span>可复制文本</span>
  </CopyClipboard>
);
render(<App />, document.getElementById("root"));