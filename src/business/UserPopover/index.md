## User Popover

### Default

```tsx
import React from 'react';
import { PlusOutlined, CommentOutlined } from '@ant-design/icons';
import { UserPopover, Button } from 'zvvn-mod-ui';

export default () => (
  <UserPopover
    avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    name="听见美丽魔法师"
    intro="美丽心愿师"
    answers={10}
    articles={99}
    followers="999+"
    actions={
      <React.Fragment>
        <Button type="primary" icon={<PlusOutlined />}>
          关注他
        </Button>
        <Button type="default" icon={<CommentOutlined />}>
          私信他
        </Button>
      </React.Fragment>
    }
  >
    hover me
  </UserPopover>
);
```

### WithLink

```tsx
import React from 'react';
import { UserPopover } from 'zvvn-mod-ui';

export default () => (
  <UserPopover
    avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    name="听见美丽魔法师"
    intro="美丽心愿师"
    answers={10}
    articles={99}
    followers="999+"
    userLink="http://www.baidu.com"
    answerLink="http://www.baidu.com"
    articleLink="http://www.baidu.com"
    followerLink="http://www.baidu.com"
  >
    hover me
  </UserPopover>
);
```

### NoActions

```tsx
import React from 'react';
import { UserPopover } from 'zvvn-mod-ui';

export default () => (
  <UserPopover
    name="听见美丽魔法师"
    intro="美丽心愿师"
    answers={10}
    articles={99}
    followers="999+"
  >
    hover me
  </UserPopover>
);
```
