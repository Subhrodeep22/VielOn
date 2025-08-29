import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface BlackBannerWithImageProps {
  text: string;
  image: any;
}

export default function BlackBannerWithImage({ text, image }: BlackBannerWithImageProps) {
  return (
    <View style={styles.banner}>
      <View style={styles.contentContainer}>
        <Text style={styles.bannerText}>{text}</Text>
        <Image 
          source={image} 
          style={styles.bannerImage} 
          contentFit="contain"
        />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerImage: {
    width: Math.max(24, screenWidth * 0.06),
    height: Math.max(24, screenWidth * 0.06),
    tintColor: '#FFFFFF',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '400',
  },
});
