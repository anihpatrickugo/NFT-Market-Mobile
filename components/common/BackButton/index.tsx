import React, { FC } from 'react'
import { Pressable, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { black, black0, white } from '@/constants/Colors';


type BackButtonProps = {
  navigation: any
}
const BackButton: FC<BackButtonProps> = ({navigation}) => {

    const color = useThemeColor({ light: black, dark: white }, 'icon');
    const backgroundColor = useThemeColor({ light: white, dark: black0 }, 'background');
  return (
    
    <View style={[styles.drawerIcon, {backgroundColor: backgroundColor}]}>
      <Pressable  onPress={navigation}>
         <Ionicons name="arrow-back-sharp" size={24} color={color} />
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    drawerIcon: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20
      }
})

export {BackButton}
