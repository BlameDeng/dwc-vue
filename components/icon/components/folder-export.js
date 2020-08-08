import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { fill: "#231f20" }, [
      _createVNode("path", { d: "m15.4 3h-5.3l-.3-.4c-.2-.4-.6-.6-1-.6h-5.1c-.4 0-.7.3-.7.7v4.5l1.4-1 1.6-1.1v1.9 1.1c2 .4 4.9 2.3 5.7 4.9h3.7c.3 0 .6-.3.6-.6v-8.8c0-.3-.3-.6-.6-.6" }),
      _createVNode("path", { d: "m11 15c0-3.5-3-6-6-6v-2l-5 3.5 5 3.5v-2c3-.1 4.4 1.5 6 3" })
    ])
  ]))
}

export default render