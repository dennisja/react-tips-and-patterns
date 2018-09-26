import styled from 'styled-components';

export const Container = styled.div`
  background: #e8f5e9;
  height: 100%;
`;

export const Header = styled.div`
  background: #00c853;
  padding: 10px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: white;
`;

export const Body = styled.div`
  padding: 20px;
`;

export const ToastWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledToast = styled.div`
  background: white;
  border-radius: 10px;
  color: black;
  width: 300px;
  margin-top: 20px;
  margin-right: 20px;
  overflow: hidden;
  display: flex;
  box-shadow: 1px 1px 1px 1px #00000025;
  transition: all 1s ease;
`;

export const Title = styled.p`
  font-weight: bold;
  padding: 0px 10px;
  margin: 0;
  font-size: 16px;
  padding-top: 10px;
  margin-bottom: 5px;
  color: #00c853;
  background-color: #212121;
  border-color: #00c853;
`;

export const Message = styled.p`
  font-weight: normal;
  padding: 0px 10px;
  margin: 0;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const Close = styled.button`
  font-weight: bold;
  font-size: 16px;
  background: #212121;
  width: 100px;
  border: none;
  color: #00c853;
`;

export const StyledButton = styled.button`
  background-color: #00c853;
  border-color: #00c853;
  font-size: 16px;
  line-height: 22px;
  padding: 0px 16px;
  border-radius: 2px;
  font-weight: bold;
  color: white;
  margin: 0px 20px;
`;
