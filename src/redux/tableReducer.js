import { createSlice } from '@reduxjs/toolkit'

export const tableRedux = createSlice({
  name: 'tableReducer',
  initialState: {
    data: [],
    isEditingRow: false,
    fetching: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    deleteItemById: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload)
    },
    updateItem: (state, action) => {
      state.data = state.data.map(item => {
        if (item.id === action.payload.id)  return action.payload
        else return item
      })
    },
    setFetching: (state, action) => {
      state.fetching = action.payload
    },
    setEditingRow: (state, action) => {
      state.isEditingRow = action.payload
    }
  }
})

export const {
  setData,
  deleteItemById,
  updateItem,
  setFetching,
  setEditingRow
} = tableRedux.actions

export default tableRedux.reducer


