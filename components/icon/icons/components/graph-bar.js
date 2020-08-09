import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "M1,14V0H0v15h16v-1H1z" }),
      _createVNode("path", { d: "m12 6h3v7h-3z" }),
      _createVNode("path", { d: "m7 2h3v11h-3z" }),
      _createVNode("path", { d: "m2 4h3v9h-3z" })
    ])
  ]))
}

export default render