import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "m11 2v4h-7v4h7v4l5-6" }),
    _createVNode("path", { d: "M5,14H2V2H5V0H0V16H5Z" })
  ]))
}

export default render