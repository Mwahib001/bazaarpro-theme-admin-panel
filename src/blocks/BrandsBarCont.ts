import type { Block } from 'payload';

export const BrandsBarCont: Block = {
  slug: 'brands-bar-cont',
  labels: {
    singular: 'Brands Bar',
    plural: 'Brands Bar',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
        name: 'brandsLogos',
        type: 'relationship',
        relationTo: 'media',
        required: true,
        hasMany: true,
      },
    ],
};

export default BrandsBarCont;
