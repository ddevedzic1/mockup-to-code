const FONT_FAMILY_OPTIONS = [
  { value: 'Arial, sans-serif', title: 'Arial' },
  { value: "'Courier New', Courier, monospace", title: 'Courier New' },
  { value: "'Georgia', serif", title: 'Georgia' },
  { value: "'Times New Roman', Times, serif", title: 'Times New Roman' },
  { value: "'Verdana, sans-serif'", title: 'Verdana' },
];

const FONT_WEIGHT_OPTIONS = [
  { value: '100', title: 'Thin' },
  { value: '200', title: 'Extra Light' },
  { value: '300', title: 'Light' },
  { value: '400', title: 'Normal' },
  { value: '500', title: 'Medium' },
  { value: '600', title: 'Semi Bold' },
  { value: '700', title: 'Bold' },
  { value: '800', title: 'Extra Bold' },
  { value: '900', title: 'Black' },
];

const TEXT_ALIGN_OPTIONS = [
  { value: 'left', title: 'Left' },
  { value: 'center', title: 'Center' },
  { value: 'right', title: 'Right' },
  { value: 'justify', title: 'Justify' },
];

const BORDER_STYLE_OPTIONS = [
  { value: 'solid', title: 'Solid' },
  { value: 'dashed', title: 'Dashed' },
  { value: 'dotted', title: 'Dotted' },
  { value: 'double', title: 'Double' },
  { value: 'groove', title: 'Groove' },
  { value: 'ridge', title: 'Ridge' },
  { value: 'inset', title: 'Inset' },
  { value: 'outset', title: 'Outset' },
];

const JUSTIFY_CONTENT_OPTIONS = [
  { value: 'flex-start', title: 'Flex Start' },
  { value: 'flex-end', title: 'Flex End' },
  { value: 'center', title: 'Center' },
  { value: 'space-between', title: 'Space Between' },
  { value: 'space-around', title: 'Space Around' },
];

const ALIGN_ITEMS_OPTIONS = [
  { value: 'flex-start', title: 'Flex Start' },
  { value: 'flex-end', title: 'Flex End' },
  { value: 'center', title: 'Center' },
];

export const STYLE_OPTIONS = [
  {
    value: 'textStyle',
    title: 'Text Style',
    notAllowedElements: ['checkbox', 'radioButton'],
    options: [
      {
        pureTag: 'font-family',
        reactTag: 'fontFamily',
        label: 'Font Family',
        inputType: 'select',
        options: FONT_FAMILY_OPTIONS,
      },
      {
        pureTag: 'font-size',
        reactTag: 'fontSize',
        label: 'Font Size',
        inputType: 'text',
      },
      {
        pureTag: 'font-weight',
        reactTag: 'fontWeight',
        label: 'Font Weight',
        inputType: 'select',
        options: FONT_WEIGHT_OPTIONS,
      },
      {
        pureTag: 'line-height',
        reactTag: 'lineHeight',
        label: 'Line Height',
        inputType: 'text',
      },
      {
        pureTag: 'text-align',
        reactTag: 'textAlign',
        label: 'Text Align',
        inputType: 'select',
        options: TEXT_ALIGN_OPTIONS,
      },
      {
        pureTag: 'color',
        reactTag: 'color',
        label: 'Text Color',
        inputType: 'color',
      },
    ],
  },
  {
    value: 'layout',
    title: 'Layout',
    notAllowedElements: [
      'heading',
      'paragraph',
      'textLink',
      'blockQuote',
      'button',
      'label',
      'input',
      'textarea',
      'checkbox',
      'radioButton',
    ],
    options: [
      {
        notAllowedElements: ['hstack', 'vstack', 'rootElement'],
        pureTag: 'grid-template-columns',
        reactTag: 'gridTemplateColumns',
        label: 'Columns Template',
        inputType: 'text',
      },
      {
        notAllowedElements: ['hstack', 'vstack', 'rootElement'],
        pureTag: 'grid-template-rows',
        reactTag: 'gridTemplateRows',
        label: 'Rows Template',
        inputType: 'text',
      },
      {
        notAllowedElements: ['hstack', 'vstack', 'rootElement'],
        pureTag: 'grid-column-gap',
        reactTag: 'gridColumnGap',
        label: 'Column Gap',
        inputType: 'text',
      },
      {
        notAllowedElements: ['hstack', 'vstack', 'rootElement'],
        pureTag: 'grid-row-gap',
        reactTag: 'gridRowGap',
        label: 'Row Gap',
        inputType: 'text',
      },
      {
        notAllowedElements: ['hstack', 'vstack', 'rootElement'],
        pureTag: 'justify-items',
        reactTag: 'justifyItems',
        label: 'Justify Items',
        inputType: 'select',
        options: ALIGN_ITEMS_OPTIONS,
      },
      {
        notAllowedElements: ['grid'],
        pureTag: 'justify-content',
        reactTag: 'justifyContent',
        label: 'Justify Content',
        inputType: 'select',
        options: JUSTIFY_CONTENT_OPTIONS,
      },
      {
        pureTag: 'align-items',
        reactTag: 'alignItems',
        label: 'Align Items',
        inputType: 'select',
        options: ALIGN_ITEMS_OPTIONS,
      },
      {
        notAllowedElements: ['grid'],
        pureTag: 'gap',
        reactTag: 'gap',
        label: 'Gap',
        inputType: 'text',
      },
    ],
  },
  {
    value: 'size',
    title: 'Size',
    notAllowedElements: ['rootElement'],
    options: [
      {
        pureTag: 'width',
        reactTag: 'width',
        label: 'Width',
        inputType: 'text',
      },
      {
        pureTag: 'height',
        reactTag: 'height',
        label: 'Height',
        inputType: 'text',
      },
      {
        pureTag: 'min-width',
        reactTag: 'minWidth',
        label: 'Min Width',
        inputType: 'text',
      },
      {
        pureTag: 'max-width',
        reactTag: 'maxWidth',
        label: 'Max Width',
        inputType: 'text',
      },
      {
        pureTag: 'min-height',
        reactTag: 'minHeight',
        label: 'Min Height',
        inputType: 'text',
      },
      {
        pureTag: 'max-height',
        reactTag: 'maxHeight',
        label: 'Max Height',
        inputType: 'text',
      },
    ],
  },
  {
    value: 'spacing',
    title: 'Spacing',
    options: [
      {
        pureTag: 'padding-top',
        reactTag: 'paddingTop',
        label: 'Padding Top',
        inputType: 'text',
      },
      {
        pureTag: 'padding-right',
        reactTag: 'paddingRight',
        label: 'Padding Right',
        inputType: 'text',
      },
      {
        pureTag: 'padding-bottom',
        reactTag: 'paddingBottom',
        label: 'Padding Bottom',
        inputType: 'text',
      },
      {
        pureTag: 'padding-left',
        reactTag: 'paddingLeft',
        label: 'Padding Left',
        inputType: 'text',
      },
      {
        notAllowedElements: ['rootElement'],
        pureTag: 'margin-top',
        reactTag: 'marginTop',
        label: 'Margin Top',
        inputType: 'text',
      },
      {
        notAllowedElements: ['rootElement'],
        pureTag: 'margin-right',
        reactTag: 'marginRight',
        label: 'Margin Right',
        inputType: 'text',
      },
      {
        notAllowedElements: ['rootElement'],
        pureTag: 'margin-bottom',
        reactTag: 'marginBottom',
        label: 'Margin Bottom',
        inputType: 'text',
      },
      {
        notAllowedElements: ['rootElement'],
        pureTag: 'margin-left',
        reactTag: 'marginLeft',
        label: 'Margin Left',
        inputType: 'text',
      },
    ],
  },
  {
    value: 'borders',
    title: 'Borders',
    notAllowedElements: ['checkbox', 'radioButton'],
    options: [
      {
        pureTag: 'border-width',
        reactTag: 'borderWidth',
        label: 'Border Width',
        inputType: 'text',
      },
      {
        pureTag: 'border-style',
        reactTag: 'borderStyle',
        label: 'Border Style',
        inputType: 'select',
        options: BORDER_STYLE_OPTIONS,
      },
      {
        pureTag: 'border-color',
        reactTag: 'borderColor',
        label: 'Border Color',
        inputType: 'color',
      },
      {
        notAllowedElements: ['rootElement'],
        pureTag: 'border-radius',
        reactTag: 'borderRadius',
        label: 'Border Radius',
        inputType: 'text',
      },
    ],
  },
  {
    value: 'other',
    title: 'Other',
    options: [
      {
        notAllowedElements: ['checkbox', 'radioButton'],
        pureTag: 'background-color',
        reactTag: 'backgroundColor',
        label: 'Background Color',
        inputType: 'color',
      },
      {
        notAllowedElements: ['rootElement'],
        pureTag: 'box-shadow',
        reactTag: 'boxShadow',
        label: 'Box Shadow',
        inputType: 'text',
      },
      {
        pureTag: 'opacity',
        reactTag: 'opacity',
        label: 'Opacity',
        inputType: 'number',
      },
    ],
  },
];
