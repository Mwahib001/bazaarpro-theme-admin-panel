import type { Block } from 'payload';

export const ProductListWithCatList: Block = {
  slug: 'product-list-with-cat-list',
    labels: {
        singular: 'Product List with Category List',
        plural: 'Product Lists with Category Lists',
    },
    fields: [
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
        },
        {
            name: 'products',
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
        },
    ]
}