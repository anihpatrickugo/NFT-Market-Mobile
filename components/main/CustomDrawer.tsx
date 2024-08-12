import { FC } from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Switch,
    useColorScheme,
    Pressable
  } from "react-native";
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from "@react-navigation/drawer";
  
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useThemeColor } from "@/hooks/useThemeColor";
import { white, black, grey, black1} from "@/constants/Colors";
import * as UI from "@/components/common/index";
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import '@walletconnect/react-native-compat'
import '@ethersproject/shims'
import { createWeb3Modal, defaultConfig, Web3Modal, W3mButton } from '@web3modal/ethers5-react-native'


  type Props = {
    state: any,
    navigation: any,
    descriptors: any,
  };



// 1. Get projectId from https://cloud.walletconnect.com
const projectId = process.env.EXPO_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''

// 2. Create config
const metadata = {
  name: 'Africana54',
  description: 'Create, sell, buy and gift your arts. All in one place.',
  url: 'https://walletconnect.com',
  icons: ['https://github.com/anihpatrickugo/NFT-Market-Mobile/blob/main/assets/images/icon.png'],
  redirect: {
    native: 'YOUR_APP_SCHEME:/myapp/'
  }
}

const config = defaultConfig({ metadata })

// 3. Define your chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

const chains = [mainnet, polygon]

// 4. Create modal
createWeb3Modal({
  projectId,
  chains,
  config,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})




  
  const CustomDrawer: FC<Props> = (props) => {

    

    const theme = useSelector((state: RootState) => state.theme.value)
    const dispatch = useDispatch()

    const textColor = useThemeColor({ light: black, dark: grey}, 'text');
    const iconColor = useThemeColor({ light: black, dark: white}, 'text');
    const backgroundColor = useThemeColor({ light: white, dark: black1}, 'background');

    // const backgroundColor = useColorScheme()

    const changeTheme = async() => {
       if (theme === 'light') {
        dispatch(toggleTheme())
        await AsyncStorage.setItem('theme', 'dark')
       }
       else {
        dispatch(toggleTheme())
        await AsyncStorage.setItem('theme', 'light')
       }
    }

    return (
      <View style={[styles.containner, {backgroundColor: backgroundColor}]}>
        <Web3Modal/>
        
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            backgroundColor: backgroundColor,
            marginTop: -50,
            zIndex: 10,
          }}
        >

          <View style={{ flex: 1, backgroundColor: backgroundColor, paddingTop: 10 }}>
            <DrawerItemList {...props}  />
          </View>
        </DrawerContentScrollView>

        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: textColor,
            // backgroundColor: colors.cardbackground,
          }}
        >
          {/* <Text style={[styles.preferences, {color: textColor, fontFamily: "SpaceMono"}]}>Preferences</Text> */}
          <Pressable onPress={changeTheme} style={styles.switchTextContainer}>

            {theme === 'light' ?
             (<MaterialIcons name="light-mode" size={24} color="black" />)
            :
            (<MaterialIcons name="dark-mode" size={24} color="white" />)}

            <Text
              style={{
                fontSize: 12,
                color: textColor,
                fontFamily: "SpaceMono"
              }}
            >
              {theme === 'dark' ? "Light Mode" : "Dark Mode"}
            </Text>
          </Pressable>
        </View>
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: textColor }}>
          <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="share-social-outline" size={22} color={iconColor} />
              <Text
                style={{
                  fontSize: 15,
                  color: textColor,
                  marginLeft: 5,
                  fontFamily: "SpaceMono"
                }}
              >
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>

          <W3mButton/>

          
        </View>
      </View>
    );
  };
  
  export default CustomDrawer;
  
  const styles = StyleSheet.create({
    containner: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },

    userAvatar: {
      height: 67.5,
      width: 67.5,
      borderRadius: 40,
      marginBottom: 10,
      marginTop: 30,
    },
    switchTextContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
      marginLeft: 7,
      paddingVertical: 5,
    },
    preferences: {
      fontSize: 16,
      color: "#ccc",
      paddingTop: 10,
      fontWeight: "500",
      paddingLeft: 20,
    },
    switchText: {
      fontSize: 17,
      color: "",
      paddingTop: 10,
      fontWeight: "bold",
    },
  });
  