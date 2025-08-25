import { Image } from 'expo-image';
import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CustomBannerProps {
  icon: any; // SVG asset
  title: string;
  actionText: string;
  onActionPress?: () => void;
}

export default function CustomBanner({ 
  icon, 
  title, 
  actionText, 
  onActionPress 
}: CustomBannerProps) {
  return (
    <Pressable style={styles.banner} onPress={onActionPress}>
      <View style={styles.bannerContent}>
        <View style={styles.iconContainer}>
          <Image
            source={icon}
            style={styles.bannerIcon}
            contentFit="contain"
          />
        </View>
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>{title}</Text>
          <Text style={styles.bannerAction}>{actionText}</Text>
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
    paddingVertical: screenHeight * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: screenHeight * 0.03,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: Math.max(56, screenWidth * 0.14),
    height: Math.max(56, screenWidth * 0.14),
    borderRadius: Math.max(28, screenWidth * 0.07),
    backgroundColor: '#D9D9D952',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screenWidth * 0.04,
  },
  bannerIcon: {
    width: Math.max(30, screenWidth * 0.075),
    height: Math.max(30, screenWidth * 0.075),
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    marginBottom: screenHeight * 0.005,
  },
  bannerAction: {
    color: '#666666',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
});
