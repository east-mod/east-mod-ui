## Tag

### Default

```tsx
import React from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => (
  <Tag
    tags={['tag1', 'tag2', 'tag3']}
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
    defaultTags={['tag-1', 'tag-2']}
    tags={['tag1', 'tag2', 'tag3']}
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
    tags={['tag1', 'tag2', 'tag3']}
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

export default () => <Tag tags={['tag1', 'tag2', 'tag3']} readonly={true} />;
```

### OneTag

```tsx
import React from 'react';
import { Tag } from 'zvvn-mod-ui';

export default () => <Tag tags={['tag1']} readonly={true} />;
```
