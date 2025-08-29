import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import HeaderIcons from '../../components/HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const [balanceVisible, setBalanceVisible] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('crypto');

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  const cryptoData = [
    {
      id: 1,
      logo: require('../../assets/images/Group 1327.svg'),
      ticker: 'BTC',
      price: '$25,585.00',
      quantity: '2.1',
      totalValue: '$25,585.00'
    },
    {
      id: 2,
      logo: require('../../assets/images/Group 1328.svg'),
      ticker: 'ETH',
      price: '$1,623.40',
      quantity: '0.23',
      totalValue: '$1,623.40'
    },
    {
      id: 3,
      logo: require('../../assets/images/Group 1329.svg'),
      ticker: 'DAI',
      price: '$321.40',
      quantity: '20.03',
      totalValue: '$321.40'
    },
    {
      id: 4,
      logo: require('../../assets/images/Group 1330.svg'),
      ticker: 'USDT',
      price: '$644.40',
      quantity: '644.40',
      totalValue: '$644.40'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <BackgroundImage height="70%" />
      
             {/* Header */}
       <View style={styles.header}>
         <Text style={styles.appName}>VeilOn</Text>
         <HeaderIcons 
           onSearchPress={() => console.log('Search pressed')}
           onBellPress={() => console.log('Bell pressed')}
         />
       </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.walletLabel}>Private Wallet</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>
            {balanceVisible ? '$ 143,227.30' : '$ •••,•••.••'}
          </Text>
          <Pressable onPress={toggleBalanceVisibility} style={styles.eyeButton}>
            <Image
              source={require('../../assets/images/eye-off.svg')}
              style={styles.eyeIcon}
              contentFit="contain"
            />
          </Pressable>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <View style={styles.actionButtonContainer}>
          <Pressable style={styles.actionButton}>
            <View style={styles.plusIcon}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </Pressable>
          <Text style={styles.actionButtonText}>Create</Text>
        </View>
        
        <View style={styles.actionButtonContainer}>
          <Pressable style={styles.actionButton}>
            <Image
              source={require('../../assets/images/arrow-narrow-left.svg')}
              style={styles.arrowIcon}
              contentFit="contain"
            />
          </Pressable>
          <Text style={styles.actionButtonText}>Import</Text>
        </View>
      </View>

             {/* Banner */}
       <View style={styles.banner}>
         <View style={styles.bannerContent}>
           <View style={styles.iconContainer}>
             <Image
               source={require('../../assets/images/card-wallet.svg')}
               style={styles.bannerIcon}
               contentFit="contain"
             />
           </View>
           <View style={styles.bannerText}>
             <Text style={styles.bannerTitle}>Add funds from exchange</Text>
             <Text style={styles.bannerAction}>Deposit Now →</Text>
           </View>
         </View>
                   <Pressable style={styles.closeButton}>
            <Image
              source={require('../../assets/images/add-circle-outline.svg')}
              style={styles.closeIcon}
              contentFit="contain"
            />
          </Pressable>
       </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Tabs */}
        <View style={styles.tabs}>
        <Pressable 
          onPress={() => setActiveTab('crypto')}
        >
          {activeTab === 'crypto' ? (
            <LinearGradient
              colors={['#FAF3C5', '#BEF4B5', '#87F2AA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.activeTabGradient}
            >
              <Text style={[styles.tabText, styles.activeTabText]}>
                Crypto
              </Text>
            </LinearGradient>
          ) : (
            <View style={styles.tab}>
              <Text style={styles.tabText}>
                Crypto
              </Text>
            </View>
          )}
        </Pressable>
        <Pressable 
          onPress={() => setActiveTab('nfts')}
        >
          {activeTab === 'nfts' ? (
            <LinearGradient
              colors={['#FAF3C5', '#BEF4B5', '#87F2AA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.activeTabGradient}
            >
              <Text style={[styles.tabText, styles.activeTabText]}>
                NFTs
              </Text>
            </LinearGradient>
          ) : (
            <View style={styles.tab}>
              <Text style={styles.tabText}>
                NFTs
              </Text>
            </View>
          )}
        </Pressable>
      </View>

             {/* Crypto List */}
       <ScrollView 
         style={styles.cryptoList} 
         showsVerticalScrollIndicator={false}
         contentContainerStyle={styles.cryptoListContent}
       >
         {cryptoData.map((crypto) => (
           <View key={crypto.id} style={styles.cryptoItem}>
             <Image source={crypto.logo} style={styles.cryptoLogo} contentFit="contain" />
             <View style={styles.cryptoInfo}>
               <Text style={styles.cryptoTicker}>{crypto.ticker}</Text>
               <Text style={styles.cryptoPrice}>{crypto.price}</Text>
             </View>
             <View style={styles.cryptoValues}>
               <Text style={styles.cryptoQuantity}>{crypto.quantity}</Text>
               <Text style={styles.cryptoTotal}>{crypto.totalValue}</Text>
             </View>
           </View>
         ))}
       </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: screenHeight * 0.06,
    zIndex: 1,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: screenHeight * 0.025,
    zIndex: 1,
  },
  appName: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
  },

  balanceSection: {
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: screenHeight * 0.03,
    zIndex: 1,
  },
  walletLabel: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#000000',
    marginBottom: screenHeight * 0.01,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceAmount: {
    fontSize: Math.max(32, screenWidth * 0.08),
    fontWeight: 'bold',
    color: '#000000',
  },
  eyeButton: {
    padding: screenWidth * 0.02,
  },
  eyeIcon: {
    width: Math.max(24, screenWidth * 0.06),
    height: Math.max(24, screenWidth * 0.06),
    tintColor: '#000000',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: screenHeight * 0.03,
    zIndex: 1,
  },
  actionButtonContainer: {
    alignItems: 'center',
  },
  actionButton: {
    width: Math.max(100, screenWidth * 0.25),
    height: Math.max(70, screenHeight * 0.08),
    borderRadius: Math.max(25, screenWidth * 0.06),
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: screenHeight * 0.012,
  },
  plusIcon: {
    width: Math.max(50, screenWidth * 0.125),
    height: Math.max(50, screenWidth * 0.125),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: screenHeight * 0.025,
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: Math.max(50, screenWidth * 0.125),
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: Math.max(50, screenWidth * 0.125),
    height: Math.max(50, screenWidth * 0.125),
    tintColor: '#FFFFFF',
  },
  actionButtonText: {
    color: '#000000',
    fontSize: Math.max(20, screenWidth * 0.05),
    fontWeight: '600',
  },

  banner: {
    backgroundColor: '#000000',
    marginHorizontal: screenWidth * 0.012,
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: screenHeight * 0.03,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: Math.max(56, screenWidth * 0.14),
    height: Math.max(56, screenWidth * 0.14),
    borderRadius: Math.max(28, screenWidth * 0.07),
    backgroundColor: '#D9D9D952',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screenWidth * 0.04,
  },
  bannerIcon: {
    width: Math.max(30, screenWidth * 0.075),
    height: Math.max(30, screenWidth * 0.075),
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    marginBottom: screenHeight * 0.005,
  },
  bannerAction: {
    color: '#4CAF50',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  closeButton: {
    padding: screenWidth * 0.01,
    marginLeft: 'auto',
  },
  closeIcon: {
    width: Math.max(40, screenWidth * 0.1),
    height: Math.max(40, screenWidth * 0.1),
    tintColor: '#FFFFFF',
  },

  contentContainer: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: screenWidth * 0.05,
    gap: screenWidth * 0.03,
    marginBottom: screenHeight * 0.025,
  },
  tab: {
    backgroundColor: '#333333',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: Math.max(20, screenWidth * 0.05),
    borderWidth: 2,
    borderColor: '#000000',
    minHeight: Math.max(48, screenHeight * 0.06),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  activeTabText: {
    color: '#000000',
  },
  activeTabGradient: {
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: Math.max(20, screenWidth * 0.05),
    minHeight: Math.max(48, screenHeight * 0.06),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cryptoList: {
    flex: 1,
    paddingHorizontal: screenWidth * 0.05,
  },
  cryptoListContent: {
    paddingBottom: screenHeight * 0.025,
  },
  cryptoItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: Math.max(12, screenWidth * 0.03),
    padding: screenWidth * 0.04,
    marginBottom: screenHeight * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoLogo: {
    width: Math.max(40, screenWidth * 0.1),
    height: Math.max(40, screenWidth * 0.1),
    marginRight: screenWidth * 0.04,
  },
  cryptoInfo: {
    flex: 1,
  },
  cryptoTicker: {
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
    color: '#000000',
    marginBottom: screenHeight * 0.005,
  },
  cryptoPrice: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#666666',
  },
  cryptoValues: {
    alignItems: 'flex-end',
  },
  cryptoQuantity: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#666666',
    marginBottom: screenHeight * 0.005,
  },
  cryptoTotal: {
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
    color: '#000000',
  },

});
