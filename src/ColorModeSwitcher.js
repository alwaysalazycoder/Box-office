import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Switch } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
 

  return (
    <IconButton
     id='icon-button-mode'
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      animation={"ease-out"}
      variant="solid"
      color="current"
      marginLeft="2"
      pos={"fixed"}
      top={"4"}
      zIndex={"overlay"}
      borderRadius={"full"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
