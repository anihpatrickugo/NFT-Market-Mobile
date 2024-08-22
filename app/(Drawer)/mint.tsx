import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as UI from '@/components/common/index';
import { Ionicons } from '@expo/vector-icons';
import { black, black3, grey, white0 } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { showToast } from '@/hooks/toast';
import { router } from 'expo-router';
import { uploadNFTURI } from '@/hooks/uploadURI';

import { ethers } from 'ethers'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5-react-native'
import nftInfo from '@/contractABI/NFT.json'
import marketplaceInfo from '@/contractABI/Marketplace.json'
import { useDispatch } from 'react-redux';
import { setNFTContract } from '@/redux/slices/contractsSlice';



export default function TabTwoScreen() {

  
  // nft and marketplace contract
  const [nft, setNft] = useState<any>(null)
  const [marketPlace, setMarketPlace] = useState<any>(null)
 
  // loading and error
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string|null>(null)
  
    // nft mint details
  const [photo, setPhoto] = useState<string|null>(null);
  const [name, setName] = useState<string|null>(null);
  const [description, setDescription] = useState<string|null>(null);
  const [amount, setAmount] = useState<string|null>(null);


  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { isConnected } = useWeb3ModalAccount()

   // connect to web3modal
   const { walletProvider } = useWeb3ModalProvider()

   
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
  
    }
  };


   // load contract
   const loadContract = async () => {
    const nftAddress = process.env.EXPO_PUBLIC_NFT_CONTRACT_ADDRESS || ''
    const marketplaceAddress = process.env.EXPO_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS || ''

    // providers and signers
    const provider = new ethers.providers.Web3Provider(walletProvider as any)
    const signer = provider.getSigner()
    
    const nft = new ethers.Contract(nftAddress, nftInfo.abi, signer)
    const marketplace = new ethers.Contract(marketplaceAddress, marketplaceInfo.abi, signer)
  
    
    // set the nft  and marketplace to state
    setNft(nft) 
  
    setMarketPlace(marketplace)
    console.log(nft.address)

  }

   
  
    //  mint token
    const handleMint = async () => {

      if (!isConnected){
        showToast({message: 'Connect your wallet', type: 'error'})
        return
      } 

    //  check that there must me a photo
    if (photo === null || photo === '' || photo === undefined) {
      showToast({message: 'Please select a photo', type: 'error'})
      return
    }

    // check that there must be a name
    if (name === null || name === '' || name === undefined) {
      showToast({message: 'Please enter a name', type: 'error'})
      return
    }

    // check that there must be a description
    if (description === null || description === '' || description === undefined) {
      showToast({message: 'Please enter a description', type: 'error'})
      return
    }

    // check that there must be an amount
    if (amount === null || amount === '' || amount === undefined) {
      showToast({message: 'Please enter an amount', type: 'error'})
      return
    }

     // mint a token
       try{
        setLoading(true)

        const uri = await uploadNFTURI(name, description, photo)

        // mint token
        await (await nft.mint(uri)).wait()

        // get token id of new mint
        const id = await nft.tokenCount()

        // aprove marketplace to spend nft
        await (await nft.setApprovalForAll(marketPlace.address, true)).wait()

        //add nft to marketplace
        const listingPrice = ethers.utils.parseEther(amount)
        await (await marketPlace.listItem(nft.address, id, listingPrice)).wait()

        // send a toast and push to home
        router.push("(nft-stack)/index")
        showToast({message: 'Minted successfully', type: 'success'})
       



      }catch(e: any){
        showToast({message: e.message, type: 'error' })
      }finally{
         setLoading(false)
      }
    }
  

    // load contract
    useLayoutEffect(() => {
      loadContract()
    }, [walletProvider])

 
  if (loading){
    return (
      <UI.Loading/>
    )
  }


  return (
     <UI.ThemedView lightColor={white0} darkColor={black} style={styles.container}>

      <KeyboardAvoidingView  enabled behavior='position' >
      
      {/* header */}
      <UI.ThemedView lightColor='transparent' darkColor='transparent' style={styles.titleContainer}>
          
          <UI.DrawerIcon navigation={navigation}/>
  
          <UI.ThemedText bold size='lg'>New Mint</UI.ThemedText>
        </UI.ThemedView>


       
       {/* form */}
       <View style={{width: "100%", gap: 12}}>

           <UI.ThemedText size='xs' style={{textAlign: "center"}}>
           Once your item is minted you will not be able to change any of its information.</UI.ThemedText>

           <TouchableOpacity style={styles.imageContainner} onPress={pickImage}>
               {photo ? 
                <Image style={{width: "100%", height:"100%", borderRadius: 20}} source={{uri: photo}}/>
               : 
               <Ionicons name="image" size={190} color={grey} />
               }
           </TouchableOpacity>

           <TextInput style={styles.textInput} onChangeText={(text)=>setName(text)} placeholderTextColor={black3} placeholder='Name' />
          
           <TextInput style={[styles.textInput, {height: 100, }]} onChangeText={(text)=>setDescription(text)} placeholderTextColor={black3} multiline placeholder='Description'/>
            
           <TextInput style={styles.textInput} onChangeText={(text)=>setAmount(text)} keyboardType='numeric' placeholderTextColor={black3} placeholder='Amount in ETH' />

           <UI.Button text='Mint and List' onPress={handleMint}/>

       </View>
       </KeyboardAvoidingView>
    </UI.ThemedView>
  );
}

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

imageContainner: {
  width: "100%",
  height: 200,
  alignItems: "center", 
  borderColor: grey,
  borderWidth: 1,
  borderRadius: 20,
  },

textInput: {
    width: '100%',
    height: 50,
    borderColor: grey,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    color: grey
  }

});
