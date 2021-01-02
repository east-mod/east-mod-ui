import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Popover, Avatar } from 'antd';
import { PopoverProps } from 'antd/lib/popover';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  min-height: 355px;
`;

const BaseInfo = styled.div`
  border-right: 1px solid #f3f3f3;
  padding-right: 10px;
  display: flex;
`;

const Name = styled.h1`
  font-size: 14px;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`;

const AvatarBox = styled.div`
  position: relative;
  width: 32px;
  .ant-avatar {
    > span {
      vertical-align: baseline;
    }
  }
`;

const Desc = styled.div`
  font-size: 12px;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
`;

const Item = styled.div`
  display: flex;
  padding: 10px 0;
  :hover {
    cursor: pointer;
    color: #1fa7fd;
    background-color: #f9f9f9;
    > div {
      color: #1fa7fd;
    }
  }
`;

const Title = styled.div`
  color: #7c7d7d;
  line-height: 60px;
`;

const Content = styled.div`
  writing-mode: horizontal-tb;
  font-weight: bold;
  text-align: center;
  font-size: 12px;
`;

const Action = styled.div`
  display: flex;
  justify-content: space-around;
`;

export interface IUserPopoverProps extends PopoverProps {
  avatar?: string;
  name?: string;
  intro?: string;
  answers?: number | string;
  articles?: number | string;
  followers?: number | string;
  userLink?: string;
  answerLink?: string;
  articleLink?: string;
  followerLink?: string;
  actions?: React.ReactNode;
}

const UserPopover: React.FC<IUserPopoverProps> = (props: IUserPopoverProps) => {
  const {
    placement = 'rightTop',
    avatar,
    name,
    intro,
    actions,
    answers,
    articles,
    userLink,
    answerLink,
    articleLink,
    followerLink,
    followers,
    children,
  } = props;

  const handleJump = (link: string | undefined): any => {
    if (!link) {
      return null;
    }
    window.open(link);
  };

  const content = (
    <Container>
      <BaseInfo>
        <AvatarBox>
          <Avatar
            size="large"
            shape="square"
            src={avatar}
            icon={!avatar && <UserOutlined />}
          />
        </AvatarBox>
        <div style={{ marginTop: 10 }}>
          <Name onClick={() => handleJump(userLink)}>{name || '--'}</Name>
          <Desc>{intro}</Desc>
        </div>
      </BaseInfo>
      <Body>
        <Item onClick={() => handleJump(answerLink)}>
          <Title>Answers (</Title>
          <Content>{answers || 0}</Content>
          <Title>)</Title>
        </Item>
        <Item onClick={() => handleJump(articleLink)}>
          <Title>Articles (</Title>
          <Content>{articles || 0}</Content>
          <Title>)</Title>
        </Item>
        <Item onClick={() => handleJump(followerLink)}>
          <Title>Followers (</Title>
          <Content>{followers || 0}</Content>
          <Title>)</Title>
        </Item>
      </Body>
      <Action>{actions}</Action>
    </Container>
  );

  return (
    <Popover content={content} placement={placement} title={null}>
      {children}
    </Popover>
  );
};

export default UserPopover;
