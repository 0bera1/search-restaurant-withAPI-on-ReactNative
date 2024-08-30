import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultList({ title, results }) {
    const navigation = useNavigation();
    console.log(results);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList /*style={styles.flat}*/
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={
                            () => navigation.navigate('RestaurantDetail',
                                { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginBottom: 5,
    },

})