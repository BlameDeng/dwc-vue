import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", { d: "m10.3 5.9-2.6 3.4-1.7-1.7-3 3.4h10z" }),
    _createVNode("circle", {
      cx: "4.4",
      cy: "5.9",
      r: "1.3"
    })
  ]))
}

export default render