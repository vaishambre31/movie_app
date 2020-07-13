import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux';

import { get_movie } from '../store/actions/MovieActions'

const MovieDetails = ({ route, movie, get_movie }) => {
    const { movieId } = route.params;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Get_MovieById(movieId)
    }, [])

    const Get_MovieById = async (id) => {
        setLoading(true)
        await get_movie(id);
        setLoading(false)
    }

    if (loading) {
        return <ActivityIndicator color="red" size="large" />
    }

    return (
        <ScrollView
            style={{ backgroundColor: '#e0e0e0' }}
            showsVerticalScrollIndicator={false}>
            {movie &&
                <View>
                    <View style={{ height: 200, width: '100%', opacity: .6 }}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
                            style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                    </View>

                    <View style={{ height: 200, width: '100%', marginTop: -150 / 2, }}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            style={{ height: '100%', width: '100%', resizeMode: 'contain', borderRadius: 15 }} />
                    </View>

                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Title</Text>
                        <Text style={styles.title} >
                            {movie.title}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Overview </Text>
                        <Text style={styles.overview}>{movie.overview}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Language : </Text>
                            <Text style={styles.amountText}>{movie.original_language}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Release Date : </Text>
                            <Text style={styles.amountText}>{movie.release_date}</Text>
                        </View>
                    </View>
                </View>
            }
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    movie: state.Movie.movie,
});

export default connect(mapStateToProps, { get_movie })(MovieDetails);

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'black'
    },
    subtitleText: {
        fontSize: 18,
        marginVertical: 15,
        color: 'gray'
    },
    overview: {
        fontSize: 16,
        marginTop: 15,
        color: 'black',
    },
    amountText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
    },
});