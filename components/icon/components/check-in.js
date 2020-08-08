import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M14,2V14H2V2H14m1-1H1V15H15V1Z" }),
    _createVNode("polygon", { points: "12 11.293 5.707 5 10 5 10 4 4 4 4 10 5 10 5 5.707 11.293 12 12 11.293" })
  ]))
}

export default render