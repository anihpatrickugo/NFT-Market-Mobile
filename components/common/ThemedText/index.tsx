import { Text, type TextProps, StyleSheet, StyleProp } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" |"2xl",
  bold?: boolean
};

type VariantProps = {
  fontSize: number | null, 
  lineHeight: number | null, 
  fontWeight: number | string | null, 
  color: string | null,
  fontFamily: string | null
}

const ThemedText = ({
  style,
  lightColor,
  darkColor,
  size = 'sm',
  bold = false,
  ...rest
}: ThemedTextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  let variantStyles: VariantProps  = {fontSize: null, lineHeight: null, fontWeight: null, color: color, fontFamily: "SpaceMono"}


  
//   custom sizes
switch(size){
  case "xs":
      variantStyles = {...variantStyles, fontSize: 12}
      break;
  case "sm":
      variantStyles = {...variantStyles, fontSize: 14}
      break;
  case "md":
      variantStyles = {...variantStyles, fontSize: 16, lineHeight: 30}
      break;
  case "lg":
      variantStyles = {...variantStyles, fontSize: 20}
      break;
  case "xl":
      variantStyles = {...variantStyles, fontSize: 24}
      break;

  case "2xl":
      variantStyles = {...variantStyles, fontSize: 28}
      break;
  default: 
     variantStyles= {...variantStyles, fontSize: 10}
}

// bold
switch (bold){
  case true:
      variantStyles = {...variantStyles, fontWeight: "bold"}
      break;
  default:
      variantStyles = {...variantStyles, fontWeight: null}
}

  return (
    <Text style={[style, variantStyles]} {...rest} />
  );
}



export {ThemedText}
