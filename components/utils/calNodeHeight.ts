const ELE_FACTORS = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing",
];

export function calNodeHeight(node: HTMLTextAreaElement): number {
  const hiddenEle = getHiddenEle() as HTMLTextAreaElement;
  const value = node.value;
  const placeholder = node.placeholder;
  const style = window.getComputedStyle(node);

  ELE_FACTORS.forEach((key) => {
    hiddenEle.style[key] = style.getPropertyValue(key);
  });

  hiddenEle.value = value || placeholder || "";

  const height = hiddenEle.scrollHeight;
  hiddenEle.value = "";
  return height;
}

function getHiddenEle(): HTMLElement {
  const hiddenEle: HTMLElement | null = document.querySelector(
    ".dwc-vue-hidden-text-area"
  );

  if (hiddenEle) {
    return hiddenEle;
  } else {
    const textarea = document.createElement("textarea");
    textarea.className = "dwc-vue-hidden-text-area";
    document.body.append(textarea);
    return textarea;
  }
}
