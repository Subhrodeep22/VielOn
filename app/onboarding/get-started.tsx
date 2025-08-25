import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import * as React from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomRectangle from '../../components/BottomRectangle';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function OnboardingGetStarted() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Fade in animation when component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleGetStarted = () => {
    console.log('Get Started button pressed!');
    router.push('/onboarding/link-wallet');
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/images/Group 1335.svg')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <Text style={styles.brandName}>VielOn</Text>
        </View>
        
        <View style={styles.middleSection}>
          <View style={styles.privacyTag}>
            <Text style={styles.privacyText}>Zero-Knowledge Privacy</Text>
          </View>
          
          <View style={styles.headingSection}>
            <Text style={styles.headingLine1}>Fully</Text>
            <Text style={styles.headingLine2}>On-Chain</Text>
            <Text style={styles.headingLine3}>Secure by</Text>
            <Text style={styles.headingLine4}>Design</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <LinearGradient
            colors={['#8B8A7F', '#1A1A18']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.getStartedGradient}
          >
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      
      <BottomRectangle />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '90%',
  },
  contentContainer: {
    flex: 1,
    paddingTop: screenHeight * 0.07,
    paddingLeft: screenWidth * 0.075,
    paddingRight: screenWidth * 0.075,
    zIndex: 2,
  },
  topSection: {
    marginBottom: screenHeight * 0.235,
  },
  brandName: {
    fontSize: Math.max(32, screenWidth * 0.08),
    fontWeight: 'semibold',
    color: '#333333',
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  privacyTag: {
    backgroundColor: '#E0E0E0',
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.01,
    alignSelf: 'flex-start',
    marginBottom: screenHeight * 0.012,
  },
  privacyText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#666666',
    fontWeight: '500',
  },
  headingSection: {
    marginBottom: screenHeight * 0.118,
  },
  headingLine1: {
    fontSize: Math.max(42, screenWidth * 0.105),
    fontWeight: 'semibold',
    color: '#333333',
    marginBottom: screenHeight * 0.01,
  },
  headingLine2: {
    fontSize: Math.max(42, screenWidth * 0.105),
    fontWeight: 'semibold',
    color: '#333333',
    marginBottom: screenHeight * 0.01,
  },
  headingLine3: {
    fontSize: Math.max(42, screenWidth * 0.105),
    fontWeight: 'semibold',
    color: '#333333',
    marginBottom: screenHeight * 0.01,
  },
  headingLine4: {
    fontSize: Math.max(42, screenWidth * 0.105),
    fontWeight: 'semibold',
    color: '#333333',
    marginBottom: screenHeight * 0.01,
  },
  getStartedButton: {
    width: '100%',
    height: Math.max(56, screenHeight * 0.066),
    borderRadius: Math.max(28, screenHeight * 0.033),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: screenHeight * 0.082,
  },
  getStartedGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedButtonText: {
    fontSize: Math.max(18, screenWidth * 0.045),
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
