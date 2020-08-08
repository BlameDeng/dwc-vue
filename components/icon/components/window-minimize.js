import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "m0 16v-4.3l1.6 1.5 2.3-2.3 1.2 1.2-2.3 2.3 1.5 1.6" }),
    _createVNode("path", { d: "M13,10H6V3h7ZM7,9h5V4H7Z" }),
    _createVNode("path", { d: "M0,0V10H1V1H15V15H6v1H16V0Z" })
  ]))
}

export default render