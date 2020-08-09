import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "M10.3 5.9 7.7 9.3 6 7.6 3 11 13 11z" }),
      _createVNode("circle", {
        cx: "4.4",
        cy: "5.9",
        r: "1.3"
      }),
      _createVNode("path", { d: "M0,2v12h16V2H0z M14,12H2V4h12V12z" })
    ])
  ]))
}

export default render