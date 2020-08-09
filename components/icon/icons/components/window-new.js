import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "m16 0v5.4l-1.9-2-8.4 8.4-1.5-1.5 8.3-8.4-1.9-1.9" }),
    _createVNode("path", { d: "M16,16V7H15v8H1V1H9V0H0V16Z" })
  ]))
}

export default render