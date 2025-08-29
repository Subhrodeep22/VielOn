import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';
import CustomBanner3 from './CustomBanner3';
import HeaderIcons from './HeaderIcons';
import NetworkDetail from './NetworkDetail';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface NetworksRPCsProps {
  onBack: () => void;
}

export default function NetworksRPCs({ onBack }: NetworksRPCsProps) {
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  const [selectedChainId, setSelectedChainId] = useState<string | null>(null);
  const [customProviders, setCustomProviders] = useState<Record<string, string>>({});
  
  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (selectedNetwork) {
        setSelectedNetwork(null);
        return true;
      }
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack, selectedNetwork]);

  const handleNetworkPress = (networkName: string, chainId: string) => {
    setSelectedNetwork(networkName);
    setSelectedChainId(chainId);
  };

  return (
    <Animated.View style={styles.networksRPCs}>
      <BackgroundImage />
      <SafeAreaView style={styles.networksRPCsContainer}>
        {/* Networks Header */}
        <View style={styles.networksRPCsHeader}>
          <Text style={styles.networksRPCsTitle}>Networks</Text>
          <HeaderIcons onSearchPress={onBack} onBellPress={onBack} />
        </View>
        
        {/* Network Banners */}
        <View style={styles.networksContainer}>
          <CustomBanner3
            title="Ethereum"
            actionText="EVM network: 1"
            secondSubtitle=""
            icon={require('../assets/images/ic_eth_white.svg')}
            rightImage={require('../assets/images/_.svg')}
            showCheckmark={true}
            onPress={() => handleNetworkPress("Ethereum", "1")}
          />
          
          <CustomBanner3
            title="BNB Smart Chain"
            actionText="EVM network: 56"
            secondSubtitle=""
            icon={require('../assets/images/ic_bnb.svg')}
            rightImage={require('../assets/images/_.svg')}
            onPress={() => handleNetworkPress("BNB Smart Chain", "56")}
          />
          
          <CustomBanner3
            title="Polygon"
            actionText="EVM network: 137"
            secondSubtitle=""
            icon={require('../assets/images/ic_polygon.svg')}
            rightImage={require('../assets/images/_.svg')}
            onPress={() => handleNetworkPress("Polygon", "137")}
          />
          
          <CustomBanner3
            title="Arbitrum"
            actionText="EVM network: 42161"
            secondSubtitle=""
            icon={require('../assets/images/ic_ar.svg')}
            rightImage={require('../assets/images/_.svg')}
            onPress={() => handleNetworkPress("Arbitrum", "42161")}
          />
          
          <CustomBanner3
            title="Sepolia Testnet"
            actionText="EVM network: 11155111"
            secondSubtitle=""
            icon={require('../assets/images/ic_leo.svg')}
            rightImage={require('../assets/images/_.svg')}
            onPress={() => handleNetworkPress("Sepolia Testnet", "11155111")}
          />
        </View>
      </SafeAreaView>
      
      {/* Network Detail Overlay */}
      {selectedNetwork && selectedChainId && (
        <NetworkDetail 
          onBack={() => setSelectedNetwork(null)} 
          networkName={selectedNetwork}
          chainId={selectedChainId}
          customProviderUrl={customProviders[selectedChainId] || null}
          onSaveCustomProvider={(chainId, url) => {
            setCustomProviders(prev => ({
              ...prev,
              [chainId]: url
            }));
          }}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  networksRPCs: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  networksRPCsContainer: {
    flex: 1,
  },
  networksRPCsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: 0,
    paddingBottom: 0,
  },
  networksRPCsTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  networksContainer: {
    paddingHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.03,
  },
});
