import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface BlackBannerTwoTextsProps {
  firstText: string;
  secondText: string;
}

export default function BlackBannerTwoTexts({ firstText, secondText }: BlackBannerTwoTextsProps) {
  return (
    <View style={styles.banner}>
      <View style={styles.contentContainer}>
        <Text style={styles.firstText}>{firstText}</Text>
        <Text style={styles.secondText}>{secondText}</Text>
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
  contentContainer: {
    alignItems: 'flex-start',
  },
  firstText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '400',
    marginBottom: screenHeight * 0.01,
    opacity: 0.8,
  },
  secondText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '400',
    opacity: 0.8,
  },
});

