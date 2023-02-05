import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { keymap } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import { EditorView } from '@codemirror/view';

function App({ children, ...props }) {

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log(value);
    }, []);

    return (
        <CodeMirror
            value={children}
            extensions={[keymap.of(defaultKeymap), props.type, EditorView.lineWrapping]}
            onChange={onChange}
            theme={dracula}
            style={{ "height": props.height }}
        />
    );
}
export default App;