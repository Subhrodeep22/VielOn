import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface BlackBannerProps {
  header: string;
  subtitle: string;
  icon: any;
  onPress?: () => void;
}

export default function BlackBanner({ header, subtitle, icon, onPress }: BlackBannerProps) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.banner,
        pressed && styles.bannerPressed
      ]} 
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image 
        source={icon} 
        style={styles.icon} 
        contentFit="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 16,
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.01,
    marginBottom: screenHeight * 0.02,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bannerPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  icon: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  header: {
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: screenHeight * 0.005,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#CCCCCC',
    fontWeight: '400',
    textAlign: 'left',
  },
});
