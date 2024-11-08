import { Flag, LayoutGrid, LogOut, MapPin, Settings2 } from 'lucide-react';
import React, { FC } from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { ROUTES } from '@/pages/routes';

import styles from './Navrail.module.scss';

const menu = [
  {
    title: 'Home',
    url: ROUTES.HOME,
    icon: LayoutGrid,
  },
  {
    title: 'Reports',
    url: ROUTES.REPORTS,
    icon: Flag,
  },
];

const footer = [
  {
    title: 'Settings',
    url: ROUTES.SETTINGS,
    icon: Settings2,
  },
  {
    title: 'Log Out',
    url: ROUTES.LOGIN,
    icon: LogOut,
  },
];

// Helper function to render menu items
const renderSidebarMenuItems = (
  items: { title: string; url: string; icon: React.FC }[]
) => {
  return items.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <a href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
};

export const Navrail: FC = () => {
  const { state } = useSidebar();

  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarHeader className={`${styles.Header}`}>
          {state === 'expanded' && (
            <SidebarMenuButton className={`${styles.MapPin}`}>
              <MapPin />
            </SidebarMenuButton>
          )}

          <SidebarTrigger />
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent className={`${styles.Menu}`}>
          <SidebarMenu>{renderSidebarMenuItems(menu)}</SidebarMenu>
        </SidebarContent>

        <SidebarSeparator />

        <SidebarFooter className={`${styles.Footer}`}>
          <SidebarMenu>{renderSidebarMenuItems(footer)}</SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
