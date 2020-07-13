import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { get_genre } from '../store/actions/MovieActions'
import Tags from './Tags';
import MoviesList from './MoviesList';
import colors from '../constants/colors';

const GenreList = ({ navigation, get_genre, genre, genreId }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Get_Genres()
    }, [])

    const Get_Genres = async () => {
        setLoading(true)
        await get_genre();
        setLoading(false)
    }

    if (loading) return <ActivityIndicator size="large" color={colors.colorAccent} />

    return (
        <>
            <View style={styles.genreContainer}>
                {
                    genre.length !== 0
                        ? <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={genre}
                            renderItem={({ item }) => (
                                <>
                                    <Tags title={item.name} id={item.id} />
                                </>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        : <Text style={styles.noDataText}>No Data Found</Text>
                }
            </View>
            {
                genre.length === 0 || genreId === null
                    ? <View style={styles.noData}>
                        <Text style={styles.noDataText}>No Data Found</Text>
                    </View>
                    : <MoviesList navigation={navigation} genreId={genreId} />

            }
        </>
    )

}

const mapStateToProps = (state) => ({
    genre: state.Movie.genre,
    genreId: state.Movie.genreId
});

export default connect(mapStateToProps, { get_genre })(GenreList);

const styles = StyleSheet.create({
    genreContainer: {
        marginVertical: 10
    },
    noData: {
        flex: 1,
        alignItems: 'center'
    },
    noDataText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})