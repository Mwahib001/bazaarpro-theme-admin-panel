import type { Block } from 'payload'
import { StandardMenuDropDown } from './StandardMenuDropDown'

export const FullScreenMenuDropDown: Block = {
  slug: 'full-screen-menu-drop-down',
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
      name: 'subItems',
      type: 'blocks',
      blocks: [StandardMenuDropDown],
    },
  ],
}
