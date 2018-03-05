const input = (function() {
  let curInput = null;

  const isDOM = function isDOM(el) {
    const elType = Object.prototype.toString.call(el);
    if(elType.indexOf('HTML') === -1 || elType.indexOf('Element') === -1) throw new TypeError(`${el} 不是一个正确的 DOM 元素！`);
  };

  const getOffsetTop = function getOffsetTop(el) {
    isDOM(el);

    let top = el.offsetTop;
    let parent = el.offsetParent;

    while (parent) {
      top += parent.offsetTop;
      parent = parent.offsetParent;
    }

    return top;
  };

  const inputFocus = function inputFocus() {
    window.onresize = elResize;
    curInput = this;
  };

  const inputBlur = function inputBlur() {
    window.onresize = null;
    curInput = null;
  };

  const elResize = function elResize() {
    isDOM(curInput);
    const el = curInput;
    const offsetTop = getOffsetTop(el);
    const innerHeight = window.innerHeight;
    const clientHeight = el.clientHeight;
    if(clientHeight + offsetTop > innerHeight) {
      el.scrollIntoView();
    }
  };

  return function input(el) {
    isDOM(el);

    setTimeout(function() {
      el.windowInnerHeight = window.innerHeight;
      const inputs = Array.prototype.slice.call(el.getElementsByTagName('input'));
      const textareas = Array.prototype.slice.call(el.getElementsByTagName('textarea'));
      if(!inputs.length && !textareas.length) return;

      inputs.forEach(item => {
        item.onfocus = inputFocus;
        item.onblur = inputBlur;
      });

      textareas.forEach(item => {
        item.onfocus = inputFocus;
        item.onblur = inputBlur;
      })
    }, 0)
  };
})();

export default input;
