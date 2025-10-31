import type { Block } from 'payload';

import { titleAndLinkList } from './titleAndLinkList';

export const FooterBlock: Block = {
  slug: 'footer',
  fields: [
    {
      name: 'description',
      type: 'text',
      required: false,
    },
    {
        name: 'titleAndLinkList',
        type: 'blocks',
        blocks: [titleAndLinkList],
    },
    {
        name: 'address',
        type: 'text',
        required: false,
    },
    {
        name: 'phone',
        type: 'text',
        required: false,
    },
    {
        name: 'email',
        type: 'text',
        required: false,
    }
  ],
};
