import React from 'react'
import { FlatList } from 'react-native';
import NFTCard from './NFTCard';


const NFTList = ({items}: any) => {
  return (
    <FlatList
      style={{width: "90%", flex: 1, marginTop: 20}}
      contentContainerStyle={{gap: 20}}
      data={items}
      renderItem={(item) => <NFTCard item={item}/>}
      keyExtractor={(item) => item.toString()}
      showsVerticalScrollIndicator={false}
     />
  )
}

export default NFTList
