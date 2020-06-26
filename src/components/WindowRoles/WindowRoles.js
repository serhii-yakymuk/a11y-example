import React, { useState, useLayoutEffect, useRef } from 'react';

import Dialog from 'components/Dialog';
import Button from 'components/aria/Button';

import useIsInitialRender from 'hooks/useIsInitialRender';

const WindowRoles = () => {
  const dialogButtonRef = useRef();
  const isInitialRenderRef = useIsInitialRender();
  const [isDialogOpened, setDialogOpened] = useState(false);

  useLayoutEffect(() => {
    if (!isInitialRenderRef.current && !isDialogOpened) {
      dialogButtonRef.current.focus();
    }
  }, [isInitialRenderRef, isDialogOpened])

  return (
    <>
      <h2 id='window-roles-title'>Window Roles</h2>
      <section aria-labelledby='window-roles-title'>
        <Button
          ref={dialogButtonRef}
          onClick={() => setDialogOpened(true)}
        >
          Open Dialog
        </Button>
        {isDialogOpened &&
          <Dialog onClose={() => setDialogOpened(false)} />
        }
      </section>
    </>
  );
}

export default WindowRoles;
