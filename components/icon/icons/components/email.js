import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "M16,14V4l-8,6L0,4v10H16z" }),
      _createVNode("path", { d: "m0 2h16l-8 6z" })
    ])
  ]))
}

export default render