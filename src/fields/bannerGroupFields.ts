import type { Field } from 'payload';
// import {richTextWithColors} from './richTextWithColors';

export const bannerCommonFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
//   richTextWithColors({
//     name: 'heading',
//     label: 'Heading',
//     required: true,
//   }),
{
    name: 'heading',
    type: 'richText',
    required: true,
},
  {
    name: 'description',
    type: 'textarea',
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
];
