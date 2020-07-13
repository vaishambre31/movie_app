import React from 'react'
import { View } from 'react-native'
import GenreList from '../components/GenreList'

const MovieScreen = (props) => {
    return <View style={{ flex: 1 }}>
        <GenreList navigation={props.navigation} />
    </View>
}

export default MovieScreen