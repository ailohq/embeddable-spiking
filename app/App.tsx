import React, {useEffect} from "react";
import { Text, View } from 'react-native';
import {
    useNavigation,
} from '@react-navigation/native';
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
        {/*<Button onPress={() => navigation.navigate('Profile')}>*/}
        {/*Go to Profile*/}
        {/*</Button>*/}
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
    {/*<Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>*/}
    <EmbeddableGLIncome />

    </View>
);
}

const MyDrawer = createDrawerNavigator();

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
            <MyDrawer.Screen name={"Home"} key={"Home"} component={HomeScreen} />
            <MyDrawer.Screen name={"Profile"} key={"Profile"} component={ProfileScreen}/>
        </MyDrawer.Navigator>
        // <Text>1222223</Text>
    );
}
