import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Api fetch

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    let response = await axios.get("http://localhost:5000/item")
    return response.data
})

// Increment Quantity

export const addQuantity = createAsyncThunk("addQuantity", async (id) => {
    const response = await axios.get(`http://localhost:5000/item/${id}`)
    const updatedItem = {
        ...response.data,
        quantity: response.data.quantity + 1
    }
    await axios.put(`http://localhost:5000/item/${id}`, updatedItem)
    return updatedItem
})

// Decrement Quantity

export const removeQuantity = createAsyncThunk("removeQuantity", async (id) => {
    const response = await axios.get(`http://localhost:5000/item/${id}`)
    const updatedItem = {
        ...response.data,
        quantity: response.data.quantity - 1
    }
    await axios.put(`http://localhost:5000/item/${id}`, updatedItem)
    return updatedItem
})

// Redux slice

export const Api = createSlice({
    name: "Api",
    initialState: { data: [], loading: true },
    reducer: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchApi.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(addQuantity.fulfilled, (state,action) => {
            const itemIndex = state.data.findIndex((e) => e.id === action.payload.id)
            if(itemIndex > -1) {
                state.data[itemIndex] = action.payload
            }
        })
        .addCase(removeQuantity.fulfilled,(state,action) => {
            const itemIndex = state.data.findIndex((e) => e.id  === action.payload.id)
            if(itemIndex > -1) {
                state.data[itemIndex] = action.payload
            }
        })
    }
})

export default Api.reducer