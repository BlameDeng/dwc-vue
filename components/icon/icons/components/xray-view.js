import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", { d: "m14 8-6 4-6-4 2.3-1.5 3.7 2.5 3.8-2.5z" }),
    _createVNode("path", {
      d: "m11.8 6.5-2.3 1.5-1.5 1-1.5-1-2.2-1.5 3.7-2.5z",
      opacity: ".75"
    }),
    _createVNode("path", {
      d: "m14 5-2.2 1.5-3.8-2.5-3.7 2.5-2.3-1.5 6-4zm0 6-6 4-6-4 4.5-3 1.5 1 1.5-1z",
      opacity: ".35"
    })
  ]))
}

export default render