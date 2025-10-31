import type { Block } from 'payload';
import  { StandardMenuDropDown } from './StandardMenuDropDown';

export const StandardMenuItemWithSub: Block = {
  slug: 'standard-menu-item-with-sub',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'items',
    //   type: 'array',
    //   fields: [
    //     {
    //       name: 'label',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'link',
    //       type: 'text',
    //       required: true,
    //     },
    //   ],
    // },
    {
        name: 'items',
        type: 'blocks',
        blocks: [StandardMenuDropDown],
    }    
  ],
};