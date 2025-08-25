import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CustomBanner2Props {
  icon: any;
  title: string;
  actionText: string;
  amount: string;
  onPress?: () => void;
}

export default function CustomBanner2({ icon, title, actionText, amount, onPress }: CustomBanner2Props) {
  return (
    <Pressable style={styles.banner} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image 
          source={icon} 
          style={styles.bannerIcon} 
          contentFit="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bannerTitle}>{title}</Text>
        <Text style={styles.bannerAction}>{actionText}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: screenWidth * 0.03,
    paddingVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: screenWidth * 0.14,
    height: screenWidth * 0.14,
    borderRadius: screenWidth * 0.03,
    backgroundColor: '#666666',
    marginRight: screenWidth * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerIcon: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
  },
  textContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: screenHeight * 0.005,
  },
  bannerAction: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#666666',
    fontWeight: '400',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: Math.max(18, screenWidth * 0.045),
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
