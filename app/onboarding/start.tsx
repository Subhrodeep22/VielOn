import { Image } from 'expo-image';
import { router, useFocusEffect } from 'expo-router';
import * as React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import BottomRectangle from '../../components/BottomRectangle';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function OnboardingStart() {
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  useFocusEffect(
    React.useCallback(() => {
      const t = setTimeout(() => {
        // Start fade out animation
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Navigate after animation completes
          router.replace('/onboarding/brand');
        });
      }, 800);
      return () => clearTimeout(t);
    }, [fadeAnim])
  );

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require('../../assets/images/Group 1334.svg')}
        style={styles.backgroundImage}
        contentFit="cover"
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/LOGO bLACK PNG.png')}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
      <BottomRectangle />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: screenHeight * 0.12,
    zIndex: 2,
  },
  logo: {
    width: Math.max(120, screenWidth * 0.3),
    height: Math.max(120, screenWidth * 0.3),
    borderRadius: Math.max(60, screenWidth * 0.15),
  },
});
