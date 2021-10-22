import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { UserPhoto } from '../UserPhoto';

import LogoSVG from '../../assets/logo.svg';

import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/garoze.png" />
      </View>
    </View>
  );
};
