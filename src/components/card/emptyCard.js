import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { FilledHeart } from '../../assets';
import { heightPixel, ThemeContext, widthPixel } from '../../util'

export const EmptyCard = ({ status }) => {

    const { colors } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            {
                status === "loading" ?
                    <>
                        <ActivityIndicator size={widthPixel(30)} style={styles.loader} />
                        <Text style={{ color: colors.black, ...styles.dataText }}>Loading...</Text>
                    </>
                    :
                    status === "error" ?
                        <Text style={{ color: colors.black, ...styles.dataText, ...styles.loader }}>No data found!</Text>
                        :
                        status === "emptyFav" ?
                            <>
                                <Text style={{ color: colors.black + "90", ...styles.dataText, ...styles.loader }}>We keep your favouites here</Text>
                                <FilledHeart />
                            </>
                            :
                            <Text>""</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center",
    },
    loader: {
        marginTop: "40%"
    },
    dataText: {
        fontSize: heightPixel(15), marginVertical: heightPixel(10)
    }
})
