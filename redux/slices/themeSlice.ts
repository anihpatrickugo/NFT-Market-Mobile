import { createSlice} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PayloadAction } from '@reduxjs/toolkit'

export type ThemeStateProps = {
  value: string | void;
}


const initialState: ThemeStateProps = {
  value: 'light',
}


export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
       if (state.value == "light") {
         state.value = "dark"
       } else {
         state.value = "light"
       }
    },

    setTheme: (state, action) => {
      state.value = action.payload
    },

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(themeThoggle.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.value = action.payload
    // })
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer