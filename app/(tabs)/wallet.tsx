import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from '../../components/BackgroundImage';
import CustomBanner from '../../components/CustomBanner';
import HeaderIcons from '../../components/HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function DAppsTab() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage />
      
            {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>VielOn</Text>
        <HeaderIcons 
          onSearchPress={() => console.log('Search pressed')}
          onBellPress={() => console.log('Bell pressed')}
        />
      </View>

      {/* Spacing */}
      <View style={styles.headerSpacing} />

      {/* Custom Banners */}
      <CustomBanner
        icon={require('../../assets/images/card-wallet.svg')}
        title="VielOn DEX"
        actionText="Private and public Swaps"
        onActionPress={() => router.push('../vielon-dex')}
      />
      
      <CustomBanner
        icon={require('../../assets/images/tractor.svg')}
        title="Farm"
        actionText="Earn yield"
        onActionPress={() => console.log('Farm pressed')}
      />
      
      <CustomBanner
        icon={require('../../assets/images/tsunami.svg')}
        title="Liquidity"
        actionText="Manage DEX liquidity"
        onActionPress={() => console.log('Manage liquidity pressed')}
      />
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: screenHeight * 0.025,
    zIndex: 1,
  },
  headerSpacing: {
    height: screenHeight * 0.05,
  },
  appName: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenWidth * 0.05,
  },
  title: {
    fontSize: Math.max(28, screenWidth * 0.07),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: screenHeight * 0.012,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#666666',
    textAlign: 'center',
  },
});
