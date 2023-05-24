import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { AddPassword as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { PasswordList as UserIcon } from '../icons/user-add';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { UserCircle as userCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import { Appointment } from '../icons/Appointment';
import { ChartBar } from '../icons/chart-bar';
import Image from 'next/image';
import LogoPassGenie from '../images/Passion_One_Black__1_-removebg-preview.png'

const items = [

 

  {
    href: '/PasswordsList',
    icon: (<UserIcon fontSize="small" />),
    title: 'Your Passwords'
  },
    {
    href: '/AddPassword',
    icon: (<UserIcon fontSize="small" />),
    title: 'Add new Password'
  },
  
  {
    href: '/',
    icon: (<UserIcon fontSize="small" />),
    title: 'Logout'
  },







];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
              <Image
        src={LogoPassGenie}
        alt="Logo"
        width={200}
        height={150}
      />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>

            <text style={{ color: "#fff", fontSize: "30px", fontWeight: "bold" }}>Pass Genie</text>


          </Box>
        </div>
       

        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>

      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {

            backgroundImage: 'linear-gradient(to right, #0000b3,  #cc00ff)',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
