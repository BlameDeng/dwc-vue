import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { "fill-rule": "evenodd" }, [
      _createVNode("path", { d: "m10 10.7v-.2c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v.2l-6-2.7v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-6l-6 2.7" }),
      _createVNode("path", { d: "m15 4h-3v-1.5c0-.8-.7-1.5-1.5-1.5h-5c-.8 0-1.5.7-1.5 1.5v1.5h-3c-.6 0-1 .4-1 1v2l6.2 2.7c.3-.4.8-.7 1.3-.7h1c.5 0 1 .3 1.3.7l6.2-2.7v-2c0-.6-.4-1-1-1m-4 0h-6v-1.5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v1.5" }),
      _createVNode("path", { d: "m7.5 10h1c.3 0 .5.2.5.5 0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5 0-.3.2-.5.5-.5" })
    ])
  ]))
}

export default render