import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as UI from '@/components/common/index';
import { FC } from 'react';
import { black, white0 } from '@/constants/Colors';
import ListingsList from '@/components/main/ListingsList';


type ListingScreenProps = {
}

const ListingScreen: FC<ListingScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <UI.ThemedView lightColor={white0} darkColor={black} style={styles.container}>
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
        <UI.DrawerIcon navigation={navigation}/>

        <UI.ThemedText bold size='lg'>My Listings</UI.ThemedText>
      </UI.ThemedView>
       
       {/* nft  */}
       <ListingsList />


    </UI.ThemedView>
  );
}

export default ListingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 35,
    
},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    justifyContent: "space-between",
  },



});
