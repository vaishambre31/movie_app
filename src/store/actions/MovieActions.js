import { GET_ALL_GENRE, GET_ALL_MOVIES, GET_MOVIE, SET_GENRE_ID } from '../types'
import config from '../../config';
import { Set_error } from '../../utils';

const get_movies = genre_id => async dispatch => {
    try {

        const headers = await {
            'Content-Type': 'application/json',
        };

        const result = await fetch(`${config.url}/3/genre/${genre_id}/movies?api_key=${config.api_key}`, headers);

        if (result.status === 200) {
            const res = await result.json();
            dispatch({
                type: GET_ALL_MOVIES,
                payload: res.results
            });

        } else {
            Set_error('Failed To load data')
        }
    } catch (error) {
        Set_error(error)
    }
}

const get_movie = movie_id => async dispatch => {
    try {

        const headers = await {
            'Content-Type': 'application/json',
        };

        const result = await fetch(
            `${config.url}/3/movie/${movie_id}?api_key=${config.api_key}`,
            headers
        );

        if (result.status === 200) {
            const res = await result.json();

            dispatch({
                type: GET_MOVIE,
                payload: res
            });
        } else {
            Set_error('Failed To load data')
        }
    } catch (error) {
        Set_error(error)
    }
}

const get_genre = () => async dispatch => {
    try {

        const headers = await {
            'Content-Type': 'application/json',
        };
        const result = await fetch(`${config.url}/3/genre/movie/list?api_key=${config.api_key}`, headers);

        if (result.status === 200) {
            const res = await result.json();

            dispatch({
                type: GET_ALL_GENRE,
                payload: res.genres
            });
        } else {
            Set_error('Failed To load data')
        }
    } catch (error) {
        Set_error(error)
    }
}

const set_genre_id = (id) => dispatch => {

    dispatch({
        type: SET_GENRE_ID,
        payload: id
    })
}

export {
    get_movies,
    get_movie,
    get_genre,
    set_genre_id
}