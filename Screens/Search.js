import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../Component/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../Component/ResultList';

export default function Search() {
    const [searchAPI, results, setErrorMessage] = useResult();
    const [term, setTerm] = useState('');
    console.log(results);

    const FilterResultByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm}
                onTermSubmit={() => {
                    searchAPI(term)
                }}
            />
            {setErrorMessage ? <Text>{setErrorMessage}</Text> : <>
                {results.length == 0 ? (<Text style={styles.err}>İnternet Bağlantınızı kontrol ediniz ya da aradığınız sonuç bulunamadı.</Text>) : <>
                    <ResultList title='Ucuz Restaurantlar'
                        results={FilterResultByPrice('₺')} />
                    <ResultList title='Uygun Restaurantlar'
                        results={FilterResultByPrice('₺₺')} />
                    <ResultList title='Pahalı Restaurantlar'
                        results={FilterResultByPrice('₺₺₺')} />
                </>}
            </>}



        </View>
    )
};
const styles = StyleSheet.create({
    err: {
        alignSelf: 'center',
        marginVertical: 300,
        fontStyle: 'italic',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 20,

    }
})