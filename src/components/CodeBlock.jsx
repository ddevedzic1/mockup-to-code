import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

function CodeBlock({ code, language }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref && ref.current) {
            if (ref.current.dataset.highlighted)
                delete ref.current.dataset.highlighted;
            hljs.highlightBlock(ref.current);
        }
    }, [code]);

    return (
        <pre>
            <code ref={ref} className={`language-${language}`} style={{ whiteSpace: 'pre-wrap', backgroundColor: "#202020" }} >
                {code}
            </code>
        </pre >
    );
};

CodeBlock.propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
}

export default CodeBlock;
