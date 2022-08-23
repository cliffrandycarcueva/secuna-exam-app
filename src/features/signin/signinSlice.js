import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SIGNIN_URL = "http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/signin";

const initialState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const headers = {
    'Server': 'nginx/1.18.0 (Ubuntu)',
    'Content-Type': 'application/json',
    'Transfer-Encoding': 'chunked',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache, private',
    'Date': 'Sat, 23 Jul 2022 03:29:31 GMT',
    'X-RateLimit-Limit': '60',
    'X-RateLimit-Remaining': '59',
    'Access-Control-Allow-Origin': '*',
}

export const signInUser = createAsyncThunk('signin/signInUser', async (signinUser) => {
    const response = await axios.post(SIGNIN_URL, headers,  signinUser)
    return response.data
})

const signInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        userSignIn : {
            reducer(state, action) {
                state.signin.push(action.payload)
            },
            prepare(email, password) {
                return {
                    payload: {
                        email,
                        password
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
                .addCase(signInUser.pending, (state, action) => {
                    console.log(action);
                    state.status = 'loading';
                })
                .addCase(signInUser.fulfilled, (state, action) => {
                    console.log(action);
                    state.status = 'succeeded';
                })
                .addCase(signInUser.rejected, (state, action) => {
                    console.log(action);
                    state.status = 'failed';
                })

    }
})

export const { userSignedIn } = signInSlice.actions

export default signInSlice.reducer