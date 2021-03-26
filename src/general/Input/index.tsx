import React from 'react';
import { Input as AntdInput } from 'antd';
import Input, { InputProps } from 'antd/lib/input';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 32px;
  height: ${(props: ContainerProps) => props.height}px;
`;

const InputContent = styled.div`
  transform: rotate(90deg);
  transform-origin: 16px;
  position: absolute;
  .ant-input-affix-wrapper {
    writing-mode: horizontal-tb;
  }
  input {
    :hover {
      cursor: vertical-text;
    }
  }
`;

type ContainerProps = {
  height: string | number | undefined;
};

export interface IInputProps extends InputProps {
  onRef?: any;
}

export interface EMInput extends Input {}

const EMInput: React.FC<IInputProps> = (props: IInputProps) => {
  const { height, onRef, style, ...rest } = props;
  const _height =
    typeof Number(props.height) === 'number'
      ? `${props.height || 200}`
      : props.width;

  return (
    <Container height={_height}>
      <InputContent>
        <AntdInput
          {...rest}
          ref={onRef}
          style={Object.assign({}, style, { width: `${_height}px` })}
        />
      </InputContent>
    </Container>
  );
};

export default EMInput;
