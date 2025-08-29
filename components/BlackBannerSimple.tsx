import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface BlackBannerSimpleProps {
  mainText: string;
  subtitle: string;
}

export default function BlackBannerSimple({ mainText, subtitle }: BlackBannerSimpleProps) {
  return (
    <View style={styles.banner}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000000',
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.01,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  mainText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
    marginBottom: screenHeight * 0.01,
  },
  subtitleText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '400',
  },
});
