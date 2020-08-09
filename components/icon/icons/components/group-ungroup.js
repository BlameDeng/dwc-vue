import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("g", { "fill-rule": "evenodd" }, [
      _createVNode("path", {
        d: "M12 8a4 4 0 1 1 -4 4A4 4 0 0 1 12 8",
        opacity: ".5"
      }),
      _createVNode("path", { d: "m4 0l-4 8h8" })
    ])
  ]))
}

export default render