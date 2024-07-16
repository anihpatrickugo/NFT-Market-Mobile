import { StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as UI from '@/components/common/index';
import { FC } from 'react';
import { black, white0 } from '@/constants/Colors';
import MyAssetsList from '@/components/main/MyAssetsList';


type HomeScreenProps = {
}

const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <UI.ThemedView lightColor={white0} darkColor={black} style={styles.container}>
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
        <UI.DrawerIcon navigation={navigation}/>

        <UI.ThemedText bold size='lg'>My Assets</UI.ThemedText>
      </UI.ThemedView>
       
       {/* nft  */}
       <MyAssetsList />


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
