import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m11.2 11.4l-1.5 4.6h6.3v-3.2z" }),
      _createVNode("path", { d: "m11.7 9.8l4.3 1.3v-11.1h-1.2z" }),
      _createVNode("circle", {
        cx: "5",
        cy: "5.9",
        r: "1.7"
      }),
      _createVNode("path", { d: "m0 0v16h8l5.1-16h-13.1m6.8 9.5c-.7 1.2-1.8 2.9-1.8 2.9s-1.2-1.7-1.8-2.9c-1-1.7-1.4-2.8-1.4-3.6 0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2c0 .8-.4 1.9-1.4 3.6" })
    ])
  ]))
}

export default render