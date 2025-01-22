import React, {useEffect} from "react";
import { Text, View } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';

import EmbeddableGLIncome from "@/app/EmbeddableGLIncome";
import {AnotherClickableComponent} from "@/app/AnotherClickableComponent";

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1,
            // alignItems: 'center',
            justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
        </Button>
            <EmbeddableGLIncome />
     </View>
);
}

function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1,
            // alignItems: 'center',
            justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
    <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    <EmbeddableGLIncome />

    </View>
);
}

const MyDrawer = createDrawerNavigator({
    screens: {
        Home: HomeScreen,
        Profile: ProfileScreen,
    },
});

// const Navigation = createStaticNavigation(MyDrawer);


export default function App() {
    return (
        // 1. just component: working
        // <>
        //     This is root index
        //     <EmbeddableGLIncome />
        //     {/*<AnotherClickableComponent />*/}
        // </>
        //
        // 2. use react-navigation/drawer  still working
        <MyDrawer.Navigator
            backBehavior={"history"}
        >
            <MyDrawer.Screen name={"Home"} children={HomeScreen} />
            <MyDrawer.Screen name={"Profile"} children={ProfileScreen}/>
        </MyDrawer.Navigator>
        // <Text>1222223</Text>
    );
}
