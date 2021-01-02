## Empty

### Default

```tsx
import React from 'react';
import { Empty } from 'zvvn-mod-ui';

export default () => <Empty />;
```

### Simple

```tsx
import React from 'react';
import { Empty } from 'zvvn-mod-ui';

export default () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
```

### Customize

```tsx
import React from 'react';
import { Empty, Button } from 'zvvn-mod-ui';

export default () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    description={
      <span style={{ display: 'inline-block', margin: '0 10px' }}>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);
```
