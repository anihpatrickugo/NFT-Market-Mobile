/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const themeColor = useSelector((state: RootState) => state.theme.value)

  
  // const theme = useColorScheme() ?? 'light';
  const theme = themeColor;
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
