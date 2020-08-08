import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { fill: "#231f20" }, [
      _createVNode("path", { d: "m2 0v1h13v13h1v-14h-14" }),
      _createVNode("path", { d: "M14,16H0V2h14V16z M1,15h12V3H1V15z" }),
      _createVNode("path", { d: "M6,9.8L4.1,8L3,9.1l3,3l5-4.9L9.9,6L6,9.8z" })
    ])
  ]))
}

export default render