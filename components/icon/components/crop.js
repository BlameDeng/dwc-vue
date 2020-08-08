import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M2,2V0H4V12H16v2H14v2H12V14H2V4H0V2Z" }),
    _createVNode("path", { d: "M14,11V2H5V4h7v7Z" })
  ]))
}

export default render