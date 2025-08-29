import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';
import CustomBanner3 from './CustomBanner3';
import HeaderIcons from './HeaderIcons';
import WalletSettings from './WalletSettings';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface WalletPageProps {
  onBack: () => void;
}

export default function WalletPage({ onBack }: WalletPageProps) {
  const [showWalletSettings, setShowWalletSettings] = useState(false);
  const [selectedWalletTitle, setSelectedWalletTitle] = useState('');

  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack]);

  // Handle iOS back gesture and navigation back
  useFocusEffect(
    React.useCallback(() => {
      // This will be called when the screen comes into focus
      // iOS back gesture is handled automatically by React Navigation
      return () => {
        // This will be called when the screen goes out of focus
      };
    }, [])
  );

  const handleWalletPress = (walletTitle: string) => {
    setSelectedWalletTitle(walletTitle);
    setShowWalletSettings(true);
  };

  const handleBackFromSettings = () => {
    setShowWalletSettings(false);
  };

  return (
    <Animated.View style={styles.walletPage}>
      <BackgroundImage />
      <SafeAreaView style={styles.walletPageContainer}>
        {showWalletSettings ? (
          <WalletSettings 
            onBack={handleBackFromSettings}
            walletTitle={selectedWalletTitle}
          />
        ) : (
          <>
            {/* Wallet Page Header */}
            <View style={styles.walletPageHeader}>
              <Text style={styles.walletPageTitle}>Wallets</Text>
              <HeaderIcons />
            </View>
            
            {/* Wallet Entry */}
            <CustomBanner3
              icon={require('../assets/images/card-wallet.svg')}
              title="Tfgh"
              actionText="Private: 0zk1qvjk....mcqz"
              secondSubtitle="Public EVM: 0xc501ab4....e796"
              rightImage={require('../assets/images/_.svg')}
              showCheckmark={true}
              onPress={() => handleWalletPress("Tfgh")}
            />
          </>
        )}
      </SafeAreaView>
      
      {/* New Wallet Button - Fixed at Bottom */}
      {!showWalletSettings && (
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.gradientButton}>
            <LinearGradient
              colors={['#62615B', '#222220']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientOverlay}
            >
              <Text style={styles.gradientButtonText}>New Wallet</Text>
            </LinearGradient>
          </Pressable>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  walletPage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  walletPageContainer: {
    flex: 1,
  },
  walletPageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: 0,
    paddingBottom: 0,
  },
  walletPageTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: screenHeight * 0.05,
    backgroundColor: 'transparent',
  },
  gradientButton: {
    borderRadius: 16,
    marginHorizontal: screenWidth * 0.05,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gradientOverlay: {
    paddingVertical: screenHeight * 0.025,
    paddingHorizontal: screenWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientButtonText: {
    fontSize: Math.max(18, screenWidth * 0.045),
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});
