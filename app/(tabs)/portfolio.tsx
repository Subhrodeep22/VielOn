import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from '../../components/BackgroundImage';
import HeaderIcons from '../../components/HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function ActivityTab() {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>VeilOn</Text>
        <HeaderIcons />
      </View>
      
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Transactions</Text>
          <Text style={styles.subtitle}>No transactions yet.</Text>
        </View>
      </View>
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
    paddingTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
  },
  appName: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: screenWidth * 0.05,
  },
  textContainer: {
    marginTop: screenHeight * 0.02,
  },
  title: {
    fontSize: Math.max(28, screenWidth * 0.07),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: screenHeight * 0.012,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#666666',
    textAlign: 'left',
  },
});
