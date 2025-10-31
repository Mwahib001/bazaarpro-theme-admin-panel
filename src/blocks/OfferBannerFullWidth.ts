import type {Block} from 'payload';

import { threeTextLinesForBanners } from '../fields/threeTextLinesForBanners';

export const OfferBannerFullWidth: Block = {
  slug: 'offer-banner-full-width',
  labels: {
    singular: 'Offer Banner Full Width',
    plural: 'Offer Banners Full Width',
  },
  fields: [
    ...threeTextLinesForBanners,
  ],
};