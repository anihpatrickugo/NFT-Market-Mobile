import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as UI from '@/components/common/index';
import { FC } from 'react';
import NFTList from '@/components/main/NFTList';
import { black, white0 } from '@/constants/Colors';



type HomeScreenProps = {
}

const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  
  // return (
  //   <UI.LoadingSkeleton type='details' />
  // )


  return (
    <UI.ThemedView lightColor={white0} darkColor={black} style={styles.container}>
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
        <UI.DrawerIcon navigation={navigation}/>
        <UI.ThemedText bold size='lg'>Market Place</UI.ThemedText>
      </UI.ThemedView>
       
       {/* nft  */}
       <NFTList />


    </UI.ThemedView>
  );
}

export default HomeScreen

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
