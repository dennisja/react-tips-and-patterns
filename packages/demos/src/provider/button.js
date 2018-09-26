import React from 'react';

import { StyledButton } from './common';
import { ToastContextConsumer } from './context';

const Button = ({ toastIndex, children }) => (
  <ToastContextConsumer>
    {({ addToast }) => (
      <StyledButton onClick={() => addToast(toastIndex)}>
        {children}
      </StyledButton>
    )}
  </ToastContextConsumer>
);

export default Button;
