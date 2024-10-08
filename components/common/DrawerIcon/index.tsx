import React, { FC } from 'react'
import { Pressable, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { black, black0, white } from '@/constants/Colors';


type DrawerIconProps = {
  navigation: any
}
const DrawerIcon: FC<DrawerIconProps> = ({navigation}) => {

    const color = useThemeColor({ light: black, dark: white }, 'icon');
    const backgroundColor = useThemeColor({ light: white, dark: black0 }, 'background');
  return (
    
    <TouchableOpacity onPress={()=> navigation.toggleDrawer()} style={[styles.drawerIcon, {backgroundColor: backgroundColor}]}>
    <View >
      <Entypo name="menu" size={24} color={color} />
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    drawerIcon: {
        width: 40,
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20
      }
})

export {DrawerIcon}
