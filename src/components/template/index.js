import atom from './atom';

const templateToDom = function(info, _attr = {}) {
  let component = '';
  // type: atom (原子组件) cell（细胞组件）
  switch (info.type) {
    case 'atom':
      component = atom[info.name](_attr);
      break;

    default:
      break;
  }
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
