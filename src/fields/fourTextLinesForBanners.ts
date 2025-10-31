import type { Field } from 'payload'

export const fourTextLinesForBanners: Field[] = [
  {
    name: 'image',
    type: 'relationship',
    relationTo: 'media',
  },

  // Line 1 Group
  {
    type: 'group',
    name: 'line1Group',
    label: 'Line 1',
    fields: [
      {
        name: 'text',
        type: 'text',
        required: false,
      },
      {
        name: 'color',
        type: 'text',
        required: false,
        admin: {
          placeholder: '#000000 or red',
        },
      },
    ],
  },

  // Line 2 Group
  {
    type: 'group',
    name: 'line2Group',
    label: 'Line 2',
    fields: [
      {
        name: 'text',
        type: 'text',
        required: false,
      },
      {
        name: 'color',
        type: 'text',
        required: false,
        admin: {
          placeholder: '#000000 or blue',
        },
      },
    ],
  },

  // Line 3 Group
  {
    type: 'group',
    name: 'line3Group',
    label: 'Line 3',
    fields: [
      {
        name: 'text',
        type: 'text',
        required: false,
      },
      {
        name: 'color',
        type: 'text',
        required: false,
      },
    ],
  },

  // Line 4 Group
  {
    type: 'group',
    name: 'line4Group',
    label: 'Line 4',
    fields: [
      {
        name: 'text',
        type: 'text',
        required: false,
      },
      {
        name: 'color',
        type: 'text',
        required: false,
      },
    ],
  },

  // Button Fields
  {
    name: 'button',
    type: 'group',
    fields: [
      {
        name: 'text',
        type: 'text',
        required: false,
      },
      {
        name: 'color',
        type: 'text',
        required: false,
      },
    ],
  },
  {
    name: 'buttonLink',
    type: 'text',
    required: false,
  },
]
