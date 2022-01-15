import React, { useContext } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { EmptyCard, LargeCard, PageTitle } from '../../components';
import { AppContext, widthPixel } from '../../util';

export const FavouriteScreen = () => {
    const { faveCats } = useContext(AppContext);

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={<PageTitle>Cats I Love</PageTitle>}
            data={faveCats}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => <LargeCard data={item} />}
            ListEmptyComponent={<EmptyCard status={"emptyFav"} />}
            initialNumToRender={20}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: widthPixel(25),
    }
});