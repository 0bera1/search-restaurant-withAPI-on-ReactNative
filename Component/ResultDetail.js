import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image style={styles.Image}
                source={result.image_url ?
                    { uri: result.image_url } : null} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating}  ★</Text>
            <Text>{result.review_count} Değerlendirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,

    },
    Image: {
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        height: 120,
        marginBottom: 5,
    },
    name: {
        fontSize: 17,
        fontWeight: '500',
        borderBottomWidth: 0.5,
        borderColor: 'darkgray',
    }
})