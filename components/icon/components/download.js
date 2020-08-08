import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m14 7h-4v-7h-4v7h-4l6 5z" }),
      _createVNode("path", { d: "m14.1 11.1v3h-12.1v-3h-2v4.9h16v-4.9z" })
    ])
  ]))
}

export default render