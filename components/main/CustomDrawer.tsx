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
    useColorScheme
  } from "react-native";
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from "@react-navigation/drawer";
  
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from "@/hooks/useThemeColor";
import { white, black, grey, black1} from "@/constants/Colors";

import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";


  type Props = {
    state: any,
    navigation: any,
    descriptors: any,
  };


  
  const CustomDrawer: FC<Props> = (props) => {

    const theme = useSelector((state: RootState) => state.theme.value)
    const dispatch = useDispatch()

    const textColor = useThemeColor({ light: black, dark: grey}, 'text');
    const iconColor = useThemeColor({ light: black, dark: white}, 'text');
    const backgroundColor = useThemeColor({ light: white, dark: black1}, 'background');

    // const backgroundColor = useColorScheme()

    return (
      <View style={[styles.containner, {backgroundColor: backgroundColor}]}>
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
          <Text style={[styles.preferences, {color: textColor, fontFamily: "SpaceMono"}]}>Preferences</Text>
          <View style={styles.switchTextContainer}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor="#f4f3f4"
              style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
              onChange={()=>{dispatch(toggleTheme())}}
              value={theme === 'dark' ? true : false}
            />
            <Text
              style={{
                fontSize: 15,
                color: textColor,
                fontFamily: "SpaceMono"
              }}
            >
              Dark Theme
            </Text>
          </View>
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
          <TouchableOpacity style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color={iconColor} />
              <Text
                style={{
                  fontSize: 15,
                  color: textColor,
                  marginLeft: 5,
                  fontFamily: "SpaceMono"
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
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
  