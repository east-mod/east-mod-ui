## Tag

### Default

```tsx
import React, { useState } from 'react';
import { Tag } from 'zvvn-mod-ui';

const serverList = [
  {
    key: 1,
    value: 11,
    text: '怪物',
  },
  {
    key: 2,
    value: 12,
    text: '冷血',
  },
  {
    key: 3,
    value: 13,
    text: '怪物3',
  },
  {
    key: 4,
    value: 14,
    text: '冷血冷血',
  },
];

export default () => {
  const [searchResult, setSearchResult] = useState([]);
  const tags = [
    {
      value: 1,
      text: 'Tag1',
    },
    {
      value: 2,
      text: 'tag2',
    },
    {
      value: 3,
      text: 'tag3',
    },
    {
      value: 4,
      text: 'tag4',
    },
  ];

  const handleSearch = value => {
    if (value) {
      const filters = serverList.filter(item => item.text.indexOf(value) > -1);
      setSearchResult(filters);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <Tag
      tags={tags}
      searchResult={searchResult}
      onSearch={handleSearch}
      onChange={value => {
        console.log(value);
      }}
    />
  );
};
```

### WithDefaults

```tsx
import React from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => (
  <Tag
    defaultTags={[
      {
        value: 10,
        text: 'Tag-1',
      },
      {
        value: 11,
        text: 'tag-2',
      },
    ]}
    tags={[
      {
        value: 1,
        text: 'Tag1',
      },
      {
        value: 2,
        text: 'tag2',
      },
      {
        value: 3,
        text: 'tag3',
      },
      {
        value: 4,
        text: 'tag4',
      },
    ]}
    radius={true}
    onChange={value => {
      console.log(value);
    }}
  />
);
```

### WithRadius

```tsx
import React from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => (
  <Tag
    tags={[
      {
        value: 1,
        text: 'Tag1',
      },
      {
        value: 2,
        text: 'tag2',
      },
      {
        value: 3,
        text: 'tag3',
      },
      {
        value: 4,
        text: 'tag4',
      },
    ]}
    radius={true}
    onChange={value => {
      console.log(value);
    }}
  />
);
```

### Readonly

```tsx
import React from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => (
  <Tag
    tags={[
      {
        value: 1,
        text: 'Tag1',
      },
      {
        value: 2,
        text: 'tag2',
      },
      {
        value: 3,
        text: 'tag3',
      },
      {
        value: 4,
        text: 'tag4',
      },
    ]}
    readonly={true}
  />
);
```

### OneTag

```tsx
import React from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => (
  <Tag
    tags={[
      {
        value: 1,
        text: 'Tag1',
      },
    ]}
    readonly={true}
  />
);
```

### Detailed usage

```tsx
import React, { useState } from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [searchedTopics, setSearchedTopics] = useState([]);
  const handleSearch = (value: string) => {
    // loading(true);
    // data = api.search(value);
    // mock search result
    const data = [
      {
        key: 1,
        value: 1,
        text: 'java',
      },
      {
        key: 2,
        value: 2,
        text: 'java framework',
      },
      {
        key: 3,
        value: 3,
        text: 'java test',
      },
    ];
    setSearchedTopics(data);

    // loading(false);
  };
  const handleChange = value => {
    const data = value.map(topic => ({
      value: topic.value,
      text: topic.text,
    }));
    setSelectedTopics(data);
  };

  return (
    <Tag
      newButtonText="New Tag"
      searchPlaceHolder="Input search text..."
      radius={true.toString()}
      tags={selectedTopics}
      searchResult={searchedTopics}
      onSearch={handleSearch}
      onChange={handleChange}
    />
  );
};
```
