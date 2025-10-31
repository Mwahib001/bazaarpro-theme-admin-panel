import { CollectionConfig } from 'payload'; 

export const Products: CollectionConfig = {
    slug: 'products',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: false,
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'reviews',
            type: 'array',
            fields: [
                {
                    name: 'rating',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'comment',
                    type: 'textarea',
                    required: true,
                },
            ],
        },
    ],
};