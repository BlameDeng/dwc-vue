import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("polygon", {
      points: "14 12 14 0 2 0 2 16 13 16 13 13 14 12",
      fill: "#5bb7f4"
    }),
    _createVNode("polygon", {
      points: "14 1 14 12 13 13 13 16 14 16 15 16 15 1 14 1",
      fill: "#3d70a8"
    }),
    _createVNode("rect", {
      x: "2",
      width: "1",
      height: "16",
      fill: "#3d70a8"
    }),
    _createVNode("rect", {
      x: "5",
      y: "3",
      width: "7",
      height: "1",
      fill: "#fff"
    }),
    _createVNode("rect", {
      x: "5",
      y: "5",
      width: "7",
      height: "1",
      fill: "#fff"
    }),
    _createVNode("rect", {
      x: "14",
      y: "3",
      width: "1",
      height: "2",
      fill: "#eacd0b"
    }),
    _createVNode("rect", {
      x: "14",
      y: "6",
      width: "1",
      height: "2",
      fill: "#42a810"
    }),
    _createVNode("rect", {
      x: "14",
      y: "9",
      width: "1",
      height: "2",
      fill: "#e72d12"
    })
  ]))
}

export default render