import { StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as UI from '@/components/common/index';
import { FC } from 'react';
import NFTList from '@/components/main/NFTList';


type HomeScreenProps = {
}

const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <UI.ContainnerView>
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
        <UI.DrawerIcon navigation={navigation}/>

        <Image style={{width: 35, height: 35, borderRadius: 35}} source={require('@/assets/images/profile.png')}/>
      </UI.ThemedView>
       
       {/* nft  */}
       <NFTList />


    </UI.ContainnerView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    justifyContent: "space-between",
  },



});
