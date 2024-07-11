import React, { FC } from 'react'
import { SafeAreaView, ViewProps, StyleSheet } from 'react-native'


export type ContainnerViewProps = ViewProps & {
    children: React.ReactNode

  };

const ContainnerView: FC<ContainnerViewProps> = ({children}) => {
  return (
    <SafeAreaView style={[styles.container, ]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 35,
        backgroundColor: "F5F5F5"
        
    },
})

export {ContainnerView};
