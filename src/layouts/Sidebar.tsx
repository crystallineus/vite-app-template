import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Logo } from '../components/Logo';

type SidebarProps = {
  width?: number;
};

const data = [
  {
    title: 'Home',
    path: '/home',
    icon: <HomeIcon />,
  },
  {
    title: 'Products',
    path: '/products',
    icon: <InventoryIcon />,
  },
];

export function Sidebar({ width }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <SwipeableDrawer
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        variant="permanent"
      >
        <Box width={width}>
          <Logo />
          <Box>
            {data.map((item) => {
              return (
                <ListItem disableGutters disablePadding key="Home">
                  <ListItemButton
                    disableGutters
                    component={Link}
                    to={item.path}
                    sx={{
                      pl: 2,
                      py: 1,
                      gap: 2,
                      pr: 1.5,
                      typography: 'body2',
                      fontWeight: 'fontWeightMedium',
                    }}
                  >
                    <Box component="span" sx={{ width: 24, height: 24 }}>
                      {item.icon}
                    </Box>
                    <Box component="span" flexGrow={1}>
                      {item.title}
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
