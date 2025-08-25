import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRectangle from '../../components/BottomRectangle';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function AddWallet() {
  const [showEmailModal, setShowEmailModal] = React.useState(false);
  const [showImportModal, setShowImportModal] = React.useState(false);

  const handleContinueWithEmail = () => {
    setShowEmailModal(true);
  };

  const handleOtherImportOptions = () => {
    setShowImportModal(true);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../../assets/images/Group 1334.svg')}
        style={styles.backgroundImage}
        contentFit="cover"
      />
      
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Wallet Icon */}
        <View style={styles.walletIconContainer}>
          <Image
            source={require('../../assets/images/wallet.svg')}
            style={styles.walletIcon}
            contentFit="contain"
          />
        </View>
        
        {/* Title */}
        <Text style={styles.title}>Add a Wallet</Text>
        
        {/* Subtitle */}
        <Text style={styles.subtitle}>Login or import an existing wallet</Text>
      </View>
      
      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.continueButton} onPress={handleContinueWithEmail}>
          <LinearGradient
            colors={['#8B8A7F', '#1A1A18']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.continueButtonGradient}
          >
            <Text style={styles.continueButtonText}>Continue with Email</Text>
          </LinearGradient>
        </Pressable>
        
        <Pressable style={styles.otherOptionsButton} onPress={handleOtherImportOptions}>
          <LinearGradient
            colors={['#C8C7C3', '#A8A7A3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.otherOptionsButtonGradient}
          >
            <Text style={styles.otherOptionsText}>Other Import options</Text>
          </LinearGradient>
        </Pressable>
      </View>

      {/* Email Selection Modal */}
      {showEmailModal && (
        <Pressable style={styles.modalOverlay} onPress={() => setShowEmailModal(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Your Email</Text>
            <Text style={styles.modalSubtitle}>Add a wallet with your Apple or Google account</Text>
            
            <Pressable style={styles.appleButton} onPress={() => router.push('/home')}>
              <LinearGradient
                colors={['#8B8A7F', '#1A1A18']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalButtonGradient}
              >
                <Image
                  source={require('../../assets/images/Apple.svg')}
                  style={styles.buttonLogo}
                  contentFit="contain"
                />
                <Text style={styles.appleButtonText}>Continue With Apple</Text>
              </LinearGradient>
            </Pressable>
            
            <Pressable style={styles.googleButton} onPress={() => router.push('/home')}>
              <LinearGradient
                colors={['#8B8A7F', '#1A1A18']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalButtonGradient}
              >
                <Image
                  source={require('../../assets/images/Google.svg')}
                  style={styles.buttonLogo}
                  contentFit="contain"
                />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </LinearGradient>
            </Pressable>
            
            <BottomRectangle />
            
            {/* Spacer to prevent overlap */}
            <View style={styles.modalSpacer} />
          </View>
        </Pressable>
      )}

      {/* Import Options Modal */}
      {showImportModal && (
        <Pressable style={styles.modalOverlay} onPress={() => setShowImportModal(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Import Options</Text>
            <Text style={styles.modalSubtitle}>Import an existing wallet with your email, seed phrase, private key or hardware wallet</Text>
            
            <Pressable style={styles.importButton}>
              <LinearGradient
                colors={['#8B8A7F', '#1A1A18']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalButtonGradient}
              >
                <Image
                  source={require('../../assets/images/import.svg')}
                  style={styles.buttonLogo}
                  contentFit="contain"
                />
                <Text style={styles.importButtonText}>Import Seed Phrase</Text>
              </LinearGradient>
            </Pressable>
            
            <Pressable style={styles.importButton}>
              <LinearGradient
                colors={['#8B8A7F', '#1A1A18']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalButtonGradient}
              >
                <Image
                  source={require('../../assets/images/Vector.svg')}
                  style={styles.buttonLogo}
                  contentFit="contain"
                />
                <Text style={styles.importButtonText}>Import Private Key</Text>
              </LinearGradient>
            </Pressable>
            
            <Pressable style={styles.importButton}>
              <LinearGradient
                colors={['#8B8A7F', '#1A1A18']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalButtonGradient}
              >
                <Image
                  source={require('../../assets/images/hardware-chip-sharp.svg')}
                  style={styles.buttonLogo}
                  contentFit="contain"
                />
                <Text style={styles.importButtonText}>Connect Hardware Wallet</Text>
              </LinearGradient>
            </Pressable>
            
            <BottomRectangle />
            
            {/* Spacer to prevent overlap */}
            <View style={styles.modalSpacer} />
          </View>
        </Pressable>
      )}
      
      <BottomRectangle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingTop: screenHeight * 0.118,
    paddingBottom: screenHeight * 0.071,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.075,
    zIndex: 2,
  },
  walletIconContainer: {
    marginBottom: screenHeight * 0.012,
    alignItems: 'center',
  },
  walletIcon: {
    width: Math.max(100, screenWidth * 0.25),
    height: Math.max(100, screenWidth * 0.25),
    resizeMode: 'contain',
  },
  title: {
    fontSize: Math.max(28, screenWidth * 0.07),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: screenHeight * 0.014,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Math.max(16, screenWidth * 0.04),
    color: '#666666',
    textAlign: 'center',
    lineHeight: screenHeight * 0.026,
  },
  buttonContainer: {
    paddingHorizontal: screenWidth * 0.075,
    gap: screenHeight * 0.019,
    zIndex: 2,
  },
  continueButton: {
    width: '100%',
    height: Math.max(56, screenHeight * 0.066),
    borderRadius: Math.max(12, screenWidth * 0.03),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  continueButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: Math.max(12, screenWidth * 0.03),
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
  otherOptionsButton: {
    width: '100%',
    height: Math.max(56, screenHeight * 0.066),
    borderRadius: Math.max(12, screenWidth * 0.03),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  otherOptionsButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: Math.max(12, screenWidth * 0.03),
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherOptionsText: {
    color: '#333333',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
  backgroundImage: {
    position: 'absolute',
    top: screenHeight * -0.235,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    zIndex: 10,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: Math.max(20, screenWidth * 0.05),
    borderTopRightRadius: Math.max(20, screenWidth * 0.05),
    padding: screenWidth * 0.05,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: screenHeight * 0.009,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: Math.max(16, screenWidth * 0.04),
    color: '#666666',
    textAlign: 'center',
    marginBottom: screenHeight * 0.024,
  },
  appleButton: {
    width: '100%',
    height: Math.max(56, screenHeight * 0.066),
    borderRadius: Math.max(12, screenWidth * 0.03),
    overflow: 'hidden',
    marginBottom: screenHeight * 0.012,
  },
  appleButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
  googleButton: {
    width: '100%',
    height: Math.max(56, screenHeight * 0.066),
    borderRadius: Math.max(12, screenWidth * 0.03),
    overflow: 'hidden',
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
  buttonLogo: {
    width: Math.max(24, screenWidth * 0.06),
    height: Math.max(24, screenWidth * 0.06),
    marginRight: screenWidth * 0.03,
  },
  modalButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: Math.max(12, screenWidth * 0.03),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSpacer: {
    height: screenHeight * 0.047, // Adjust as needed to prevent overlap
  },
  importButton: {
    width: '100%',
    height: Math.max(56, screenHeight * 0.066),
    borderRadius: Math.max(12, screenWidth * 0.03),
    overflow: 'hidden',
    marginBottom: screenHeight * 0.012,
  },
  importButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
});
