import { black, black0, white, white0 } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import {Text, Modal, StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
const {width, height} = Dimensions.get("screen")

const Loading = () => {
 
  const backgroundColor = useThemeColor({ light: 'white', dark: 'transparent' }, 'background');
  const boxColor = useThemeColor({ light: white0, dark: black0 }, 'background');
  const textColor = useThemeColor({ light: black, dark: white }, 'text');
  
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        
        >
        <View style={[styles.containner, {backgroundColor: backgroundColor}]}>

          <View style={[styles.modalView, {backgroundColor: boxColor}]}>
            <ActivityIndicator size="large" color={textColor} /> 
            <Text style={[styles.loadingText,{color: textColor}]}>Loading...</Text>

          </View>

        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  containner: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },

  loadingText: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 16,
    fontFamily: "SpaceMono"
  }
});

export {Loading};