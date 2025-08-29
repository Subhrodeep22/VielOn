import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import React, { useEffect } from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';
import HeaderIcons from './HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface ShowSeedPhraseProps {
  onBack: () => void;
}

export default function ShowSeedPhrase({ onBack }: ShowSeedPhraseProps) {
  const insets = useSafeAreaInsets();
  
  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack]);

  const handleCopy = async () => {
    try {
      const seedPhrase = 'abandon ability able about above absent absorb abstract absurd abuse access accident';
      await Clipboard.setStringAsync(seedPhrase);
      // You could add a toast notification here if needed
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <Animated.View 
      style={styles.showSeedPhrase}
      pointerEvents="box-none"
    >
      <BackgroundImage />
      <SafeAreaView style={styles.showSeedPhraseContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Seed Phrase</Text>
            <Text style={styles.subheading}>12-WORD SEED PHRASE</Text>
          </View>
          <HeaderIcons />
        </View>
        
        {/* Seed Phrase Grid */}
        <View style={styles.gridContainer}>
          {[
            'abandon', 'ability', 'able', 'about',
            'above', 'absent', 'absorb', 'abstract',
            'absurd', 'abuse', 'access', 'accident'
          ].map((word, index) => (
            <View key={index} style={styles.wordRectangle}>
              <Text style={styles.wordText}>{word}</Text>
            </View>
          ))}
        </View>
        
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
             <Text style={styles.actionButtonText}>View QR</Text>
             <Image 
               source={require('../assets/images/qr-code-sharp.svg')}
               style={styles.buttonIcon}
               contentFit="contain"
             />
           </TouchableOpacity>
         </View>
         
         {/* Warning Text */}
         <View style={styles.warningContainer}>
           <Text style={styles.warningText}>
             This seed phrase is the only way to recover and{'\n'}
             access your wallet. Your wallet will not be available{'\n'}
             after deleting the app or restoring from a backup.{'\n\n'}
             Keep it secret, keep it safe.
           </Text>
         </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  showSeedPhrase: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  showSeedPhraseContainer: {
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
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
    marginBottom: 8,
  },
  subheading: {
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
    color: '#666666',
    textAlign: 'left',
    letterSpacing: 0.5,
    marginTop: Math.max(20, screenWidth * 0.04),
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: screenWidth * 0.03,
    marginTop: screenWidth * 0.05,
  },
  wordRectangle: {
    backgroundColor: '#000000',
    borderRadius: 16, // More rounded
    paddingVertical: screenWidth * 0.02,
    paddingHorizontal: screenWidth * 0.03,
    marginVertical: screenWidth * 0.02, // Increased margin
    marginHorizontal: screenWidth * 0.01,
    minWidth: screenWidth * 0.25,
    alignItems: 'center',
  },
  wordText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.04),
    fontWeight: '600',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: screenWidth * 0.04,
    marginTop: screenHeight * 0.03,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: Math.max(25, screenWidth * 0.06),
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: 'bold',
    marginRight: screenWidth * 0.02,
  },
  buttonIcon: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
  },
  warningContainer: {
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.06,
    marginTop: screenHeight * 0.04,
  },
  warningText: {
    color: '#797171',
    fontSize: Math.max(12, screenWidth * 0.03),
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: Math.max(18, screenWidth * 0.045),
  },
});
