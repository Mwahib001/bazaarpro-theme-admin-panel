import type { Block } from 'payload';

export const titleAndLinkList: Block = {
  slug: 'titleAndLinkList',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'links',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: false,
        },
        {
          name: 'url',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
};
