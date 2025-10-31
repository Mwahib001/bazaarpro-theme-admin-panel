import type { Block } from 'payload';

import { threeTextLinesForBanners } from '../fields/threeTextLinesForBanners';

export const TwoBannerHalfWidth: Block = {
    slug: 'two-banner-half-width',
    labels: {
        singular: 'Two Banner Half Width',
        plural: 'Two Banners Half Width',
    },
    fields: [
        {
            name: 'banners',
            type: 'array',
            required: true,
            minRows: 2,
            maxRows: 2,
            fields: [
                ...threeTextLinesForBanners,
            ],
        },
    ]
};

export default TwoBannerHalfWidth;
