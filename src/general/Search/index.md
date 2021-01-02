## Search

### Default

```tsx
import React from 'react';
import { Search } from 'zvvn-mod-ui';

export default () => (
  <Search
    placeholder="Input search text..."
    onSearch={value => console.log(value)}
  />
);
```

### Default List

```tsx
import React from 'react';
import { Search } from 'zvvn-mod-ui';

export default () => (
  <Search
    placeholder="Input search text..."
    defaultList={[
      {
        title: '热搜',
        list: [
          {
            key: 1,
            value: 1,
            text: '电影《怪物猎人》上映',
          },
          {
            key: 2,
            value: 2,
            text: '电影《冷血矿盐》网播',
          },
        ],
      },
      {
        title: '搜索历史',
        list: [
          {
            key: 1,
            value: 1,
            text: '怪物',
          },
          {
            key: 2,
            value: 2,
            text: '冷血',
          },
          {
            key: 3,
            value: 3,
            text: '怪物3',
          },
          {
            key: 4,
            value: 4,
            text: '冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血',
          },
        ],
      },
    ]}
    onSearch={value => console.log(value)}
    onResultClick={value => console.log(value)}
  />
);
```

### WithResult

```tsx
import React from 'react';
import { Search } from 'zvvn-mod-ui';

export default () => (
  <Search
    placeholder="Input search text..."
    defaultList={[]}
    searchResult={[
      {
        key: 1,
        value: 1,
        text: '怪物',
      },
      {
        key: 2,
        value: 2,
        text: '冷血',
      },
      {
        key: 3,
        value: 3,
        text: '怪物3',
      },
      {
        key: 4,
        value: 4,
        text: '冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血',
      },
    ]}
    onSearch={value => console.log(value)}
    onResultClick={value => console.log(value)}
  />
);
```

### NoPopover

```tsx
import React from 'react';
import { Search } from 'zvvn-mod-ui';

export default () => (
  <Search
    placeholder="Input search text..."
    defaultList={[]}
    showPopover={false}
    searchResult={[
      {
        key: 1,
        value: 1,
        text: '怪物',
      },
      {
        key: 2,
        value: 2,
        text: '冷血',
      },
      {
        key: 3,
        value: 3,
        text: '怪物3',
      },
      {
        key: 4,
        value: 4,
        text: '冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血冷血',
      },
    ]}
    onSearch={value => console.log(value)}
    onResultClick={value => console.log(value)}
  />
);
```
