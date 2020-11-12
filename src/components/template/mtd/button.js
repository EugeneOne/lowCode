import { attrToString } from '../index';

const handle = function(_attr) {
  let attributes = {
    size: {
      value: 'middle',
    },
    type: {
      value: 'default',
    },
    width: {
      value: 'normal',
    },
    loading: {
      value: false,
    },
    disabled: {
      value: false,
    },
    icon: {
      value: '',
    },
    round: {
      value: '',
    },
  };
  Object.assign(attributes, _attr);
  let content = '按钮';
  const attrStr = attrToString(attributes);
  const template = `<mtdm-button ${attrStr}>${content}</mtdm-button>`;
  return { template };
};

export default handle;
