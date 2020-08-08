import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("polygon", {
      points: "13 0 13 10 12 11 12 16 1 16 1 0 13 0",
      fill: "#f6d97a"
    }),
    _createVNode("path", {
      d: "M11,3V4H4V3ZM4,6h7V5H4Z",
      fill: "#fff"
    }),
    _createVNode("path", {
      d: "M1,0H2V16H1ZM13,1v9l-1,1v5h2V1Z",
      fill: "#e7b93a"
    }),
    _createVNode("path", {
      d: "M1,0V16H2V0Z",
      fill: "#e7b93a"
    })
  ]))
}

export default render