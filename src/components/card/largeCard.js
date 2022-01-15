import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import { EmptyHeart, FilledHeart } from '../../assets'
import { AppContext, fontPixel, heightPixel, ThemeContext, widthPixel } from '../../util'

export function LargeCard({ data }) {

    const { image, name, id } = data;
    const { colors } = useContext(ThemeContext);
    const { faveCats, setFaveCats } = useContext(AppContext);

    let index = faveCats.find(cat => cat.id === id);

    const toggleFave = () => {
        setFaveCats(faveCats.filter(cat => cat.id !== id));
    }

    const confirmFave = () => {
        Alert.alert(
            'Are you sure?',
            'Do you really want to remove this cat from your favourites?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        toggleFave()
                    }
                },
            ],
            { cancelable: true }
        );
    }

    return (
        <View style={styles.catListItems}>
            <Image source={{ uri: image?.url ?? "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg" }} style={{ ...styles.catImage, backgroundColor: colors.grey }} />
            <View style={styles.contentView}>
                <Text style={[{ color: colors.black }, styles.catTitle]} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
                <TouchableOpacity onPress={confirmFave} style={styles.link}>
                    {index ? <FilledHeart /> : <EmptyHeart />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    catImage: {
        width: widthPixel(150),
        height: widthPixel(150),
        resizeMode: "cover",
        borderRadius: widthPixel(10),
        borderWidth: 1,
        borderColor: "#d3d3d490",
    },
    catTitle: {
        paddingVertical: heightPixel(15),
        fontSize: fontPixel(12),
        fontWeight: "400",
        marginLeft: widthPixel(10),
    },
    catListItems: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: heightPixel(10),
    },
    contentView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: widthPixel(150),
    },
    link: {
        padding: widthPixel(10),
        borderRadius: widthPixel(30),
    }
});