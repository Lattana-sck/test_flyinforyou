import { configureStore, createSlice } from "@reduxjs/toolkit";
import { list } from "../src/Views/list-de-films";

const initState = {
  movies: list,
  moviesLiked: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initState,
  reducers: {
    likeMovie: (state, action) => {
      const movie = state.movies?.find((m) => m.id === action.payload.id);
      movie.liked = action.payload.liked;
      movie.vote_count = action.payload.liked ? movie.vote_count + 1 : movie.vote_count - 1;
      state.moviesLiked = state.movies.filter((m) => m.liked === true);
    },
  },
});

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});
