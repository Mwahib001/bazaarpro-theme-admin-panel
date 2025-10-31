import { CollectionConfig } from 'payload';

export const Icons: CollectionConfig = {
  slug: 'icons',
  labels: {
    singular: 'Icon',
    plural: 'Icons',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'iconImage',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
  ],
};
