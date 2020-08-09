import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M2,14V2H14V14H2M1,15H15V1H1V15Z" }),
    _createVNode("polygon", { points: "4 4.707 10.293 11 6 11 6 12 12 12 12 6 11 6 11 10.293 4.707 4 4 4.707" })
  ]))
}

export default render