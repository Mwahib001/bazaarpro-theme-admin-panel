import type { GlobalConfig } from 'payload';
import { Topbar } from '../src/blocks/header/Topbar';
import { NavigationHeaderBar } from '../src/blocks/header/NavigationHeaderBar';

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'header',
        type: 'blocks',
        blocks: [
            Topbar,
            NavigationHeaderBar,
        ],
    }
  ]
};
