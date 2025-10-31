import type  { Block } from 'payload';
import { StandardMenuDropDown } from '../StandardMenuDropDown';
import { multiColMenuDropDown } from '../multiColMenuDropDown';
import { FullScreenMenuDropDown } from '../FullScreenMenuDropDown';

export const NavigationHeaderBar: Block = {
  slug: 'navigation-header-bar',
  fields: [
    {
      name: 'navigationMenu',
      type: 'blocks',
      required: false,
      blocks: [StandardMenuDropDown, multiColMenuDropDown, FullScreenMenuDropDown],
    },
  ],
};