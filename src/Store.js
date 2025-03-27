import {configureStore} from  '@reduxjs/toolkit' 
import Moveslice from './Moveslice'



 export const Store =  configureStore ({
    reducer:{
        movies : Moveslice
    }
})