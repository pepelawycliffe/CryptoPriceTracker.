import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import ListItem from './components/ListItem';
import {SAMPLE_DATA} from './assets/data/sampledata'
import { FlatList } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider}/>

      {/* <ListItem name={SAMPLE_DATA[0].name}
      symbol={SAMPLE_DATA[0].symbol}
      currentPrice={SAMPLE_DATA[0].current_price}
      priceChangePercentage7d={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
      logoUrl={SAMPLE_DATA[0].image}
      /> */}

      <FlatList
      keyExtractor={(item) => item.id}
      data={SAMPLE_DATA}
      renderItem={({item}) =>(
        <ListItem
        name={item.name}
        symbol={item.symbol}
        currentPrice={item.current_price}
        priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
        logoUrl={item.image}
        />
      )}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  largeTitle:{
    fontSize: 24,
    fontWeight:'bold'
  },
  titleWrapper:{
    marginTop:60,
    paddingHorizontal:16,
  },
  divider:{
    height:StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal:16,
    marginTop: 16,
  },

});
