export const ELEMENTS_DEFAULT_DATA = {
  hstack: {
    internalTag: 'hstack',
    tag: 'div',
    attributes: {
      style: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        paddingRight: '0',
        borderColor: '#8c8a82',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '100%',
        height: '200px',
      },
    },
    children: [],
  },
  vstack: {
    internalTag: 'vstack',
    tag: 'div',
    attributes: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        paddingRight: '0',
        borderColor: '#8c8a82',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '100%',
        height: '200px',
      },
    },
    children: [],
  },
  grid: {
    internalTag: 'grid',
    tag: 'div',
    attributes: {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gridRowGap: '10px',
        gridColumnGap: '10px',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        paddingRight: '0',
        borderColor: '#8c8a82',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '100%',
        height: '200px',
      },
    },
    children: [],
  },
  heading: {
    internalTag: 'heading',
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
  paragraph: {
    internalTag: 'paragraph',
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
      },
    },
    children: ['Paragraph'],
  },
  textLink: {
    internalTag: 'textLink',
    tag: 'a',
    attributes: {
      hreg: '',
      target: '_self',
      style: {
        color: '#0000EE',
        textDecoder: 'underline',
        cursor: 'pointer',
      },
    },
    children: ['link'],
  },
  blockQuote: {
    internalTag: 'blockQuote',
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
  button: {
    internalTag: 'button',
    tag: 'button',
    attributes: {
      type: 'submit',
      style: {
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
  label: {
    internalTag: 'label',
    tag: 'label',
    attributes: {
      style: {
        cursor: 'default',
      },
    },
    children: ['Label'],
  },
  input: {
    internalTag: 'input',
    tag: 'input',
    attributes: {
      placeholder: 'type...',
      type: 'text',
      style: {
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
  textarea: {
    internalTag: 'textarea',
    tag: 'textarea',
    attributes: {
      placeholder: 'type...',
      rows: '2',
      cols: '2',
      style: {
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
  checkbox: {
    internalTag: 'checkbox',
    tag: 'input',
    attributes: {
      type: 'checkbox',
      checked: true,
      style: {
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
  radioButton: {
    internalTag: 'radioButton',
    tag: 'input',
    attributes: {
      type: 'radio',
      checked: true,
      style: {
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
};
