import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    id: "Calque_1",
    "data-name": "Calque 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M11,5,9,3,8,4l3,3,5-5L15,1Z" }),
    _createVNode("polygon", { points: "15 10 14 9 12 11 10 9 9 10 11 12 9 14 10 15 12 13 14 15 15 14 13 12 15 10" }),
    _createVNode("rect", {
      y: "4",
      width: "7",
      height: "2"
    }),
    _createVNode("rect", {
      y: "11",
      width: "7",
      height: "2"
    })
  ]))
}

export default render