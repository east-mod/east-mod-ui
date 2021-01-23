import React, { useState } from 'react';
import { Tag as AntdTag } from 'antd';
import { TagProps } from 'antd/lib/tag';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Input } from '@/index';

const Container = styled.div`
  padding: 6px;
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
`;

const EMTag = styled(AntdTag)`
  margin-bottom: 8px;
  padding: 10px 0px;
  border-radius: ${(props: Pick<ITagProps, 'radius' | 'enable'>) =>
    props.radius ? '20px' : '0'};
  color: ${(props: Pick<ITagProps, 'radius' | 'enable'>) =>
    props.enable === false ? '#808080' : '#0084ff'};
  font-size: 14px;
  line-height: 24px;
  vertical-align: top;
  background: ${(props: Pick<ITagProps, 'radius' | 'enable'>) =>
    props.enable === false ? '#e6e6e6' : '#0084ff1a'};
  border: 1px solid #fff;
  cursor: ${(props: Pick<ITagProps, 'radius' | 'enable'>) =>
    props.enable === false ? 'not-allowed' : 'pointer'};
  .anticon-close {
    /* vertical-align: baseline; */
    color: #0084ff;
    margin-top: 7px;
  }
  .anticon-plus {
    /* vertical-align: baseline; */
  }
  :hover {
    background-color: #0084ff30;
  }
`;

const DefaultContainer = styled.div`
  border-right: 1px solid #ddd;
  margin-right: 8px;
`;

const AddTag = styled(EMTag)`
  border: 1px solid #0084ff5c;
  background-color: #fff;
`;

export interface ITagProps extends Omit<TagProps, 'onChange'> {
  tags?: Array<string>;
  defaultTags?: Array<string>;
  newButtonText?: string;
  readonly?: boolean;
  maxLength?: number;
  radius?: boolean;
  enable?: boolean;
  onChange?: (value: Array<string>) => void;
}

const Tag: React.FC<ITagProps> = (props: ITagProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState(props.tags || []);
  const {
    defaultTags = [],
    newButtonText = 'New Tag',
    readonly = false,
    closable,
    maxLength = 20,
    radius = false,
    enable = true,
    onChange,
  } = props;

  const handleChange = (value?: Array<string>) => {
    if (typeof onChange === 'function') {
      onChange(value || tags);
    }
  };

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
    handleChange(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let newTags = tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...tags, inputValue];
    }
    setTags(newTags);
    setInputValue('');
    setInputVisible(false);
    handleChange(newTags);
  };

  const handleSelect = (value: string) => {
    let newTags = tags;
    if (value && tags.indexOf(value) === -1) {
      newTags = [...tags, value];
    }
    setTags(newTags);
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <EMTag
        closable={closable || !readonly}
        radius={radius}
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </EMTag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);

  return (
    <Container>
      {defaultTags && defaultTags.length > 0 ? (
        <DefaultContainer>
          <div>Defaults:</div>
          {defaultTags.map((item: string) => (
            <span key={item} style={{ display: 'inline-block' }}>
              <EMTag
                closable={false}
                radius={radius}
                enable={enable && tags.indexOf(item) === -1}
                onClick={e => {
                  e.preventDefault();
                  handleSelect(item);
                }}
              >
                {item}
              </EMTag>
            </span>
          ))}
        </DefaultContainer>
      ) : (
        ''
      )}

      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: (e: { index: number; target: HTMLElement }) => {
              Object.assign(e.target, { style: '' });
            },
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && !readonly && (
        <Input
          onRef={value => value?.focus()}
          type="text"
          size="small"
          height={120}
          placeholder="Please input..."
          style={{ borderRadius: radius ? '20px' : '0', marginTop: 10 }}
          value={inputValue}
          maxLength={maxLength}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && !readonly && (
        <AddTag radius={radius} className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> <span>{newButtonText}</span>
        </AddTag>
      )}
    </Container>
  );
};

export default Tag;
