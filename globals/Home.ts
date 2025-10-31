import type { GlobalConfig } from 'payload'
import { CategoriesGrid } from '../src/blocks/CategoriesGrid'
import { DealsOfTheDay } from '../src/blocks/DealsOfTheDay'
import { OfferBannerFullWidth } from '../src/blocks/OfferBannerFullWidth'
import { TwoBannerHalfWidth } from '../src/blocks/TwoBannerHalfWidth'
import { ThreeBannerEqualWidth } from '../src/blocks/ThreeBannerEqualWidth'
import { ProductListWithCatList } from '../src/blocks/ProductListWithCatList'
import { HeroBannersLeftMain } from '../src/blocks/HeroBannersLeftMain'
import { FeaturesContRectangle } from '@/blocks/FeaturesContRectangle'
import { BrandsBarCont } from '@/blocks/BrandsBarCont'
import { ProductCarosalWithFilter } from '@/blocks/ProductCarosalWithFilter'
import { SpecialOfferBannerAnimatedFull } from '@/blocks/SpecialOfferBannerAnimatedFull'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Homepage',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroLayout',
              type: 'blocks',
              blocks: [HeroBannersLeftMain],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'contentLayout',
              type: 'blocks',
              blocks: [
                FeaturesContRectangle,
                CategoriesGrid,
                DealsOfTheDay,
                OfferBannerFullWidth,
                TwoBannerHalfWidth,
                ThreeBannerEqualWidth,
                ProductListWithCatList,
                BrandsBarCont,
                ProductCarosalWithFilter,
                SpecialOfferBannerAnimatedFull,
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta Title',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description',
            },
            {
              name: 'metaKeywords',
              type: 'text',
              label: 'Meta Keywords',
            },
          ],
        },
      ],
    },
  ],
}
