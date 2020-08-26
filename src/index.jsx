import React from 'react';
import './index.css';
/**
 * 单击复制文本到剪切板
 * @text {String} 需要复制的文本内容
 * @children {Node} 渲染的Dom元素
 */
class copyClipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetLeft: 0,
      offsetTop: 0,
    };
    this.ref = React.createRef();
  }

  // 初始化获取子组件宽高计算浮动位置
  componentDidMount = () => {
    const child = this.ref.current.children[0];
    this.setState({
      offsetLeft: `${child.offsetWidth + 4}`,
      offsetTop: `${(child.offsetHeight / 2) - (29 / 2)}`,
    });
  }

  /**
   * 显示悬浮提示框
   * @node {Object} Node节点
   * @id {String} id
   * @text {String} 显示文本内容
   */
  showToolTip = (node, id, text) => {
    const { offsetLeft, offsetTop } = this.state;
    const el = document.createElement('div');
    el.setAttribute('id', id);
    el.setAttribute('style', `left: ${offsetLeft}px;top:${offsetTop}px;`);
    el.innerHTML = `<span>${text} <span style='color:darkgrey;font-size:12px'>(单击复制)</span></span>`;
    el.addEventListener('click', () => {
      this.copyText()
    })
    node.target.appendChild(el);
  }

  /**
  * 移除悬浮提示框
  * @node {Object} Node节点
  * @id {String} id
  */
  removeToolTip = (node, id) => {
    const el = document.getElementById(id);
    node.target.removeChild(el);
  }

  /**
  * 复制文本
  * @text {String} 文字
  */
  copyText = (text) => {
    const el = document.createElement('input');
    el.setAttribute('type', 'text');
    el.setAttribute('style', 'position:absolute;left:-9999px;');
    el.setAttribute('value', text);
    document.body.appendChild(el);
    el.select();
    const boolean = document.execCommand('Copy');
    document.body.removeChild(el);
    return boolean ? '复制成功' : '复制失败'
  }


  render() {
    const { text = '请参照文档使用', children = <span></span> } = this.props;
    return (
      <span
        ref={this.ref}
        className="copy-tooltip"
        onClick={(e) => {
          const res = this.copyText(text);
          this.removeToolTip(e, 'props-tooltip');
          this.showToolTip(e, 'props-tooltip', res);
        }}
        onMouseEnter={(e) => {
          this.showToolTip(e, 'props-tooltip', text);
        }}
        onMouseLeave={(e) => {
          this.removeToolTip(e, 'props-tooltip');
        }}
      >
        {children}
      </span>
    );
  }
}
export default copyClipboard;