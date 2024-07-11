import React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import NFTCard from './NFTCard';
import * as UI from '@/components/common/index';

const NFTList = () => {
  return (
    <FlatList
      style={{width: "90%", flex: 1, marginTop: 20}}
      contentContainerStyle={{gap: 20}}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      renderItem={(item) => <NFTCard item={item}/>}
      keyExtractor={(item) => item.toString()}
      showsVerticalScrollIndicator={false}
     />
  )
}

export default NFTList
