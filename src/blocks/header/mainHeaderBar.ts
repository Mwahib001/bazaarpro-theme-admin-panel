import type { Block } from 'payload';

export const mainHeaderBar: Block = {
  slug: 'mainHeaderBar',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
    },
  ],
};
