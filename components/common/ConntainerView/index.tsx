import React, { FC } from 'react'
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native'


export type ContainnerViewProps = ScrollViewProps & {
    children: React.ReactNode

  };

const ContainnerView: FC<ContainnerViewProps> = ({children}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        
    },
})

export {ContainnerView};
