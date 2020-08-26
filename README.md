# Demo 示例
![img](https://img-blog.csdnimg.cn/20200826180047477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMjU5NjQx,size_16,color_FFFFFF,t_70#pic_center)  
  
[Github源码地址](https://github.com/kangaroo711/react-copy-clipboard)

# Chinese
一个基于react的组件, 点击文字实现复制和鼠标悬浮文字上方会显示文本和点击后的复制提示

## 安装
npm工具执行语法:
```
$ npm install --save react-copy-clipboard
```

## 使用
``` javascript
  import CopyClipboard from 'react-copy-clipboard';

  <CopyClipboard text='即将被拷贝的文字'>
    <span>单击我复制</span>
  </CopyClipboard>
```

## 参数
| param |  type  |                        |
| :---: | :----: | :--------------------- |
| text  | String | 输入你需要要拷贝的文本 |  
  

***  
***  


# English
A react component based on js, Click to copy and mouseover will show tip (if you want to modify toolTip text with click callback, revise sound code).

## Install
Install with npm:

```
$ npm install --save react-copy-clipboard
```

## Usage
``` javascript
  import CopyClipboard from 'react-copy-clipboard';

  <CopyClipboard text='Text to be copied'>
    <span>Click me to copy</span>
  </CopyClipboard>
```

## Options
| param |  type  |                                      |
| :---: | :----: | :----------------------------------- |
| text  | String | Enter the text what you need to copy |


