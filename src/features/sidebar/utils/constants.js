import { RxButton } from 'react-icons/rx';
import { BiHeading, BiText } from 'react-icons/bi';
import { IoIosLink, IoMdRadioButtonOn } from 'react-icons/io';
import { BsBlockquoteLeft, BsTextareaResize } from 'react-icons/bs';
import { MdOutlineLabel } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';

export const ELEMENTS = [
  {
    value: 'basic',
    title: 'Basic',
    elements: [
      {
        value: 'div',
        title: 'Div',
        icon: FiSquare,
        defaultData: {
          tag: 'div',
          attributes: {
            style: {
              display: 'block',
              marginTop: '0',
              marginBottom: '0',
              marginLeft: '0',
              marginRight: '0',
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              paddingRight: '0',
              borderColor: '#111111',
              borderWidth: '2px',
              borderStyle: 'solid',
              width: '100px',
              height: '100px',
            },
          },
          children: [],
        },
      },
      {
        value: 'button',
        title: 'Button',
        icon: RxButton,
        defaultData: {
          tag: 'button',
          attributes: {
            type: 'submit',
            style: {
              display: 'inline-block',
              marginTop: '0',
              marginBottom: '0',
              marginLeft: '0',
              marginRight: '0',
              paddingTop: '2px',
              paddingBottom: '2px',
              paddingLeft: '6px',
              paddingRight: '6px',
              borderColor: '#707070',
              borderWidth: '1px',
              borderStyle: 'solid',
              fontSize: '13px',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              backgroundColor: '#707070',
              cursor: 'default',
            },
          },
          children: ['Click'],
        },
      },
    ],
  },
  {
    value: 'typography',
    title: 'Typography',
    elements: [
      {
        value: 'heading',
        title: 'Heading',
        icon: BiHeading,
        defaultData: {
          tag: 'h1',
          attributes: {
            style: {
              display: 'block',
              marginTop: '0.67em',
              marginBottom: '0.67em',
              marginLeft: '0',
              marginRight: '0',
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              paddingRight: '0',
              fontSize: '2em',
              fontWeight: 'bold',
            },
          },
          children: ['Heading'],
        },
      },
      {
        value: 'paragraph',
        title: 'Paragraph',
        icon: BiText,
        defaultData: {
          tag: 'h1',
          attributes: {
            style: {
              display: 'block',
              marginTop: '1em',
              marginBottom: '1em',
              marginLeft: '0',
              marginRight: '0',
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              paddingRight: '0',
              fontSize: '2em',
            },
          },
          children: ['Paragraph'],
        },
      },
      {
        value: 'textLink',
        title: 'Text Link',
        icon: IoIosLink,
        defaultData: {
          tag: 'a',
          attributes: {
            hreg: '',
            target: '_self',
            style: {
              display: 'inline',
              color: '#0000EE',
              textDecoder: 'underline',
              cursor: 'pointer',
            },
          },
          children: ['link'],
        },
      },
      {
        value: 'blockQuote',
        title: 'Block Quote',
        icon: BsBlockquoteLeft,
        defaultData: {
          tag: 'blockquote',
          attributes: {
            style: {
              display: 'block',
              marginTop: '1em',
              marginBottom: '1em',
              marginLeft: '40px',
              marginRight: '40px',
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              paddingRight: '0',
            },
          },
          children: ['Block Quote'],
        },
      },
    ],
  },
  {
    value: 'form',
    title: 'Form',
    elements: [
      {
        value: 'label',
        title: 'Label',
        icon: MdOutlineLabel,
        defaultData: {
          tag: 'blockquote',
          attributes: {
            style: {
              display: 'inline',
              cursor: 'default',
            },
          },
          children: ['Label'],
        },
      },
      {
        value: 'input',
        title: 'Input',
        icon: AiOutlineForm,
        defaultData: {
          tag: 'input',
          attributes: {
            placeholder: 'type...',
            type: 'text',
            style: {
              display: 'inline-block',
              marginTop: '0',
              marginBottom: '0',
              marginLeft: '0',
              marginRight: '0',
              paddingTop: '1px',
              paddingBottom: '1px',
              paddingLeft: '2px',
              paddingRight: '2px',
              fontSize: '13px',
              fontFamily: 'sans-serif',
              borderWidth: '1px',
              borderColor: '#767676',
              borderStyle: 'solid',
              backgroundColor: '#FFFFFF',
            },
          },
          children: [],
        },
      },
      {
        value: 'textArea',
        title: 'Text Area',
        icon: BsTextareaResize,
        defaultData: {
          tag: 'textarea',
          attributes: {
            placeholder: 'type...',
            rows: '2',
            cols: '2',
            style: {
              display: 'inline-block',
              paddingTop: '2px',
              paddingBottom: '2px',
              paddingLeft: '2px',
              paddingRight: '2px',
              fontSize: '13px',
              fontFamily: 'monospace',
              borderWidth: '1px',
              borderColor: '#767676',
              borderStyle: 'solid',
              backgroundColor: '#FFFFFF',
              resize: 'both',
            },
          },
          children: [],
        },
      },
      {
        value: 'checkbox',
        title: 'Checkbox',
        icon: FiCheckSquare,
        defaultData: {
          tag: 'input',
          attributes: {
            type: 'checkbox',
            checked: true,
            style: {
              display: 'inline-block',
              marginTop: '3px',
              marginBottom: '3px',
              marginLeft: '3px',
              marginRight: '3px',
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              paddingRight: '0',
              borderStyle: 'none',
              backgroundColor: '#707070',
              width: '13px',
              height: '13px',
            },
          },
          children: [],
        },
      },
      {
        value: 'radioButton',
        title: 'Radio Button',
        icon: IoMdRadioButtonOn,
        defaultData: {
          tag: 'input',
          attributes: {
            type: 'radio',
            checked: true,
            style: {
              display: 'inline-block',
              marginTop: '3px',
              marginBottom: '3px',
              marginLeft: '3px',
              marginRight: '3px',
              paddingTop: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              paddingRight: '0',
              borderStyle: 'none',
              backgroundColor: '#707070',
              width: '13px',
              height: '13px',
            },
          },
          children: [],
        },
      },
    ],
  },
];
