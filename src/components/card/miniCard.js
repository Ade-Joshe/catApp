import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { EmptyHeart, FilledHeart } from '../../assets'
import { AppContext, fontPixel, heightPixel, ThemeContext, widthPixel } from '../../util'

export function MiniCard({ data }) {

    const { image, name, id } = data;
    const { colors } = useContext(ThemeContext);
    const { faveCats, setFaveCats } = useContext(AppContext);

    let index = faveCats.find(cat => cat.id === id);

    const toggleFave = () => {
        let newFaveCats;
        if (index) newFaveCats = faveCats.filter(cat => cat.name !== name);
        else newFaveCats = [...faveCats, data];

        setFaveCats(newFaveCats);
    }

    return (
        <View style={styles.catListItems}>
            <Image source={{ uri: image?.url ?? "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg" }} style={{ ...styles.catImage, backgroundColor: colors.grey }} />
            <View style={styles.contentView}>
                <Text style={[{ color: colors.black }, styles.catTitle]}>{name}</Text>
                <TouchableOpacity onPress={toggleFave} style={styles.link} testID='favourite-btn'>
                    {index ? <FilledHeart /> : <EmptyHeart />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    catImage: {
        width: widthPixel(40),
        height: widthPixel(40),
        borderRadius: widthPixel(10)
    },
    catTitle: {
        paddingVertical: heightPixel(15),
        marginLeft: widthPixel(15),
        fontSize: fontPixel(16),
        fontWeight: "400"
    },
    catListItems: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: heightPixel(10),
    },
    contentView: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1, alignItems: "center"
    },
    link: {
        padding: widthPixel(10),
        borderRadius: widthPixel(30),
    }
})