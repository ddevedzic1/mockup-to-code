import { RxButton } from 'react-icons/rx';
import { BiHeading, BiText } from 'react-icons/bi';
import { IoIosLink, IoMdRadioButtonOn } from 'react-icons/io';
import { BsBlockquoteLeft, BsTextareaResize } from 'react-icons/bs';
import { MdOutlineLabel } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { FiCheckSquare } from 'react-icons/fi';
import {
  LuStretchVertical,
  LuStretchHorizontal,
  LuLayoutGrid,
} from 'react-icons/lu';

export const ELEMENTS = [
  {
    value: 'layout',
    title: 'Layout',
    elements: [
      {
        value: 'hstack',
        title: 'HStack',
        icon: LuStretchVertical,
      },
      {
        value: 'vstack',
        title: 'VStack',
        icon: LuStretchHorizontal,
      },
      {
        value: 'grid',
        title: 'Grid',
        icon: LuLayoutGrid,
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
      },
      {
        value: 'paragraph',
        title: 'Paragraph',
        icon: BiText,
      },
      {
        value: 'textLink',
        title: 'Text Link',
        icon: IoIosLink,
      },
      {
        value: 'blockQuote',
        title: 'Block Quote',
        icon: BsBlockquoteLeft,
      },
    ],
  },
  {
    value: 'form',
    title: 'Form',
    elements: [
      {
        value: 'button',
        title: 'Button',
        icon: RxButton,
      },
      {
        value: 'label',
        title: 'Label',
        icon: MdOutlineLabel,
      },
      {
        value: 'input',
        title: 'Input',
        icon: AiOutlineForm,
      },
      {
        value: 'textarea',
        title: 'Text Area',
        icon: BsTextareaResize,
      },
      {
        value: 'checkbox',
        title: 'Checkbox',
        icon: FiCheckSquare,
      },
      {
        value: 'radioButton',
        title: 'Radio Button',
        icon: IoMdRadioButtonOn,
      },
    ],
  },
];
