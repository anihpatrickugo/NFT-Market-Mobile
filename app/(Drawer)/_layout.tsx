import React, { useEffect, useLayoutEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/components/main/CustomDrawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTheme } from '@/redux/slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome6, Fontisto, Ionicons } from '@expo/vector-icons';
import { black, white } from '@/constants/Colors';


export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const theme = useSelector((state: any) => state.theme.value)
  const dispatch = useDispatch()

  // set default theme 

  useLayoutEffect(()=>{
    const check = async () => {
      const theme = await AsyncStorage.getItem('theme')
      if (theme) {
        dispatch(setTheme(theme))
      }
      else{
        if(colorScheme){
          dispatch(setTheme(colorScheme))
          await AsyncStorage.setItem('theme', colorScheme)
        }
      }
    }

    check()
  }, [])

  return (
    <Drawer
      
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: (theme === 'light') ? black : white,

      }}>

      <Drawer.Screen
        name="(nft-stack)"
        options={{
          title: 'Market Place',
          drawerIcon: ()=> (<FontAwesome6 name="people-roof" size={20} color="black" />)
          
        }}
      />

        <Drawer.Screen
          name="(my-assets-stack)"
          options={{
            title: 'My Assets',
            drawerIcon: ()=> (<FontAwesome6 name="images" size={20} color="black" />)
            
          }}
        />

        <Drawer.Screen
          name="listings"
          options={{
            title: 'All Listings',
            drawerIcon: ()=> (<FontAwesome6 name="clipboard-list" size={20} color="black" />)
            
          }}
        />


      <Drawer.Screen
        name="mint"
        options={{
          title: 'Create Mint',
          drawerIcon: ()=> (<Ionicons name="create" size={24} color="black" />)
          
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          title: 'My Profile',
          drawerIcon: ()=> (<Fontisto name="person" size={24} color="black" />)
          
        }}
      />

   

      <Drawer.Screen
        name="developer"
        options={{
          title: 'Developer info',
          drawerIcon: ()=> (<FontAwesome6 name="laptop-code" size={20} color="black" />)
          
        }}
      />
  
    </Drawer>
  );
}
