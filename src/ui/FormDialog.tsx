import css from '@emotion/css';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { ReactNode, useState } from 'react';

type FormDialogProps = {
  onBackdropClick?: () => void;
  children: ReactNode;
  title: string;
};
const FormDialog: React.FC<FormDialogProps> = ({
  children,
  title,
  onBackdropClick,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={() => setOpen(false)}
      css={css`
        z-index: 1400;
      `}
      onBackdropClick={onBackdropClick}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default FormDialog;
