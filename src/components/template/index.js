import { _clonedeep } from '@utils/utils';

const templateToDom = function(info, _attr = {}) {
  console.log(info);
  if (!info.type || !info.ui) return;
  let component = _clonedeep(info);
  component.attributes = Object.assign(component.attributes, _attr);
  // 属性
  const attrStr = attrToString(component.attributes);
  const configStr = configToString(component.config);
  component.template = `<${component.domHead} ${attrStr} ${configStr}>${component.content}</${component.domHead}>`;
  return component;
};

const attrToString = function(_attr = {}) {
  console.log(_attr);
  let attrString = '';
  Object.keys(_attr).forEach((item) => {
    if (item.value) {
      attrString += ` ${item.name}="${item.value}"`;
    }
  });
  return attrString;
};

const configToString = function(config = []) {
  let configString = '';
  config.forEach((item) => {
    if (item.value) {
      configString += ` ${item.name}="${item.value}"`;
    }
  });
  return configString;
};

export { templateToDom, attrToString };
