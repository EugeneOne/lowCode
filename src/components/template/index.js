import mtd from './mtd';
import { _clonedeep } from '@utils/utils';

const allTemplate = {
  mtd,
};

const templateToDom = function(info, _attr = {}) {
  if (!info.type || !info.ui) return;
  let component = _clonedeep(allTemplate[info.ui][info.type]);
  component.attributes = Object.assign(component.attributes, _attr);
  // 属性
  const attrStr = attrToString(component.attributes);
  component.template = `<${component.domHead} ${attrStr}>${component.content}</${component.domHead}>`;
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
