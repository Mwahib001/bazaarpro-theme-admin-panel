import type { Block } from 'payload'

export const FeaturesContRectangle: Block = {
  slug: 'featuresContRectangle',
  labels: {
    singular: 'Features Content Rectangle',
    plural: 'Features Content Rectangles',
  },
  fields: [
    {
      name: 'servicesList',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Truck',
              value: 'Truck',
            },
            {
              label: 'Payment',
              value: 'Payment',
            },
            {
              label: 'AlarmClock',
              value: 'AlarmClock',
            },
            {
              label: 'MoneyGuarantee',
              value: 'MoneyGuarantee',
            },
          ],
        },
      ],
    },
  ],
}
