## Input

### Default

```tsx
import React from 'react';
import { Input } from 'zvvn-mod-ui';

export default () => (
  <Input placeholder="Basic usage..." onChange={value => console.log(value)} />
);
```

### Addon

```tsx
import React from 'react';
import { Input } from 'zvvn-mod-ui';

export default () => (
  <Input
    addonBefore="http://"
    addonAfter=".com"
    defaultValue="mysite"
    onChange={value => console.log(value)}
  />
);
```
