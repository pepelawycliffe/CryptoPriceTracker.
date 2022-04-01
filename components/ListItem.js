import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet,Image,TouchableOpacity } from 'react-native'

const ListItem = ({name ,symbol , currentPrice, priceChangePercentage7d, logoUrl}) => {
  
    const  priceChangeColor=priceChangePercentage7d > 0 ? 'green' : 'red';

    return (
    <TouchableOpacity>
        <View style={styles.itemWrapper}>
            {/* left side */}
            <View style={styles.leftWrapper}>
                <Image source={{uri: logoUrl}}style={styles.image}/>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>
            {/* right side */}
            <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-us', {currency:'USD'})}</Text>
                    <Text style={[styles.subTitle,{color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>

        </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal:16,
        marginTop:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    leftWrapper:{
        flexDirection:'row',
        alignItems: 'center'
    },
    image:{
        height:48,
        width:48,
    },
    titlesWrapper:{
        marginLeft:8, 
    },
    title:{
        fontSize: 18,
    },
    subTitle:{
        marginTop:4,
        fontSize:14,
        color:'#A9ABB1',
    },
    rightWrapper:{
        alignItems:'flex-end'
    },


})

export default ListItem