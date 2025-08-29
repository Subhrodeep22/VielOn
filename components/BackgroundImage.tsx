import { Image } from 'expo-image';
import React from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

interface BackgroundImageProps {
  height?: DimensionValue;
}

export default function BackgroundImage({ height = '100%' }: BackgroundImageProps) {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Image
        source={require('../assets/images/Group 1334.svg')}
        style={[styles.backgroundImage, { height }]}
        contentFit="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: -50,
    right: -50,
    bottom: 0,
    zIndex: -100,
  },
});
