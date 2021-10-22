import React from 'react';
import { Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import avatarImg from '../../assets/avatar.png';

import { styles } from './styles';
import { COLORS } from '../../theme';

const SIZES = {
  SMALL: {
    avatarSize: 28,
    containerSize: 32,
  },
  NORMAL: {
    avatarSize: 42,
    containerSize: 48,
  },
};

type UserPhotoProps = {
  imageUri: string | undefined;
  sizes?: 'SMALL' | 'NORMAL';
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export const UserPhoto = ({ imageUri, sizes = 'NORMAL' }: UserPhotoProps) => {
  const { avatarSize, containerSize } = SIZES[sizes];

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
};
