import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

import styles from './Write.module.scss';

function Write() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.editorBtn} onClick={() => setOpen(!open)}>
          <img src="/plus.png" alt="plus icon" />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addBtn}>
              <img src="/image.png" alt="image icon" />
            </button>
            <button className={styles.addBtn}>
              <img src="/external.png" alt="external icon" />
            </button>
            <button className={styles.addBtn}>
              <img src="/video.png" alt="video icon" />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default Write;
