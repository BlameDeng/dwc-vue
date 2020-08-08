import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M9,9v4h6L14,5H12V2h1V0H9V3H7V0H3V2H4V5H2L1,13H7V9Z" }),
    _createVNode("path", { d: "m0 14h7v2h-7" }),
    _createVNode("path", { d: "m9 14h7v2h-7" })
  ]))
}

export default render