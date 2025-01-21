import { View, Text, StyleSheet } from 'react-native';
import React from "react";
import EmbeddableGLIncome from "@/app/EmbeddableGLIncome";

export default function Tab() {
    return (
        <View style={styles.container}>
            {/*2. under tab: working*/}
            <Text>This is index tab</Text>
            <EmbeddableGLIncome />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});
