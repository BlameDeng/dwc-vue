import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { fill: "#231f20" }, [
      _createVNode("path", { d: "m15.4 3h-5.3l-.3-.4c-.2-.4-.6-.6-1-.6h-5.1c-.4 0-.7.3-.7.7v6c.6-.3 1.3-.6 2-.7v-1-1.9l1.6 1.1 5 3.5 1.2.8-1.2.8-2.3 1.7h6.1c.3 0 .6-.2.6-.6v-8.8c0-.3-.3-.6-.6-.6" }),
      _createVNode("path", { d: "m0 15c1.5-1.5 3-3.1 6-3v2.1l5-3.5-5-3.6v2c-3 0-6 2.5-6 6" })
    ])
  ]))
}

export default render