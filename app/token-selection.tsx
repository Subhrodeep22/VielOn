import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from '../components/BackgroundImage';
import CustomBanner2 from '../components/CustomBanner2';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function TokenSelectionScreen() {
  const router = useRouter();

  const handleTokenSelect = (actionText: string) => {
    // Store the selected token globally so we can access it when we go back
    (global as any).selectedToken = actionText;
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage />
      
      {/* Main Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <Text style={styles.headerTitle}>Select token to sell</Text>
        
                 {/* Token Options */}
         <View style={styles.tokenList}>
           <CustomBanner2
             icon={require('../assets/images/ic_eth.svg')}
             title="Wrapped Ether"
             actionText="WETH"
             amount="0.00"
             onPress={() => handleTokenSelect("WETH")}
           />
           
           <CustomBanner2
             icon={require('../assets/images/ic_bsv.svg')}
             title="Wrapped Ether"
             actionText="WBTC"
             amount="0.00"
             onPress={() => handleTokenSelect("WBTC")}
           />
           
           <CustomBanner2
             icon={require('../assets/images/ic_usdt.svg')}
             title="Wrapped Ether"
             actionText="USDT"
             amount="0.00"
             onPress={() => handleTokenSelect("USDT")}
           />
           
           <CustomBanner2
             icon={require('../assets/images/ic_dai.svg')}
             title="Dai"
             actionText="DAI"
             amount="0.00"
             onPress={() => handleTokenSelect("DAI")}
           />
           
           <CustomBanner2
             icon={require('../assets/images/Group 1359.svg')}
             title="USDC"
             actionText="USDC"
             amount="0.00"
             onPress={() => handleTokenSelect("USDC")}
           />
         </View>
       </View>
       
               {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          {/* Text directly in the black bar */}
          <Text style={styles.bottomBarText}>Showing tokens added to wallet: Tfgh</Text>
          
          {/* iOS home indicator */}
          <View style={styles.homeIndicator} />
        </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(208, 208, 208, 0.8)',
    zIndex: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: screenWidth * 0.05,
  },
  headerTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'left',
    marginTop: screenHeight * 0.02,
    marginBottom: screenHeight * 0.04,
  },
  tokenList: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.015,
    paddingBottom: screenHeight * 0.03,
  },

  bottomBarText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: screenHeight * 0.02,
  },
  homeIndicator: {
    width: screenWidth * 0.2,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    alignSelf: 'center',
  },
});
