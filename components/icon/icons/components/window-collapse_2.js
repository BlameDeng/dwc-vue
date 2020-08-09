import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m9 7v-5.9l2.1 2.2 3.2-3.3 1.7 1.7-3.3 3.2 2.2 2.1z" }),
      _createVNode("path", { d: "m0 14.4l3.3-3.3-2.2-2.1h5.9v5.9l-2.1-2.1-3.2 3.3z" })
    ])
  ]))
}

export default render