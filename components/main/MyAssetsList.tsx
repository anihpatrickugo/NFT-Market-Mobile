import React from 'react'
import { FlatList } from 'react-native';
import MyAssetCard from './MyAssetCard';


const MyAssetsList = () => {
  return (
    <FlatList
      style={{width: "90%", flex: 1, marginTop: 20}}
      contentContainerStyle={{gap: 20}}
      data={[1, 2, 3, 4,]}
      renderItem={(item) => <MyAssetCard item={item}/>}
      keyExtractor={(item) => item.toString()}
      showsVerticalScrollIndicator={false}
     />
  )
}

export default MyAssetsList