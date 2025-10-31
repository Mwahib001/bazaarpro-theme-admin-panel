import type { Block } from 'payload';

export const Topbar: Block = {
  slug: 'topbar',
  labels: {
    singular: 'Topbar',
    plural: 'Topbars',
  },
  fields: [
    {
      name: 'badge',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'bgColor',
          type: 'text',
          required: false,
        },
        {
          name: 'textColor',
          type: 'text',
          required: false,
        },
      ],
      required: true,
    },
    {
        name: 'description',
        type: 'group',
        fields: [
          {
            name: 'text',
            type: 'text',
            required: true,
          },
          {
            name: 'textColor',
            type: 'text',
            required: false,
          },
        ],
        required: true,
    },
    {
      name: 'bgColor',
      type: 'text',
      required: false,
    }
  ],
};
