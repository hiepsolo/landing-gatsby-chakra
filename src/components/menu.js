import './menu.css';

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  Text
} from '@chakra-ui/react';

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Div100vh from 'react-div-100vh';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const MenuItem = ({ link, onClose, title }) => {
  return (
    <AnchorLink to={link} onAnchorLinkClick={onClose}>
      <HStack className="menu-item">
        <Text textStyle={'20-medium'}>{title}</Text>
        <StaticImage
          src="../images/next.png"
          alt="next icon"
          placeholder="blurred"
          layout="fixed"
        />
      </HStack>
    </AnchorLink>
  );
};

const Menu = ({ bookDemo, isOpen, onClose }) => {
  return (
    <>
      <Drawer
        id="menu-drawer"
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        variant={'menu'}
      >
        <Div100vh>
          <DrawerOverlay onClick={onClose} />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Heading size="lg">My Brand</Heading>
            </DrawerHeader>

            <DrawerBody mt={10}>
              <MenuItem link="/#why-us" onClose={onClose} title="Why us?" />
              <MenuItem link="/#features" onClose={onClose} title="Features" />
              <MenuItem
                link="/#how-it-works"
                onClose={onClose}
                title="How it works"
              />
              <Button
                onClick={() => {
                  onClose();
                  bookDemo();
                }}
                mt={4}
                size="md"
                variant={'light-blue'}
                isFullWidth
              >
                Book Demo
              </Button>
            </DrawerBody>

            <DrawerFooter display={'flex'} flexDirection={'column'}>
              <Divider borderColor="my-custom.deep" />
              <HStack mt={6} width={'100%'} justifyContent={'space-between'}>
                <HStack justifyContent={'flex-end'} spacing={2}>
                  <StaticImage
                    placeholder="blurred"
                    alt="copyright"
                    src="../images/copyright.png"
                    sizes={'icon-12'}
                  />
                  <Text color="my-custom.text-85" textStyle="10-regular">
                    2023 My Brand limited, All Rights Reserved
                  </Text>
                </HStack>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Div100vh>
      </Drawer>
    </>
  );
};

export default Menu;
