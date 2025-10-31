import type { Block } from 'payload';

export const StandardMenuDropDown: Block = {
  slug: 'standard-menu-dropdown',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'linkType',
      type: 'radio',
      options: [
        { label: 'Manual Items', value: 'manual' },
        { label: 'From Category', value: 'category' },
      ],
      defaultValue: 'manual',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'items',
      type: 'array',
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'manual',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'categoryRef',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'category',
      },
    },
  ],
};
