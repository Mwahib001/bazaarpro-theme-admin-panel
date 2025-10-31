import type { Block } from 'payload';

import { threeTextLinesForBanners } from '../fields/threeTextLinesForBanners';

export const ThreeBannerEqualWidth: Block = {
  slug: 'three-banner-equal-width',
  labels: {
    singular: 'Three Banner Equal Width',
    plural: 'Three Banners Equal Width',
  },
  fields: [
    {
        name: 'banners',
        type: 'array',
        required: true,
        minRows: 3,
        maxRows: 3,
        fields: [
          ...threeTextLinesForBanners,
        ],
    }
  ],
};