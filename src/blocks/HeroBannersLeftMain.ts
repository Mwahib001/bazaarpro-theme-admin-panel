import type { Block } from 'payload';
import { fourTextLinesForBanners } from '../fields/fourTextLinesForBanners';
import { threeTextLinesForBanners } from '../fields/threeTextLinesForBanners';

export const HeroBannersLeftMain: Block = {
    slug: 'hero-banners-left-main',
    dbName: 'heroBannersLeftMain',
    fields: [
        {
            name: 'heroBannersMainLeft',
            type: 'array',
            required: true,
            fields: [
                ...fourTextLinesForBanners,
            ]
        },
        {
            name: 'heroBannersRightTopBottom',
            type: 'array',
            required: true,
            fields: [
                ...threeTextLinesForBanners,
            ]
        }
    ],
}