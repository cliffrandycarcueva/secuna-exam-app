import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SIGNUP_URL = "http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/signup";

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

export const signUpUser = createAsyncThunk('signup/signUpUser', async (signupUser) => {
    const response = await axios.post(SIGNUP_URL, headers,  signupUser)
    return response.data
})

const signUpSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        userSignedUp : {
            reducer(state, action) {
                state.signup.push(action.payload)
            },
            prepare(username, email, password, password_confirmation) {
                return {
                    payload: {
                        username,
                        email,
                        password,
                        password_confirmation
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
                .addCase(signUpUser.pending, (state, action) => {
                    console.log(action);
                    state.status = 'loading';
                })
                .addCase(signUpUser.fulfilled, (state, action) => {
                    console.log(action);
                    state.status = 'succeeded';
                })
                .addCase(signUpUser.rejected, (state, action) => {
                    console.log(action);
                    state.status = 'failed';
                })

    }
})

export const { userSignedUp } = signUpSlice.actions

export default signUpSlice.reducer