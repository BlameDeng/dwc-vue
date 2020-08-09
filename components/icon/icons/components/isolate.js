import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { transform: "translate(-1-1)" }, [
      _createVNode("path", { d: "M2,9h6v6H2" }),
      _createVNode("path", { d: "M2,1v6h6V1H2z M7,6H3V2h4V6z" }),
      _createVNode("path", { d: "m10 1v6h6v-6h-6m5 5h-4v-4h4v4" }),
      _createVNode("path", { d: "m10 9v6h6v-6m-1 5h-4v-4h4" })
    ])
  ]))
}

export default render