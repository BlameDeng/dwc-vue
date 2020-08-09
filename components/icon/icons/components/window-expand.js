import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m16 0v6l-2.2-2.2-3.3 3.4-1.7-1.7 3.4-3.3-2.2-2.2z" }),
      _createVNode("path", { d: "m7.2 10.5l-3.4 3.3 2.2 2.2h-6v-6l2.2 2.2 3.3-3.4z" })
    ])
  ]))
}

export default render