const componentsList = [
  {
    type: 'button',
    domHead: 'mtd-button',
    content: '按钮',
    attributes: {},
    config: [
      {
        name: 'size',
        type: String,
        value: 'small',
        enum: ['small', '', 'large'],
      },
      {
        name: 'htmlType',
        type: String,
        value: 'button',
        enum: ['button', 'submit', 'reset'],
      },
      {
        name: 'loading',
        type: Boolean,
        value: false,
        enum: [true, false],
      },
      {
        name: 'disabled',
        type: Boolean,
        value: false,
        enum: [true, false],
      },
      {
        name: 'type',
        type: String,
        value: 'primary',
        enum: ['primary', 'text', 'text-primary', 'success', 'warning', 'danger', ''],
      },
    ],
  },
  // {
  //   type: 'tag',
  // },
  // 'button',
  // 'tag'
];

export default componentsList;
