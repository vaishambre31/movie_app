import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { Text, FlatList, ActivityIndicator } from 'react-native'
import { get_movies } from '../store/actions/MovieActions'
import MoviesListItem from './MovieListItem';
import colors from '../constants/colors';

const MoviesList = ({ genreId, get_movies, movie, navigation, genres }) => {

    const [loading, setLoading] = useState(false);
    const [genreName, setGenreName] = useState('');

    useEffect(() => {
        Getmovies(genreId)
    }, [genreId])

    const Getmovies = async (genreId) => {
        setLoading(true)
        await get_movies(genreId);

        const genreList = genres.filter(i => i.id === genreId)
        const name = genreList[0].name
        setGenreName(name)
        // console.warn(name)
        setLoading(false)
    }

    if (loading) {
        return <ActivityIndicator color={colors.colorAccent} size="large" />
    }

    return (
        <>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 10 }}>
                {`List Of ${genreName} Movies`}
            </Text>
            <FlatList
                data={movie}
                numColumns={2}
                renderItem={({ item }) => <MoviesListItem
                    navigation={navigation}
                    movie={item}
                />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}


const mapStateToProps = (state) => ({
    movie: state.Movie.movies,
    genres: state.Movie.genre,
    loading: state.Movie.loading,
});

export default connect(mapStateToProps, { get_movies })(MoviesList);
