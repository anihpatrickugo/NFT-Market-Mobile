import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as UI from '@/components/common/index';
import { Ionicons } from '@expo/vector-icons';
import { black, black3, grey, white0 } from '@/constants/Colors';
import { useNavigation } from 'expo-router';


export default function TabTwoScreen() {
    // nft mint details
  const [photo, setPhoto] = useState<string|null>(null);
  const [name, setName] = useState<string|null>(null);
  const [description, setDescription] = useState<string|null>(null);

  const navigation = useNavigation()
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
  
    }
  };


  


  return (
     <UI.ThemedView lightColor={white0} darkColor={black} style={styles.container}>

      <KeyboardAvoidingView  enabled behavior='position' >
      
      {/* header */}
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
          <UI.DrawerIcon navigation={navigation}/>
  
          <UI.ThemedText bold size='lg'>New Mint</UI.ThemedText>
        </UI.ThemedView>


       
       {/* form */}
       <View style={{width: "100%", gap: 20}}>

           <UI.ThemedText size='xs' style={{textAlign: "center", marginTop: 20}}>
           Once your item is minted you will not be able to change any of its information.</UI.ThemedText>

           <TouchableOpacity style={styles.imageContainner} onPress={pickImage}>
               {photo ? 
                <Image style={{width: "100%", height:"100%", borderRadius: 20}} source={{uri: photo}}/>
               : 
               <Ionicons name="image" size={190} color={grey} />
               }
           </TouchableOpacity>

           <TextInput style={styles.textInput} placeholderTextColor={black3} placeholder='Name' />
          
           <TextInput style={[styles.textInput, {height: 100, }]} placeholderTextColor={black3} multiline placeholder='Description'/>

           <UI.Button text='Confirm Mint'/>

       </View>
       </KeyboardAvoidingView>
    </UI.ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
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

imageContainner: {
  width: "100%",
  height: 200,
  alignItems: "center", 
  borderColor: grey,
  borderWidth: 1,
  borderRadius: 20,
  },

textInput: {
    width: '100%',
    height: 50,
    borderColor: grey,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    color: grey
  }

});
