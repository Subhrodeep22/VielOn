import { Image } from 'expo-image';
import { router, useFocusEffect } from 'expo-router';
import * as React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import BottomRectangle from '../../components/BottomRectangle';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function OnboardingBrand() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Fade in animation when component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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
          router.push('/onboarding/get-started');
        });
      }, 2000); // 2 second delay before transitioning
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
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/images/LOGO bLACK PNG.png')}
          style={styles.logo}
          contentFit="contain"
        />
        <Image
          source={require('../../assets/images/VeilOn.svg')}
          style={styles.brandText}
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
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: screenHeight * 0.12,
    zIndex: 2,
  },
  logo: {
    width: Math.max(120, screenWidth * 0.3),
    height: Math.max(120, screenWidth * 0.3),
    borderRadius: Math.max(60, screenWidth * 0.15),
    marginBottom: screenHeight * 0.035,
  },
  brandText: {
    width: Math.max(200, screenWidth * 0.5),
    height: Math.max(50, screenWidth * 0.125),
  },
});
