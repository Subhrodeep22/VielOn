import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddCustomProvider from './AddCustomProvider';
import BackgroundImage from './BackgroundImage';
import BlackBannerSimple from './BlackBannerSimple';
import BlackBannerTwoTexts from './BlackBannerTwoTexts';
import BlackBannerWithImage from './BlackBannerWithImage';
import HeaderIcons from './HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface NetworkDetailProps {
  onBack: () => void;
  networkName: string;
  chainId: string;
  customProviderUrl: string | null;
  onSaveCustomProvider: (chainId: string, url: string) => void;
}

export default function NetworkDetail({ onBack, networkName, chainId, customProviderUrl, onSaveCustomProvider }: NetworkDetailProps) {
  const [showAddCustomProvider, setShowAddCustomProvider] = useState(false);

  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (showAddCustomProvider) {
        setShowAddCustomProvider(false);
        return true;
      }
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack, showAddCustomProvider]);

  return (
    <Animated.View style={styles.networkDetail}>
      <BackgroundImage />
      <SafeAreaView style={styles.networkDetailContainer}>
        {/* Network Detail Header */}
        <View style={styles.networkDetailHeader}>
          <Text style={styles.networkDetailTitle}>{networkName}</Text>
          <HeaderIcons onSearchPress={onBack} onBellPress={onBack} />
        </View>
        
        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsSubheading}>DETAILS</Text>
          
          {/* Chain ID Banner */}
          <BlackBannerSimple
            mainText="Chain ID"
            subtitle={chainId}
          />
          
          {/* Reload Providers Banner */}
          <BlackBannerWithImage
            text="Reload providers"
            image={require('../assets/images/reload.svg')}
          />
          
          {/* Default Providers Section */}
          <Text style={styles.defaultProvidersSubheading}>DEFAULT PROVIDERS</Text>
          
          {/* API Link Banner */}
          <BlackBannerTwoTexts
            firstText="https://api.fdi.network/alchemy-mainnet"
            secondText="https://api.fdi.network/alchemy-mainnet"
          />
          
          {/* Custom Providers Section */}
          <Text style={styles.customProvidersSubheading}>CUSTOM PROVIDERS</Text>
          
          {/* Custom Provider Status Banner */}
          <View style={styles.noCustomProvidersBanner}>
            <Text style={styles.noCustomProvidersText}>
              {customProviderUrl || 'No custom found'}
            </Text>
          </View>
          
          {/* Set Custom Provider Button */}
          <TouchableOpacity onPress={() => setShowAddCustomProvider(true)}>
            <BlackBannerWithImage
              text="Set Custom Provider"
              image={require('../assets/images/+.svg')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Add Custom Provider Overlay */}
      {showAddCustomProvider && (
        <AddCustomProvider
          onBack={() => setShowAddCustomProvider(false)}
          onSave={(url) => {
            onSaveCustomProvider(chainId, url);
            setShowAddCustomProvider(false);
          }}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  networkDetail: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  networkDetailContainer: {
    flex: 1,
  },
  networkDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: 0,
    paddingBottom: 0,
  },
  networkDetailTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  detailsContainer: {
    paddingHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.03,
  },
  detailsSubheading: {
    fontSize: Math.max(22, screenWidth * 0.055),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    marginBottom: screenHeight * 0.02,
  },
  defaultProvidersSubheading: {
    fontSize: Math.max(22, screenWidth * 0.055),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.02,
  },
  customProvidersSubheading: {
    fontSize: Math.max(22, screenWidth * 0.055),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.02,
  },
  noCustomProvidersBanner: {
    backgroundColor: '#000000',
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.01,
  },
  noCustomProvidersText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '400',
    opacity: 0.8,
  },
});
