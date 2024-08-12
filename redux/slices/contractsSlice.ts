import { createSlice} from '@reduxjs/toolkit'



const initialState: any = {
  value: {
    marketPlaceContract: null,
    NFTContract: null
  },
}


export const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {

    setNFTContract: (state, action) => {
        state.value.NFTContract = action.payload
    },
    
    setMarketPlaceContract: (state, action) => {
        state.value.marketPlaceContract = action.payload
    },

  },
  
})

// Action creators are generated for each case reducer function
export const { setNFTContract, setMarketPlaceContract } = contractsSlice.actions

export default contractsSlice.reducer