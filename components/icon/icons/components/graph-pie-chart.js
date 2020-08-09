import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m11.9 15.8c2.1-1.1 4-4 4.1-6.7h-7.4l3.3 6.7" }),
      _createVNode("path", { d: "m0 8.4c0 4 3.3 7.3 7.3 7.3.9 0 1.8-.2 2.6-.5-.1-.2-3-6.7-3-6.7v-7.4c-3.9.2-6.9 3.4-6.9 7.3" }),
      _createVNode("path", { d: "m8.3 0v7.7h7.7c-.3-4.1-3.6-7.4-7.7-7.7" })
    ])
  ]))
}

export default render