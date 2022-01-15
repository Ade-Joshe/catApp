import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { MiniCard, EmptyCard, PageTitle } from '../../components';
import { widthPixel } from '../../util';

export const HomeScreen = () => {

    const [cats, setCats] = useState([]);
    const [pageStatus, setPageStatus] = useState("loading");

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                setCats(data);
            })
            .catch(() => setPageStatus("error"))
    }, []);

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={<PageTitle>All Cats</PageTitle>}
            data={cats}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => <MiniCard data={item} />}
            ListEmptyComponent={<EmptyCard status={pageStatus} />}
            initialNumToRender={20}
        />
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: widthPixel(25)
    }
})