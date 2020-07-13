import { GET_ALL_MOVIES, GET_ALL_GENRE, GET_MOVIE, SET_GENRE_ID } from '../types';

const initialState = () => ({
    movies: [],
    genre: [],
    movie: null,
    genreId: null
});

export default (state = initialState(), action) => {

    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };

        case GET_ALL_GENRE:
            return {
                ...state,
                genre: action.payload,
                genreId: action.payload.length !== 0 ? action.payload[0].id : null
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        case SET_GENRE_ID:
            return {
                ...state,
                genreId: action.payload
            };
        default:
            return state;
    }
}