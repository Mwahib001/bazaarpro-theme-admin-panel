import type { Field } from 'payload';

export const threeTextLinesForBanners: Field[] = [
  {
    name: 'image',
    type: 'relationship',
    relationTo: 'media',
  },

  // Line 1 + Color
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
        type: 'text', // or select for color options
        required: false,
        admin: {
          placeholder: '#000000 or red',
        },
      },
    ],
  },

  // Line 2 + Color
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
          placeholder: '#ffffff or blue',
        },
      },
    ],
  },

  // Line 3 + Color
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

  // Button fields
  {
    name: 'button',
    type: 'group',
    required: false,
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
];
