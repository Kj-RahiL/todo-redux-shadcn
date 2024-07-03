import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    todos: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    },
})

// Action creators are generated for each case reducer function


export default counterSlice.reducer