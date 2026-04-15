import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { Component } from 'react'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//steps:
// create store
// wrap app Component under Provider
// create Slice 
// register reducer in store

