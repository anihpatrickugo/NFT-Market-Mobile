import React from 'react'
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import * as UI from '@/components/common/index'
import Ethereum from '@/assets/icons/Ethereum'
import { black0, grey } from '@/constants/Colors'
import { router } from 'expo-router'
import Animated from 'react-native-reanimated'


const ListingCard = ({item}: {item: any}) => {
  return (
    <Pressable>
    
    <UI.ThemedView lightColor='white' darkColor={black0} style={styles.containner}>
      <View style={{width: "100%", height: "60%"}}>
        <Animated.Image sharedTransitionTag={`image-${item.index}`} style={{width: "100%", height: "100%", borderRadius: 20 }} resizeMode='cover' source={require('@/assets/images/nft.jpeg')}/>
      </View>

      <View style={{width: "100%", margin: 16}}>
         <UI.ThemedText size='xl' bold>6088AD</UI.ThemedText>

         {/* other details */}
         <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8}}>

          <View style={{flexDirection: "row", gap: 4, alignItems: "center"}}>
                <Ethereum width={35} height={40}/>
                <View>
                    <UI.ThemedText size='xs' lightColor={grey} darkColor={grey}>Price:</UI.ThemedText>
                    <UI.ThemedText size='sm' bold>0.333 ETH</UI.ThemedText>
                </View>
            </View>

            <View style={{flexDirection: "row", gap: 4, alignItems: "center", width: 140, marginVertical: -10}}>
                <UI.Button text='Cancel Listing'/>
            </View>

         </View>

      </View>
    </UI.ThemedView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    containner: {
        width: "100%", 
        height: 300, 
        borderRadius: 20,
      

    }
})

export default ListingCard
