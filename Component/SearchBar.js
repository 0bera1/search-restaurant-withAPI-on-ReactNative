import { StyleSheet, TextInput, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.bgStyle}>
            <EvilIcons style={styles.iconStyle}
                name="search" size={34} color="black" />
            <TextInput style={styles.inputStyle}
                placeholder='Ara'
                autoCorrect={false}
                // autoCapitalize='none' // Büyük Harfle Başlamasını Engelliyor
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bgStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        height: 50,
        margin: 10,
        alignItems: 'center',
        // borderWidth:0.5,
        // borderColor:'transparent',
        borderRadius: 80,
        elevation: 12

    },
    iconStyle: {
        marginHorizontal: 15,
        flex: 1

    },
    inputStyle: {
        flex: 10,
        fontSize: 16

    },

})