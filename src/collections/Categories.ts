import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'subCategories',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'parent',
      label: 'Parent Category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
      hasMany: true, // self-reference
    },
  ],
}
