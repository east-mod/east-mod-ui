import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';

const EMButton = styled(AntdButton)`
  height: auto !important;
  padding: 15px 4px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
    margin-left: 0 !important;
    margin: 4px 0;
  }
`;

export interface IButtonProps extends ButtonProps {}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return <EMButton {...props}>{props.children}</EMButton>;
};

export default Button;
