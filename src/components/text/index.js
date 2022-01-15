import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { fontPixel, heightPixel, ThemeContext } from '../../util'

export const PageTitle = ({ children }) => {
    const { colors } = useContext(ThemeContext);
    return <Text style={[styles.title, { color: colors.black, }]}>{children}</Text>
};

const styles = StyleSheet.create({
    title: { fontSize: fontPixel(16), marginVertical: heightPixel(25), fontWeight: "600" }
})
