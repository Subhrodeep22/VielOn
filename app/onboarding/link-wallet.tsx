import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import * as React from 'react';
import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRectangle from '../../components/BottomRectangle';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function LinkWallet() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [isTermsAccepted, setIsTermsAccepted] = React.useState(false);

  React.useEffect(() => {
    // Fade in animation when component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const toggleTermsAcceptance = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const handleContinue = () => {
    if (isTermsAccepted) {
      router.push('/onboarding/add-wallet');
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/images/Group 1334.svg')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <Text style={styles.brandName}>VielOn</Text>
        </View>
        
        <View style={styles.middleSection}>
          <View style={styles.discoverButton}>
            <LinearGradient
              colors={['#8B8A7F', '#1A1A18']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.discoverGradient}
            >
              <Text style={styles.discoverText}>Discover</Text>
            </LinearGradient>
          </View>
          
          <View style={styles.headingSection}>
            <Text style={styles.headingLine1}>the</Text>
            <Text style={styles.headingLine2}>best of</Text>
            <Text style={styles.headingLine3}>WEB3</Text>
          </View>
        </View>
        
        <View style={styles.bottomSection}>
          <View style={styles.radioContainer}>
            <Pressable onPress={toggleTermsAcceptance}>
              <View style={[styles.radioButton, isTermsAccepted && styles.radioButtonActive]}>
                {isTermsAccepted && <View style={styles.radioButtonInner} />}
              </View>
            </Pressable>
            <Text style={styles.radioText}>I agree to the </Text>
            <Pressable onPress={() => console.log('Terms of Service pressed!')}>
              <Text style={styles.termsLink}>Terms of Service</Text>
            </Pressable>
          </View>
          
          <Pressable 
            style={[styles.createWalletButton, !isTermsAccepted && styles.createWalletButtonDisabled]}
            onPress={handleContinue}
            disabled={!isTermsAccepted}
          >
            <LinearGradient
              colors={isTermsAccepted ? ['#8B8A7F', '#1A1A18'] : ['#62615B', '#222220']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.createWalletGradient}
            >
              <Text style={styles.createWalletText}>Create Wallet</Text>
            </LinearGradient>
          </Pressable>
          
          <Pressable onPress={() => router.push('/onboarding/add-wallet')}>
            <Text style={styles.haveWalletText}>I already have a wallet</Text>
          </Pressable>
        </View>
      </View>
      
      {/* Spec Images */}
      <Image
        source={require('../../assets/images/spec1.svg')}
        style={styles.specImage}
        contentFit="contain"
      />
      <Image
        source={require('../../assets/images/spec2.svg')}
        style={styles.spec2Image}
        contentFit="contain"
      />
      
      <BottomRectangle />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  backgroundContainer: {
    position: 'absolute',
    top: screenHeight * -0.235,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    paddingTop: screenHeight * 0.059,
    paddingLeft: screenWidth * 0.075,
    paddingRight: screenWidth * 0.075,
    zIndex: 2,
  },
  topSection: {
    marginBottom: screenHeight * 0.118,
  },
  brandName: {
    fontSize: Math.max(36, screenWidth * 0.09),
    fontWeight: 'bold',
    color: '#333333',
    fontFamily: 'Inter',
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: screenHeight * 0.071,
  },
  discoverButton: {
    borderRadius: Math.max(30, screenWidth * 0.075),
    marginBottom: screenHeight * 0.012,
    transform: [{ rotate: '-6deg' }],
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  discoverGradient: {
    paddingHorizontal: screenWidth * 0.087,
    paddingVertical: screenHeight * 0.021,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverText: {
    fontSize: Math.max(45, screenWidth * 0.112),
    fontWeight: 'bold',
    color: '#FFFFFF',
    transform: [{ rotate: '1deg' }],
    fontFamily: 'Inter',
  },
  headingSection: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.094,
  },
  headingLine1: {
    fontSize: Math.max(50, screenWidth * 0.125),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: screenHeight * 0.006,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  headingLine2: {
    fontSize: Math.max(50, screenWidth * 0.125),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: screenHeight * 0.006,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  headingLine3: {
    fontSize: Math.max(50, screenWidth * 0.125),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: screenHeight * 0.006,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  bottomSection: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.071,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: screenHeight * 0.047,
  },
  radioButton: {
    width: Math.max(22, screenWidth * 0.055),
    height: Math.max(22, screenWidth * 0.055),
    borderRadius: Math.max(11, screenWidth * 0.027),
    borderWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: screenWidth * 0.03,
  },
  radioButtonActive: {
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
  radioButtonInner: {
    width: Math.max(12, screenWidth * 0.03),
    height: Math.max(12, screenWidth * 0.03),
    borderRadius: Math.max(6, screenWidth * 0.015),
    backgroundColor: '#FFFFFF',
  },
  radioText: {
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  termsLink: {
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'Inter',
    textDecorationLine: 'underline',
  },
  createWalletButton: {
    width: '100%',
    height: Math.max(60, screenHeight * 0.071),
    borderRadius: Math.max(30, screenHeight * 0.035),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: screenHeight * 0.029,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  createWalletGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createWalletText: {
    fontSize: Math.max(20, screenWidth * 0.05),
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  createWalletButtonDisabled: {
    opacity: 0.5,
  },
  haveWalletText: {
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  specImage: {
    position: 'absolute',
    top: '30%',
    left: screenWidth * -0.037,
    width: '18%',
    height: '10%',
    zIndex: 3,
    opacity: 1,
  },
  spec2Image: {
    position: 'absolute',
    top: '45%',
    right: screenWidth * -0.05,
    width: '28%',
    height: '18%',
    zIndex: 3,
    opacity: 1,
  },
});
