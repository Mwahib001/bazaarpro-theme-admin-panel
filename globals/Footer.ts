import type { GlobalConfig } from 'payload';
import { FooterBlock } from '../src/blocks/FooterBlock';

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footer',
      type: 'blocks',
      blocks: [FooterBlock],
    },
  ],
};