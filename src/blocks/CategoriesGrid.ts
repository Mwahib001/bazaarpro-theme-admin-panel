import type { Block } from 'payload';
import { SpecialOfferBannerAnimatedFull } from './SpecialOfferBannerAnimatedFull';

export const CategoriesGrid: Block = {
  slug: "categoryGrid", // important: this is used in layout array as blockType
  labels: {
    singular: "Category Grid",
    plural: "Category Grids"
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Section Title",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories", // this must match your collection slug
      hasMany: true,
      required: true,
      label: "Categories to Display",
    },
    {
      name: "SpecialOfferBanner",
      type: "blocks",
      blocks: [SpecialOfferBannerAnimatedFull],
    }
  ],
};
