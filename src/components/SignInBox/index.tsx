import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks/AuthHook';

import { Button } from '../Button';

import { COLORS } from '../../theme';
import { styles } from './styles';

export const SignInBox = () => {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        icon="github"
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
};
