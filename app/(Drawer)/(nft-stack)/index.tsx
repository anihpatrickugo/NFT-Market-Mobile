import { useState, useLayoutEffect, useEffect, useContext } from 'react';
import { StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as UI from '@/components/common/index';
import { FC } from 'react';
import NFTList from '@/components/main/NFTList';
import { black, white0 } from '@/constants/Colors';
import { ethers } from 'ethers';
import nftInfo from '@/contractABI/NFT.json'
import marketplaceInfo from '@/contractABI/Marketplace.json'




type HomeScreenProps = {
}

const HomeScreen: FC<HomeScreenProps> = () => {

  // connect to web3modal



  const navigation = useNavigation();
   
  const [loading, setLoading] = useState<boolean>(false)

  const [items, setItems] = useState<any>([]);

  //nft and marketplace contract
  const [nft, setNft] = useState<any>(null)
  const [marketPlace, setMarketPlace] = useState<any>(null)


  
   // load contract
   const loadContract = async () => {
    const nftAddress = process.env.EXPO_PUBLIC_NFT_CONTRACT_ADDRESS || ''
    const marketplaceAddress = process.env.EXPO_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS || ''

    // providers and signers
    
    // const network = process.env.ETHEREUM_NETWORK;
    const provider = new ethers.providers.InfuraProvider(
      'sepolia',
      process.env.EXPO_PUBLIC_INFURA_API_KEY!
    );
   
    
    const nft = new ethers.Contract(nftAddress, nftInfo.abi, provider)
    const marketplace = new ethers.Contract(marketplaceAddress, marketplaceInfo.abi, provider)
  
    
    // set the nft  and marketplace to state
    setNft(nft) 
    setMarketPlace(marketplace)
   

  }

  const loadItems = async () => {
    
    setLoading(true)
    const itemCount = await marketPlace.itemCount()
    let items = []
    for (let i = 1; i < itemCount.toNumber(); i++) {
      const item = await marketPlace.items(i)
      if (!item.sold){
        // get uri url  from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        

        // use uri to fetch metadata
        const response = await fetch(uri)
        const metadata = await response.json()

        // get total price of item
        const totalPrice = marketPlace.totalPrice(item.tokenId)
      
        // add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        })

      }
    }
    setItems(items)
    setLoading(false)
  }

 
  

  // load contract
  useLayoutEffect(() => {
    loadContract()
    loadItems()
  }, []) 

 

  if (loading) { 
    <UI.LoadingSkeleton type='list' />
   }


  if(items.length === 0){
    return(
      <UI.ThemedView style={{justifyContent: 'center', alignItems: 'center', flex: 1}} >
          <UI.ThemedText bold>No items found</UI.ThemedText>
      </UI.ThemedView>
    ) 
  }

  return (
    <UI.ThemedView lightColor={white0} darkColor={black} style={styles.container}>
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
        <UI.DrawerIcon navigation={navigation}/>
        <UI.ThemedText bold size='lg'>MarketPlace</UI.ThemedText>
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



