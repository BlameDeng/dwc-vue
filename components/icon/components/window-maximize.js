import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", { d: "m14 2v4.3l-1.6-1.5-2.3 2.3-1.2-1.2 2.3-2.3-1.5-1.6" }),
    _createVNode("path", { d: "M7,16H0V9H7v7M1,15H6V10H1v5" }),
    _createVNode("path", { d: "M0,0V8H1V1H15V15H8v1h8V0Z" })
  ]))
}

export default render