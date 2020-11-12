import mtd from './mtd';

const allTemplate = {
  mtd,
};

const templateToDom = function(info, _attr = {}) {
  if (!info.type || !info.ui) return;
  let component = allTemplate[info.ui][info.type](_attr);
  return component;
};

const attrToString = function(_attr = {}) {
  let attrString = '';
  Object.keys(_attr).forEach((item) => {
    if (item.value) {
      attrString += ` ${item}="${item.value}"`;
    }
  });
  return attrString;
};

export { templateToDom, attrToString };
