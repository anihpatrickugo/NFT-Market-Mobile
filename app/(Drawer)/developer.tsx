import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Animated, { BounceIn, FadeIn, FlipInEasyX, ZoomIn } from 'react-native-reanimated';
import * as UI from '@/components/common/index';
import { black, black0, black3, white0 } from '@/constants/Colors';
import { useNavigation } from 'expo-router';


export default function TabTwoScreen() {
  const developer = {
    name: 'Anih-Patrick Ugochukwu',
    about: 'Fullstack Mobile Developer',
    description: 'Passionate about creating innovative and user-friendly mobile applications.',
    image: require('@/assets/images/developer.jpeg'),
    github: 'https://github.com/anihpatrickugo',
    linkedin: 'https://linkedin.com/in/anihpatrickugo',
    twitter: 'https://twitter.com/anihpatrickugo',
    gmail: 'mailto:iampatrickugo@gmail.com',
    phone: '+2349059209717',
    instagram: 'https://instagram.com/anihpatrickugoo',
    website: 'https://anihpatrickugo.github.io',
};


const navigation = useNavigation();

  return (
    <UI.ThemedView lightColor={white0} darkColor={black} style={styles.containner}>
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
          <UI.DrawerIcon navigation={navigation}/>
  
          <UI.ThemedText bold size='lg'>Developer Info</UI.ThemedText>
        </UI.ThemedView>

      {/* info */}
      <Animated.Image source={developer.image} style={{ width: 200, height: 200, borderRadius: 100 }} entering={BounceIn.delay(80)} />

            <Animated.View style={{alignItems: "center"}} entering={FlipInEasyX.delay(500)}>
               <UI.ThemedText size='lg' bold lightColor={black0} darkColor={white0}>{developer.name}</UI.ThemedText>
               <UI.ThemedText size='sm' bold lightColor={black0} darkColor={white0} style={{textAlign: "center"}}>{developer.about}</UI.ThemedText>

               <UI.ThemedText size='xs' lightColor={black0} darkColor={white0} style={{textAlign: "center"}}>{developer.description}</UI.ThemedText>
            </Animated.View>


            <Animated.View style={{ flexDirection: 'row', marginTop: 16, gap: 12 }} entering={ZoomIn.delay(1000)}>
                <TouchableOpacity onPress={() => Linking.openURL(developer.github)}>
                    <Ionicons name="logo-github" size={32} color={black3} style={{ marginRight: 16 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.linkedin)}>
                    <Ionicons name="logo-linkedin" size={32} color={black3} style={{ marginRight: 16 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.twitter)}>
                    <Ionicons name="logo-twitter" size={32} color={black3} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.instagram)}>
                    <Ionicons name="logo-instagram" size={32} color={black3} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.gmail)}>
                    <MaterialCommunityIcons name="gmail" size={32} color={black3} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.website)}>
                    <MaterialCommunityIcons name="web" size={32} color={black3} />
                </TouchableOpacity>
            </Animated.View>
    </UI.ThemedView>
  );
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 35,
    
},

titleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: "100%",
  justifyContent: "space-between",
},
});
