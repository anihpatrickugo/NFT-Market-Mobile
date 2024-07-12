import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props extends TouchableOpacityProps {
    text: string,
    noBorder?:  boolean;
    lightColor?: string;
    darkColor?: string;
}

const Button: FC<Props> = ({text, lightColor, darkColor, noBorder, style, ...props}) => {

   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

   let variantStyles = {button: {backgroundColor: backgroundColor},  buttonText: {color: color }}



  return (
    <TouchableOpacity style={[style, styles.button, variantStyles.button]} {...props}>
            <Text style={[styles.buttonText, variantStyles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 20,
        borderRadius: 16,
      },
    
      buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        fontFamily: "SpaceMono"
      }
})
export {Button};