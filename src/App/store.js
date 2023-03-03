import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/Movies/movieSlice";

const store = configureStore({
     reducer : {
       movies : movieSlice
     }
});

export default store;