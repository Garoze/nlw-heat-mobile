import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/AuthHook';
import { UserPhoto } from '../UserPhoto';

import LogoSVG from '../../assets/logo.svg';

import { styles } from './styles';

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.logoutButton}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
};
