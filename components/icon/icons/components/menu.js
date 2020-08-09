import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { "fill-rule": "evenodd" }, [
      _createVNode("path", { d: "M0,12h16v2H0V12z" }),
      _createVNode("path", { d: "M0,7h16v2H0V7z" }),
      _createVNode("path", { d: "M0,2h16v2H0V2z" })
    ])
  ]))
}

export default render