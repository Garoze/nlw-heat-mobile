import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

type User = {
  name: string;
  avatar_url: string;
};

export type MessageProps = {
  id: string;
  message: string;
  user: User;
};

type Props = {
  data: MessageProps;
};

export const Message = ({ data }: Props) => {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>{data.message}</Text>
      <View style={styles.footer}>
        <UserPhoto imageUri={data.user.avatar_url} sizes="SMALL" />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
};
