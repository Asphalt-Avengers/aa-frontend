import { ClipboardList, LayoutGrid, Map, MapPin } from 'lucide-react';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@/components/custom/Typography/Typography';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { ROUTES } from '@/pages/routes';

interface SidebarItem {
  title: string;
  url: string;
  icon: React.FC;
}

const menu: SidebarItem[] = [
  {
    title: 'Overview',
    url: ROUTES.OVERVIEW,
    icon: LayoutGrid,
  },
  {
    title: 'Map',
    url: ROUTES.MAP,
    icon: Map,
  },
  {
    title: 'Reports',
    url: ROUTES.REPORTS,
    icon: ClipboardList,
  },
];

// Helper function to render menu items
const renderSidebarMenuItems = (
  items: SidebarItem[],
  navigate: (url: string) => void
) => {
  return items.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <div onClick={() => navigate(item.url)}>
          <item.icon />
          <Typography variant="l2">{item.title}</Typography>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
};

export const Navrail: FC = () => {
  const { state } = useSidebar();
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex-row-reverse justify-between">
          <SidebarTrigger />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => navigate(ROUTES.OVERVIEW)}
            className={state === 'expanded' ? '' : 'hidden'}
          >
            <MapPin size={16} />
          </Button>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarMenu>{renderSidebarMenuItems(menu, navigate)}</SidebarMenu>
        </SidebarContent>

        <SidebarSeparator />
      </Sidebar>
    </div>
  );
};
