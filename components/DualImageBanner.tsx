import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface DualImageBannerProps {
  leftIcon: any; // SVG asset for left side (beside header)
  rightIcon: any; // SVG asset for right side (original position)
  header: string;
  subtitle: string;
  onPress?: () => void; // Optional onPress handler
}

export default function DualImageBanner({ 
  leftIcon, 
  rightIcon, 
  header, 
  subtitle,
  onPress 
}: DualImageBannerProps) {
  const BannerComponent = onPress ? TouchableOpacity : View;
  
  return (
    <BannerComponent style={styles.banner} onPress={onPress}>
      <View style={styles.bannerContent}>
        {/* Left side: Header + Subtitle + Small Icon */}
        <View style={styles.leftContent}>
          <View style={styles.textContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.bannerHeader}>{header}</Text>
              <Image
                source={leftIcon}
                style={styles.inlineIcon}
                contentFit="contain"
              />
            </View>
            <Text style={styles.bannerSubtitle}>{subtitle}</Text>
          </View>
        </View>
        
        {/* Right side: Icon */}
        <View style={styles.rightIconContainer}>
          <Image
            source={rightIcon}
            style={styles.rightIcon}
            contentFit="contain"
          />
        </View>
      </View>
    </BannerComponent>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000000',
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.01,
    marginBottom: 0,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: screenHeight * 0.005,
  },
  bannerHeader: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    marginRight: screenWidth * 0.02,
  },
  inlineIcon: {
    width: Math.max(16, screenWidth * 0.04),
    height: Math.max(16, screenWidth * 0.04),
  },
  bannerSubtitle: {
    color: '#666666',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  rightIconContainer: {
    width: Math.max(40, screenWidth * 0.1),
    height: Math.max(40, screenWidth * 0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    width: Math.max(20, screenWidth * 0.05),
    height: Math.max(20, screenWidth * 0.05),
  },
});
