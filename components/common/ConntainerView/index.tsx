import { useThemeColor } from '@/hooks/useThemeColor';
import React, { FC } from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'



export type ContainnerViewProps = ViewProps & {
    children: React.ReactNode,
    

  };

const ContainnerView: FC<ContainnerViewProps> = ({children}) => {
  

  return (
    <View style={[styles.container ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 35,
        
    }
})

export {ContainnerView};
