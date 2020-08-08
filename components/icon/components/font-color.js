import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m1 14h14v2h-14z" }),
      _createVNode("path", { d: "m7.9 2.6l-6.9 6.9v3.5h3.5l6.9-6.9-3.5-3.5m-3.9 9.4h-1v-1h-1v-1l1-1 2 2-1 1m-.2-3.1c-.1.1-.2.1-.3 0v-.1c-.1-.1-.1-.2 0-.3l4.5-4.5c0 0 0 0 .1 0 .1 0 .1 0 .2 0l.1.1c.1.1.1.2 0 .3l-4.6 4.5" }),
      _createVNode("path", { d: "m11.9 5.6l-3.5-3.5 1.6-1.6c.2-.2.4-.2.6 0l2.9 2.9c.2.2.2.4 0 .6l-1.6 1.6" })
    ])
  ]))
}

export default render