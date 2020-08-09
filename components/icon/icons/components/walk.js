import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { transform: "translate(.012.008)" }, [
      _createVNode("g", null, [
        _createVNode("path", { d: "m14.1 12.3l-3.6-.3c-.4.5-.5 1.1-.6 1.8-.2 1 .4 1.9 1.4 2.1.1 0 .2 0 .3 0 1.2.1 2.2-.7 2.3-1.9.2-.5.2-1.1.2-1.7" }),
        _createVNode("path", { d: "m16 5.7c0 1-.1 1.9-.5 2.8-.3.8-.7 1.6-1.2 2.4l-3.5-.3c0-.7 0-1.4-.2-2-.2-.9-.4-1.8-.5-2.8-.1-.9.1-1.8.5-2.6.4-.9 1.4-1.5 2.4-1.3 1.8.4 3.1 2 3 3.8" })
      ]),
      _createVNode("g", null, [
        _createVNode("path", { d: "m1.9 10.4l3.5-.3c.4.5.6 1.1.6 1.8.2 1-.4 1.9-1.4 2.1-.1 0-.2 0-.3 0-1.2.1-2.2-.7-2.3-1.9-.1-.5-.1-1.1-.1-1.7" }),
        _createVNode("path", { d: "m0 3.8c0 1 .1 1.9.5 2.8.4.8.8 1.6 1.2 2.4l3.5-.3c0-.7 0-1.4.2-2 .2-.9.4-1.8.5-2.8 0-.9-.2-1.8-.6-2.6-.4-.9-1.4-1.4-2.4-1.3-1.7.4-3 2-2.9 3.8" })
      ])
    ])
  ]))
}

export default render