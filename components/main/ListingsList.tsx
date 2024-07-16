import React from 'react'
import { FlatList} from 'react-native';
import ListingCard from './ListingCard';

const ListingsList = () => {
  return (
    <FlatList
      style={{width: "90%", flex: 1, marginTop: 20}}
      contentContainerStyle={{gap: 20}}
      data={[1, 2, 3, 4,]}
      renderItem={(item) => <ListingCard item={item}/>}
      keyExtractor={(item) => item.toString()}
      showsVerticalScrollIndicator={false}
     />
  )
}

export default ListingsList