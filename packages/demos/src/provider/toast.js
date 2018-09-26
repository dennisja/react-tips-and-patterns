import React from 'react';

import { StyledToast, Title, Message, Close, ToastWrapper } from './common';
import { ToastContextConsumer } from './context';

const Toast = ({ toast: { title, message }, toastIndex }) => (
  <ToastContextConsumer>
    {({ removeToast }) => (
      <StyledToast>
        <div style={{ flex: 1 }}>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </div>
        <Close onClick={() => removeToast(toastIndex)}>X</Close>
      </StyledToast>
    )}
  </ToastContextConsumer>
);

const ToastList = ({ toasts }) => (
  <ToastWrapper>
    {toasts.map((toast, index) => (
      <Toast key={index} toastIndex={index} toast={toast} />
    ))}
  </ToastWrapper>
);

export default ToastList;
