import React, { FC } from 'react'
import { FlatList, View, StyleSheet, Dimensions } from 'react-native'
import {grey, black, white, lightGrey, black0, white0, black3,} from '@/constants/Colors'
import { Skeleton } from  'moti/skeleton'
import { useThemeColor } from '@/hooks/useThemeColor'


type Props = {
  type: 'list' | 'details'
}

const LoadingSkeleton: FC<Props> = ({type}) => {

    const backgroundColor = useThemeColor({ light: white0, dark: black }, 'background');
    const colorFrom = useThemeColor({ light: white0, dark: black }, 'text');
    const colorTo = useThemeColor({ light: lightGrey, dark: black0 }, 'text');
   
    const data =new Array(2); 

    const skeletonCommonProps = {
        colorMode: "light",
        colors: [colorFrom, colorTo],
    } 

  if (type === 'details') {
    return (
      <Skeleton.Group show>
        <View style={{paddingVertical: 60, paddingHorizontal:16, gap: 20,  width: "100%", backgroundColor}}>
          <View style={{alignSelf: "center"}}>
            <Skeleton height={200} width={400} radius='square' {...skeletonCommonProps} />
          </View>

          <Skeleton height={30} width={150} radius='round' {...skeletonCommonProps} />
          <Skeleton height={20} width={200} radius='round' {...skeletonCommonProps} />

          <View style={{gap: 16}}>
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          <Skeleton height={10} width={400} radius='round' {...skeletonCommonProps} />
          </View>
        </View>
      </Skeleton.Group>
    )

  }
    
  return (
    
    <FlatList
    overScrollMode='never'
    data={data}
    contentContainerStyle={{paddingTop: 20, paddingBottom: 20, alignItems: 'center', gap: 16} }
    keyExtractor={(_, index) => index.toString()}
    style={{height: 400, width: '100%', backgroundColor: backgroundColor}}
    renderItem={
     () => (
     
   <Skeleton.Group show>
      <View style={styles.transactionItem} >

      <Skeleton height={200} width={280} radius='square'  {...skeletonCommonProps}/>

      <Skeleton height={30} width={100} radius='round' {...skeletonCommonProps} />

       <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>

             <Skeleton height={50} width={50} radius='round' {...skeletonCommonProps} />
           
           <View style={{marginLeft: 6, gap: 12}}>
              <Skeleton height={18} width={200} radius='round' {...skeletonCommonProps} />
              
              <Skeleton height={10} width={100} radius='round' {...skeletonCommonProps} />
     
           </View>
       </View>

       

    </View>
   </Skeleton.Group>
     )
    }
    showsVerticalScrollIndicator={false}
  />
  )
}


const styles = StyleSheet.create({
    transactionItem: {
        width: "100%",
        gap: 14,
        justifyContent: 'space-between',
        
    }
})

export {LoadingSkeleton}