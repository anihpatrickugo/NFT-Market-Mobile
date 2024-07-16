
import { StyleSheet, Image, ScrollView, Dimensions, View } from 'react-native';
import * as UI from '@/components/common/index';
import { router, useLocalSearchParams } from 'expo-router';
const {width, height} = Dimensions.get('screen');
import { black1, black2, lightGrey } from '@/constants/Colors';
import Animated, { BounceIn, FadeIn, SlideInLeft } from 'react-native-reanimated';

export default function TabTwoScreen() {
  const {id} = useLocalSearchParams()
  
  return (
    <View style={{width, height}}>
        {/* image */}
      <UI.ThemedView style={styles.imageContainer}>
        <Animated.Image 
           sharedTransitionTag={`image-${id}`}
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
            <Animated.View  entering={SlideInLeft.duration(500)}>
                <UI.ThemedText bold size='2xl' style={{marginVertical: 12}}>6088AD</UI.ThemedText>
                <UI.ThemedText bold size='xs' >Edition 1 of 1</UI.ThemedText>
            </Animated.View>

            {/* description */}
            <Animated.View entering={FadeIn.duration(500).delay(500)} style={{width: "100%"}}>
                <UI.ThemedText lightColor={lightGrey}  darkColor={black2}  bold size='sm' style={{marginVertical: 12}}>Description</UI.ThemedText>
                <UI.ThemedText size='sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</UI.ThemedText>
            </Animated.View>


            {/* current bid */}
            <Animated.View  entering={FadeIn.duration(500).delay(800)} style={{width: "100%",}}>
              <UI.ThemedText lightColor={lightGrey}  darkColor={black2}  bold size='sm' style={{marginVertical: 12}}>Current Price</UI.ThemedText>

              <UI.ThemedView lightColor={lightGrey} darkColor={black1} style={styles.bid}>

                <View style={{width: 16, height: 16}}>
                  <Image style={{width: "100%", height:"100%", borderRadius: 8}} source={require("@/assets/images/profile.png")}/>
                </View>

                <View style={{flexDirection: "row", justifyContent:'center'}}>
                   <UI.ThemedText size='xs' style={{marginRight: 10}}>Listed by @noradio at</UI.ThemedText>
                   <UI.ThemedText size='sm' bold>0.0333 ETH</UI.ThemedText>
                </View>
             </UI.ThemedView>

           

            </Animated.View>

        </ScrollView>

        <Animated.View  entering={BounceIn.duration(500).delay(500)} style={styles.button}>
           <UI.Button text='List Now!' onPress={()=> router.navigate("new-listing")}/>
        </Animated.View>
      </UI.ThemedView>
    
    </View>
  );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: width,
        flex: 1,
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
        height: "55%",
        padding: 20,
        alignItems: "center",

    },

    bid: {
      alignSelf: "center", 
      flexDirection: "row",
      justifyContent: "space-between",
        width: "90%", 
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 50
    },

    button: {
      position: "absolute",
      bottom: 20,
      width: "75%",
      alignItems: "center"
    }


});
