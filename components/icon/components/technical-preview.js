import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("defs", null, [
      _createVNode("linearGradient", {
        id: "a",
        x1: "8.05",
        y1: "111.8375",
        x2: "8.05",
        y2: "96.1625",
        gradientTransform: "translate(0 -96)",
        gradientUnits: "userSpaceOnUse"
      }, [
        _createVNode("stop", {
          offset: "0",
          "stop-color": "#ffc335"
        }),
        _createVNode("stop", {
          offset: "1",
          "stop-color": "#ffdf52"
        })
      ])
    ]),
    _createVNode("path", {
      d: "M8.7.5l6.9,6.9a.96667.96667,0,0,1,0,1.4L8.7,15.7a.96667.96667,0,0,1-1.4,0L.5,8.7a.96667.96667,0,0,1,0-1.4L7.4.4A.94572.94572,0,0,1,8.7.5",
      fill: "url(#a)"
    }),
    _createVNode("path", {
      d: "M8,1l7,7L8,15,1,8,8,1M8,0a1.08024,1.08024,0,0,0-.7.3l-7,7a.96667.96667,0,0,0,0,1.4l7,7A1.08024,1.08024,0,0,0,8,16a1.08024,1.08024,0,0,0,.7-.3l7-7a.96667.96667,0,0,0,0-1.4l-7-7A1.08024,1.08024,0,0,0,8,0Z",
      fill: "#ffc000"
    }),
    _createVNode("circle", {
      cx: "8",
      cy: "5",
      r: "1"
    }),
    _createVNode("circle", {
      cx: "5.8",
      cy: "6.2",
      r: "0.7",
      opacity: "0.9",
      style: {"isolation":"isolate"}
    }),
    _createVNode("circle", {
      cx: "4.7",
      cy: "8.3",
      r: "0.7",
      opacity: "0.8",
      style: {"isolation":"isolate"}
    }),
    _createVNode("circle", {
      cx: "5.9",
      cy: "10.4",
      r: "0.6",
      opacity: "0.7",
      style: {"isolation":"isolate"}
    }),
    _createVNode("circle", {
      cx: "8",
      cy: "11.5",
      r: "0.5",
      opacity: "0.6",
      style: {"isolation":"isolate"}
    }),
    _createVNode("circle", {
      cx: "9.9",
      cy: "9.9",
      r: "0.4",
      opacity: "0.5",
      style: {"isolation":"isolate"}
    }),
    _createVNode("circle", {
      cx: "11",
      cy: "8.3",
      r: "0.3",
      opacity: "0.4",
      style: {"isolation":"isolate"}
    }),
    _createVNode("circle", {
      cx: "10.4",
      cy: "6.4",
      r: "0.2",
      opacity: "0.3",
      style: {"isolation":"isolate"}
    })
  ]))
}

export default render