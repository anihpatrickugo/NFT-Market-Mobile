
import { StyleSheet, Image, Platform, ScrollView, Dimensions, View } from 'react-native';
import * as UI from '@/components/common/index';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
const {width, height} = Dimensions.get('screen');
import { grey, lightGrey } from '@/constants/Colors';

export default function TabTwoScreen() {
  return (
    <View style={{width, height}}>
        {/* image */}
      <UI.ThemedView style={styles.imageContainer}>
        <Image 
           style={{width: "100%", height: "100%"}}
           resizeMode='stretch' 
           source={require("@/assets/images/nft.jpeg")}/>


            {/* backbuton */}
         <UI.ThemedView style={styles.backButton}>
             <UI.BackButton navigation={()=>router.back()}/>
         </UI.ThemedView>
        
      </UI.ThemedView>



       {/* details */}
      <UI.ThemedView style={styles.detailsContainer}>
        <ScrollView style={{width: "100%", height: "100%"}} showsVerticalScrollIndicator={false} bounces={false}>
            <UI.ThemedText bold size='2xl' style={{marginVertical: 12}}>6088AD</UI.ThemedText>
            <UI.ThemedText bold size='xs' >Edition 1 of 1</UI.ThemedText>
         
            {/* description */}
            <View style={{width: "100%"}}>
                <UI.ThemedText lightColor={lightGrey} bold size='sm' style={{marginVertical: 12}}>Description</UI.ThemedText>
                <UI.ThemedText size='sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</UI.ThemedText>
            </View>


            {/* current bid */}
            <View style={{width: "100%"}}>
              <UI.ThemedText lightColor={lightGrey} bold size='sm' style={{marginVertical: 12}}>Current Bid</UI.ThemedText>

              <UI.ThemedView lightColor={lightGrey} style={styles.bid}>
                <UI.ThemedText bold size='sm' style={{marginRight: 10}}>0.1 ETH</UI.ThemedText>
                <UI.ThemedText size='sm' lightColor={lightGrey}>$200</UI.ThemedText>
             </UI.ThemedView>

            </View>

        </ScrollView>
      </UI.ThemedView>
    
    </View>
  );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: width,
        height: "50%",
        // borderRadius: 20,
    },
    backButton : {
    position: "absolute", 
    top: 30, 
    left: 20,
    borderRadius: 20
    },

    detailsContainer: {
        width: width,
        flex: 1,
        padding: 20,
    },

    bid: {
        
        alignItems: "center", 
        width: "90%", 
        padding: 12
    }


});
