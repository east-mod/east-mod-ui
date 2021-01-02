import React from 'react';
import { Empty as AntdEmpty } from 'antd';
import { EmptyProps } from 'antd/lib/empty';
import styled from 'styled-components';

const Container = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
`;

export interface IEmptyProps extends EmptyProps {
  PRESENTED_IMAGE_DEFAULT?: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE?: React.ReactNode;
}

const Empty = (props: IEmptyProps) => {
  const { children, ...other } = props;
  return (
    <Container>
      <AntdEmpty {...other}>{children}</AntdEmpty>
    </Container>
  );
};

Empty.PRESENTED_IMAGE_DEFAULT = AntdEmpty.PRESENTED_IMAGE_DEFAULT;
Empty.PRESENTED_IMAGE_SIMPLE = AntdEmpty.PRESENTED_IMAGE_SIMPLE;

export default Empty;
