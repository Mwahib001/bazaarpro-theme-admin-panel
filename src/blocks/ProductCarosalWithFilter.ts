import type { Block } from 'payload';

export const ProductCarosalWithFilter: Block = {
    slug: 'product-carousal-with-filter',
    labels: {
        singular: 'Product Carousal with Filter',
        plural: 'Product Carousals with Filters',
    },
    fields: [
        {
        name: 'title',
        type: 'text',
        required: true,
        label: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            required: false,
        },
        {
        name: 'products',
        type: 'relationship',
        relationTo: 'products',
        hasMany: true,
        required: true,
        label: 'Products',
        },
        {
            name: 'buttonsArray',
            type: 'array',
            fields: [
                {
                    name: 'buttonText',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'buttonLink',
                    type: 'text',
                    required: true,
                },
            ],
        }
    ],
}