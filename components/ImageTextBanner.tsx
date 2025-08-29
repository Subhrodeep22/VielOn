import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface ImageTextBannerProps {
  image: any; // Image asset
  text: string; // Long text that will wrap
  onPress?: () => void; // Optional onPress handler
}

export default function ImageTextBanner({ 
  image, 
  text, 
  onPress 
}: ImageTextBannerProps) {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerContent}>
        {/* Left side: Image */}
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.bannerImage}
            contentFit="contain"
          />
        </View>
        
        {/* Right side: Text */}
        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>{text}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000000',
    borderRadius: Math.max(16, screenWidth * 0.04),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.015,
    marginBottom: screenHeight * 0.02,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align to top for better text wrapping
  },
  imageContainer: {
    width: Math.max(40, screenWidth * 0.1),
    height: Math.max(40, screenWidth * 0.1),
    marginRight: screenWidth * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: Math.max(24, screenWidth * 0.06),
    height: Math.max(24, screenWidth * 0.06),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '400',
    lineHeight: Math.max(20, screenWidth * 0.05),
    textAlign: 'left',
    flexWrap: 'wrap',
  },
});

