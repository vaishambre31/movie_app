import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome";

import { set_genre_id } from '../store/actions/MovieActions';
import color from "../constants/colors";
import colors from '../constants/colors';

const Tags = ({ id, title }) => {
    const dispatch = useDispatch();
    const genreId = useSelector(state => state.Movie.genreId)

    const handlePress = () => {
        dispatch(set_genre_id(id))
    }

    return (
        <TouchableOpacity onPress={() => handlePress()}>
            <View style={styles.tagView}>
                <View style={styles.tagContainer}>
                    {
                        id === genreId && <Icon name="check" size={26} color={color.colorPrimary} />
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default Tags

const styles = StyleSheet.create({
    tagView: {
        backgroundColor: colors.colorWhite,
        shadowColor: colors.colorBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: colors.colorGrey
    },
    title: {
        color: colors.colorBlack,
        padding: 10
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5
    }
});