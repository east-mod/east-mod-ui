import React, { KeyboardEvent } from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Input, IInputProps, Empty } from '@/index';
import './style.less';

const Container = styled.div`
  position: relative;
  width: 32px;
`;

const PopoverContent = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  padding-right: 10px;
  height: 100%;
  .ant-empty-normal {
    .ant-empty-image {
      height: auto !important;
    }
  }
`;

const Category = styled.div``;

const Result = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ResultItem = styled.li`
  line-height: 32px;
  padding: 4px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  :hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;

const Title = styled.div`
  border-right: 1px solid #e5e5e5;
  color: #999;
  padding: 4px;
`;

const NoResult = styled.p`
  color: #d0d0d0;
  margin-top: 70px;
  font-size: 12px;
`;

export type SearchResult = {
  key: string | number;
  value: string | number;
  text: string;
};

export type ResultCategory = {
  title?: string;
  list?: Array<SearchResult>;
};

export interface ISearchProps extends IInputProps {
  inputStyle?: object;
  searchText?: string;
  defaultList?: Array<ResultCategory>;
  searchResult?: Array<SearchResult>;
  showPopover?: boolean;
  onSearchTextChange?: (value: string) => void;
  onSearch?: (searchText: string | undefined) => void;
  onResultClick?: (value: SearchResult) => void;
}

const Search: React.FC<ISearchProps> = (props: ISearchProps) => {
  const {
    placeholder,
    defaultList,
    searchResult,
    onRef,
    inputStyle,
    showPopover = true,
    searchText,
    onSearchTextChange,
    onSearch,
    onResultClick,
    ...rest
  } = props;
  const hadSearchResult = searchResult && searchResult.length > 0;

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && typeof onSearch === 'function') {
      onSearch(searchText);
    }
  };

  const handleResultClick = (value: SearchResult) => {
    if (typeof onResultClick === 'function') {
      onResultClick(value);
    }
  };
  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onSearchTextChange === 'function') {
      onSearchTextChange(e.target.value);
    }
  };

  const DefaultContent = (
    <PopoverContent>
      {defaultList && defaultList.length > 0 ? (
        <Category>
          {defaultList.map((category, idx) => (
            <div key={idx}>
              <Title>{category?.title}</Title>
              <Result>
                {category && category.list && category.list.length > 0 ? (
                  category.list.map(item => (
                    <ResultItem
                      key={item.key}
                      onMouseDown={e => {
                        e.preventDefault();
                        handleResultClick(item);
                      }}
                    >
                      {item.text}
                    </ResultItem>
                  ))
                ) : (
                  <NoResult>No Data</NoResult>
                )}
              </Result>
            </div>
          ))}
        </Category>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ marginTop: 40 }} />
      )}
    </PopoverContent>
  );

  const SearchResultContent = (
    <PopoverContent>
      <Result>
        {searchResult &&
          searchResult.map(item => (
            <ResultItem
              key={item.key}
              onMouseDown={e => {
                e.preventDefault();
                handleResultClick(item);
              }}
            >
              {item.text}
            </ResultItem>
          ))}
      </Result>
    </PopoverContent>
  );

  const inputContent = (
    <Input
      prefix={<SearchOutlined style={{ color: '#999' }} />}
      placeholder={placeholder}
      onRef={onRef}
      style={Object.assign({}, inputStyle, { width: 200 })}
      value={searchText}
      onChange={handleSearchTextChange}
      onKeyUp={handleKeyUp}
      {...rest}
    />
  );

  return (
    <Container>
      {showPopover ? (
        <Popover
          title={null}
          placement="right"
          trigger="focus"
          visible={true}
          overlayClassName="em-search-popover"
          content={hadSearchResult ? SearchResultContent : DefaultContent}
        >
          {inputContent}
        </Popover>
      ) : (
        inputContent
      )}
    </Container>
  );
};

export default Search;
