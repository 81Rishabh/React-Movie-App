import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieServices from "./movieServices";

const initialState = {
  loading: false,
  popular: [],
  topRated: [],
  upcoming: [],
  searchLoading : false,
  searchResults : [],
  favourites : [],
  open: false,
  currentMovie: null,
  
  isError: false,
};

// get popular
export const getPopular = createAsyncThunk("get/popular", async (page) => {
  try {
    return await movieServices.get_popular("popular", page);
  } catch (error) {
    console.log(error);
  }
});

// get top rated
export const getTopRated = createAsyncThunk("get/topRated", async (page) => {
  try {
    return await movieServices.get_topRated("top_rated",page);
  } catch (error) {
    console.log(error);
  }
});

//  get upcoming
export const getUpcoming = createAsyncThunk("get/upComing", async (page) => {
  try {
    return await movieServices.get_upComing("upcoming",page);
  } catch (error) {
    console.log(error);
  }
});

//  get upcoming
export const getMovieById = createAsyncThunk("get/movieByID", async (id) => {
  try {
    return await movieServices.getMovieById(id);
  } catch (error) {
    console.log(error);
  }
});


// get search results
export const getSearchResults = createAsyncThunk("get/searchResults" , async (query) => {
    try {
      return await movieServices.getSearchResults(query);
    } catch (error) {
      console.log(error);
    }
})

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setOpen: (state, action) => { // handling modal open/hide
      state.open = action.payload;
      state.currentMovie = null;
    },
    setFavourite : (state,action) => {
       state.favourites.push(action.payload);
    },
    RemoveFavourite : (state,action) => {
       state.favourites = state.favourites.filter(movie => movie.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    // get search resul
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
        state.isError = false;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.isError = true;
        state.searchLoading = false;
      });

   
      // get popular movies
    builder
      .addCase(getPopular.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload;
        state.isError = false;
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
      });
   
      // get top reated movies
    builder
      .addCase(getTopRated.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload;
        state.isError = false;
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
      });
   
      // get up coming
    builder
      .addCase(getUpcoming.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        state.loading = false;
        state.upcoming = action.payload;
        state.isError = false;
      })
      .addCase(getUpcoming.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
      });

      builder
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMovie = action.payload;
        state.isError = false;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
export const { setOpen,setFavourite ,RemoveFavourite} = movieSlice.actions;
