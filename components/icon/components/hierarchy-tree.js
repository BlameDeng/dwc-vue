import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { transform: "translate(-1)" }, [
      _createVNode("path", { d: "m12 11h3v4h-3" }),
      _createVNode("path", { d: "M7,11h3v4H7" }),
      _createVNode("path", { d: "M2,11h3v4H2" }),
      _createVNode("path", { d: "M3,10V7h5V5h1v2h5v3h-1V8H9v2H8V8H4v2H3z" }),
      _createVNode("path", { d: "M7,0h3v4H7" })
    ])
  ]))
}

export default render