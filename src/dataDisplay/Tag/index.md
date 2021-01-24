## Tag

### Default

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
    searchResult={[
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
    ]}
    onSearch={value => console.log(value)}
    onChange={value => {
      console.log(value);
    }}
  />
);
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
