import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "M0,0V16H16V0ZM12,1h1V2H12ZM1,15V4H15V15ZM14,2V1h1V2Z" }),
    _createVNode("path", { d: "m9 6l3 3-3 3v-2h-5v-2h5" })
  ]))
}

export default render