import type { Block } from 'payload';
import { threeTextLinesForBanners } from '../fields/threeTextLinesForBanners';

export const SpecialOfferBannerAnimatedFull: Block = {
  slug: 'special-offer-banner-animated-full',
  labels: {
    singular: 'Special Offer Banner Animated Full',
    plural: 'Special Offer Banners Animated Full',
  },
  fields: [
    ...threeTextLinesForBanners,
  ],
};