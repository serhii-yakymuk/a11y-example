import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Button from 'components/aria/Button';

import './Dialog.css';

const Dialog = props => {
  const { onClose } = props;
  const dialogRef = useRef();
  const okButtonRef = useRef();

  useEffect(() => {
    const rootElement = document.getElementById('root');

    rootElement.inert = true;
    dialogRef.current.focus();

    return () => {
      rootElement.inert = false;
    };
  }, []);

  return createPortal(
    <div className='dialog'>
      <div
        role='dialog'
        tabIndex={-1}
        ref={dialogRef}
        aria-modal='true'
        className='dialog-window'
      >
        <h2 className='dialog-header'>
          Dialog Window Example
        </h2>
        <button
          onClick={onClose}
          className='dialog-close-button'
        >
         <span
          role='img'
          aria-label='Close dialog'
        >
          ❌
        </span>
        </button>
        <p className='dialog-content'>
          Does this example work with your screen reader of choice?
        </p>
        <div
          role='group'
          className='dialog-controls'
        >
          <Button
            ref={okButtonRef}
            onClick={onClose}
          >
            Yes
          </Button>
          <Button onClick={onClose}>
            No
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('dialog')
  );
}

export default Dialog;
