import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M14.5,8A6.5,6.5,0,1,1,8,1.5,6.51,6.51,0,0,1,14.5,8M16,8a8,8,0,1,0-8,8,8,8,0,0,0,8-8Z" }),
    _createVNode("path", { d: "M9 5A1 1 0 1 1 8 4 1 1 0 0 1 9 5" }),
    _createVNode("path", { d: "M9 8A1 1 0 1 1 8 7 1 1 0 0 1 9 8" }),
    _createVNode("path", { d: "M9,11a1,1,0,1,1-1-1A1,1,0,0,1,9,11Z" })
  ]))
}

export default render