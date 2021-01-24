import React, { useState } from 'react';
import { Tag as AntdTag } from 'antd';
import { TagProps } from 'antd/lib/tag';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Search, SearchResult } from '@/index';

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

export interface ITag {
  text: string;
  value: string | number;
}

export interface ITagProps extends Omit<TagProps, 'onChange'> {
  tags?: Array<ITag>;
  defaultTags?: Array<ITag>;
  searchResult?: Array<SearchResult>;
  defaultSearchResult?: Array<SearchResult>;
  newButtonText?: string;
  readonly?: boolean;
  maxLength?: number;
  radius?: boolean;
  enable?: boolean;
  onChange?: (value: Array<ITag>) => void;
  onSearch?: (value?: string) => void;
}

function isExist<T extends ITag | SearchResult>(tags: Array<ITag>, input: T) {
  return tags.findIndex(item => item.value === input.value) > -1;
}

const Tag: React.FC<ITagProps> = (props: ITagProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState(props.tags || []);
  // const [searchRef, setSearchRef] = useState();
  const {
    defaultTags = [],
    newButtonText = 'New Tag',
    readonly = false,
    closable,
    // maxLength = 20,
    searchResult = [],
    // defaultSearchResult = [],
    radius = false,
    enable = true,
    onSearch,
    onChange,
  } = props;
  // let searchRef = React.createRef<Input | null>();
  // console.log(searchRef);

  const handleChange = (value?: Array<ITag>) => {
    if (typeof onChange === 'function') {
      onChange(value || tags);
    }
  };

  const handleClose = (removedTag: ITag) => {
    const newTags = tags.filter(tag => tag.value !== removedTag?.value);
    setTags(newTags);
    handleChange(newTags);
  };

  const showInput = () => {
    // setTimeout(() => {
    //   console.log(searchRef);
    //   searchRef?.current?.focus();
    // }, 500)
    setInputVisible(true);
  };

  // const handleInputChange = (e: any) => {
  //   setInputValue(e.target.value);
  // };

  // const handleInputConfirm = () => {
  //   let newTags = tags;
  //   if (inputValue && tags.findIndex(item => item.value === inputValue) === -1) {
  //     newTags = [...tags, inputValue];
  //   }
  //   setTags(newTags);
  //   setInputValue('');
  //   setInputVisible(false);
  //   handleChange(newTags);
  // };

  const handleSelect = (_value: ITag) => {
    let newTags = tags;
    if (_value && !isExist(tags, _value)) {
      newTags = [...tags, _value];
    }
    setTags(newTags);
  };

  const handleResultClick = (_value: SearchResult) => {
    let newTags = tags;
    if (_value && !isExist(tags, _value)) {
      newTags = [...tags, { text: _value.text, value: _value.value } as ITag];
    }
    setTags(newTags);
    setInputVisible(false);
  };

  const forMap = (tag: ITag) => {
    const tagElem = (
      <EMTag
        closable={closable || !readonly}
        radius={radius}
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag.text}
      </EMTag>
    );
    return (
      <span key={tag.value} style={{ display: 'inline-block' }}>
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
          {defaultTags.map((item: ITag) => (
            <span key={item.value} style={{ display: 'inline-block' }}>
              <EMTag
                closable={false}
                radius={radius}
                enable={enable && !isExist(tags, item)}
                onClick={e => {
                  e.preventDefault();
                  handleSelect(item);
                }}
              >
                {item.text}
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
        <Search
          placeholder="Input search text..."
          // onRef={inputNode => setSearchRef(inputNode)}
          defaultList={[]}
          searchResult={searchResult}
          onSearch={onSearch}
          onResultClick={handleResultClick}
          onBlur={() =>
            setTimeout(() => {
              setInputVisible(false);
            }, 10)
          }
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
