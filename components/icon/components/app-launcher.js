import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { transform: "translate(-1-1)" }, [
      _createVNode("path", { d: "M2,11h4v4H2" }),
      _createVNode("path", { d: "M7,11h4v4H7" }),
      _createVNode("path", { d: "m12 11h4v4h-4" }),
      _createVNode("path", { d: "M2,6h4v4H2" }),
      _createVNode("path", { d: "M7,6h4v4H7" }),
      _createVNode("path", { d: "m12 6h4v4h-4" }),
      _createVNode("path", { d: "M2,1h4v4H2" }),
      _createVNode("path", { d: "M7,1h4v4H7" }),
      _createVNode("path", { d: "m12 1h4v4h-4" })
    ])
  ]))
}

export default render