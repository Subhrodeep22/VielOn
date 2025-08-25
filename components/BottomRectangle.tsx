import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

interface BottomRectangleProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

export default function BottomRectangle({
  width: rectWidth = 134,
  height: rectHeight = 5,
  borderRadius = 4,
  backgroundColor = '#000000'
}: BottomRectangleProps) {
  return (
    <View
      style={[
        styles.rectangle,
        {
          width: rectWidth,
          height: rectHeight,
          borderRadius,
          backgroundColor,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  rectangle: {
    position: 'absolute',
    bottom: 35, // Fixed positioning from bottom instead of calculated top
    alignSelf: 'center',
  },
});
