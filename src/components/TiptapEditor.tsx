import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

interface TiptapEditorProps {
  onChange?: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    if (!editorRef.current) return;
    const tiptap = new Editor({
      element: editorRef.current,
      extensions: [StarterKit],
      content: "",
      onUpdate({ editor }) {
        onChange?.(editor.getHTML());
        forceUpdate({}); // re-render for active toolbar state
      },
    });
    setEditor(tiptap);
    return () => {
      tiptap.destroy();
    };
  }, [onChange]);

  const buttonStyle = (active: boolean) => ({
    fontWeight: active ? 'bold' : 'normal',
    background: active ? '#e3e3e3' : 'transparent',
    border: 'none',
    borderRadius: 4,
    padding: '4px 8px',
    marginRight: 6,
    cursor: 'pointer',
    outline: 'none',
  });

  return (
    <div>
      <div style={{ marginBottom: 8, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('bold') ?? false)}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          aria-label="Bold"
        >
          <b>B</b>
        </button>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('italic') ?? false)}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          aria-label="Italic"
        >
          <i>I</i>
        </button>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('heading', { level: 1 }) ?? false)}
          onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
          aria-label="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('heading', { level: 2 }) ?? false)}
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          aria-label="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('bulletList') ?? false)}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          aria-label="Bullet List"
        >
          • List
        </button>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('orderedList') ?? false)}
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          aria-label="Ordered List"
        >
          1. List
        </button>
        <button
          type="button"
          style={buttonStyle(editor?.isActive('blockquote') ?? false)}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          aria-label="Blockquote"
        >
          “ ”
        </button>
        <button
          type="button"
          style={buttonStyle(false)}
          onClick={() => editor?.chain().focus().undo().run()}
          aria-label="Undo"
        >
          ⎌
        </button>
        <button
          type="button"
          style={buttonStyle(false)}
          onClick={() => editor?.chain().focus().redo().run()}
          aria-label="Redo"
        >
          ↻
        </button>
      </div>
      <div ref={editorRef} className="tiptap" style={{ minHeight: 200, border: '1px solid #ddd', borderRadius: 8, padding: 16, marginBottom: 16 }} />
    </div>
  );
};

export default TiptapEditor;
