import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CustomBanner3Props {
  icon: any;
  title: string;
  actionText: string;
  secondSubtitle: string; // Second subtitle below the first
  rightImage: any; // Right side image
  showCheckmark?: boolean; // Show green checkmark next to title
  onPress?: () => void;
}

export default function CustomBanner3({ 
  icon, 
  title, 
  actionText, 
  secondSubtitle, 
  rightImage,
  showCheckmark = false,
  onPress 
}: CustomBanner3Props) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.banner,
        pressed && styles.bannerPressed
      ]} 
      onPress={onPress}
      android_ripple={{ color: 'rgba(255, 255, 255, 0.1)' }}
    >
      <View style={styles.iconContainer}>
        <Image 
          source={icon} 
          style={styles.bannerIcon} 
          contentFit="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.bannerTitle}>{title}</Text>
          {showCheckmark && (
            <View style={styles.checkmarkContainer}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          )}
        </View>
        <Text style={styles.bannerAction}>{actionText}</Text>
        <Text style={styles.secondSubtitle}>{secondSubtitle}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightIconContainer}>
          <Image 
            source={rightImage} 
            style={styles.rightIcon} 
            contentFit="contain"
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000000',
    marginHorizontal: screenWidth * 0.012,
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.008,
    paddingBottom: screenHeight * 0.001,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: screenHeight * 0.01,
  },
  bannerPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: Math.max(56, screenWidth * 0.14),
    height: Math.max(56, screenWidth * 0.14),
    borderRadius: Math.max(20, screenWidth * 0.05),
    backgroundColor: '#D9D9D952',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screenWidth * 0.04,
  },
  bannerIcon: {
    width: Math.max(30, screenWidth * 0.075),
    height: Math.max(30, screenWidth * 0.075),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: screenHeight * 0.001,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    marginRight: screenWidth * 0.02,
  },
  checkmarkContainer: {
    width: Math.max(16, screenWidth * 0.04),
    height: Math.max(16, screenWidth * 0.04),
    borderRadius: Math.max(8, screenWidth * 0.02),
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: Math.max(10, screenWidth * 0.025),
    fontWeight: 'bold',
  },
  bannerAction: {
    color: '#666666',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    marginBottom: screenHeight * 0.001,
  },
  secondSubtitle: {
    color: '#666666',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  rightContainer: {
    alignItems: 'flex-end',
    marginLeft: screenWidth * 0.02,
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
