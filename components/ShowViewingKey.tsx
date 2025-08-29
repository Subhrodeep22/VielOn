import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';
import HeaderIcons from './HeaderIcons';
import ImageTextBanner from './ImageTextBanner';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface ShowViewingKeyProps {
  onBack: () => void;
  viewingKey: string;
}

export default function ShowViewingKey({ onBack, viewingKey }: ShowViewingKeyProps) {
  const insets = useSafeAreaInsets();
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  
  // Generate a random viewing key (0zk format)
  const randomViewingKey = "0zk" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack]);

  const toggleKeyVisibility = () => {
    setIsKeyVisible(!isKeyVisible);
  };

  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(randomViewingKey);
      // You could add a toast notification here if needed
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <Animated.View 
      style={styles.showViewingKey}
      pointerEvents="box-none"
    >
      <BackgroundImage />
      <SafeAreaView style={styles.showViewingKeyContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sharable Viewing Key</Text>
          <HeaderIcons />
        </View>
        
        {/* Info Banner */}
        <View style={styles.bannerContainer}>
          <ImageTextBanner
            image={require('../assets/images/Info.svg')}
            text="This private viewing key can be used to access your entire transaction history for this 0zk address, across all blockchains. Be careful: once shared, access cannot be revoked."
          />
        </View>
        
        {/* Viewing Key Section */}
        <View style={styles.keyContainer}>
          <View style={styles.keyDisplayContainer}>
            <Text style={styles.keyText}>
              {isKeyVisible ? randomViewingKey : '*'.repeat(40)}
            </Text>
            <Text style={styles.keyText}>
              {isKeyVisible ? '' : '*'.repeat(40)}
            </Text>
            <Text style={styles.keyText}>
              {isKeyVisible ? '' : '*'.repeat(40)}
            </Text>
            <Text style={styles.keyText}>
              {isKeyVisible ? '' : '*'.repeat(40)}
            </Text>
            <Text style={styles.keyText}>
              {isKeyVisible ? '' : '*'.repeat(40)}
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.toggleButton} 
            onPress={toggleKeyVisibility}
          >
            <Text style={styles.toggleText}>
              {isKeyVisible ? 'Click to Hide' : 'Click to Show'}
            </Text>
          </TouchableOpacity>
          
          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={handleCopy}>
              <Text style={styles.actionButtonText}>Copy</Text>
              <Image 
                source={require('../assets/images/copy-white.svg')}
                style={styles.buttonIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Learn More</Text>
              <Image 
                source={require('../assets/images/arrow-narrow-right-top.svg')}
                style={styles.buttonIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  showViewingKey: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  showViewingKeyContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.03,
    paddingTop: 0,
    paddingBottom: 0,
  },
  headerTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  bannerContainer: {
    paddingTop: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.04,
  },
  keyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: screenHeight * 0.02,
  },
  keyDisplayContainer: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.02,
  },
  keyText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#000000',
    fontFamily: 'monospace',
    letterSpacing: 1,
    lineHeight: Math.max(20, screenWidth * 0.05),
    marginBottom: 2,
    textAlign: 'center',
  },
  toggleButton: {
    marginBottom: screenHeight * 0.03,
  },
  toggleText: {
    color: '#000000',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    textAlign: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: screenWidth * 0.04,
  },
  actionButton: {
    backgroundColor: '#333333',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: Math.max(25, screenWidth * 0.06),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    marginRight: 5,
  },
  buttonIcon: {
    width: Math.max(20, screenWidth * 0.05),
    height: Math.max(20, screenWidth * 0.05),
  },
});
