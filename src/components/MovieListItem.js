import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native'

const MoviesListItem = ({ movie, navigation }) => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetail', { movieId: movie.id, })}
            style={{
                flex: 1,
                flexDirection: 'row',
                width: screenWidth / 2,
                height: '100%',
                margin: 10
            }}>
            <View style={styles.itemContainer}>
                <Image
                    resizeMode='stretch'
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={{
                        width: '100%',
                        height: 150,
                        marginRight: 15,
                        borderRadius: 20
                    }}
                />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={styles.titleText} numberOfLines={2}>
                        {movie.title}
                    </Text>
                    <Text style={styles.releaseText}>
                        {movie.release_date}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default MoviesListItem;

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 15,
        color: 'black'
    },
    itemContainer: {
        width: '100%',
        height: '100%'
    },
    releaseText: {
        fontSize: 12,
        color: 'grey'
    }
});