import React, {useEffect} from "react";
import {Text, View, ViewStyle} from 'react-native';
import {
    useNavigation,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import EmbeddableGLIncome from "@/app/EmbeddableGLIncome";
import {AnotherClickableComponent} from "@/app/AnotherClickableComponent";

// function HomeScreen() {
//     const navigation = useNavigation();
//
//     return (
//         <View style={{ flex: 1,
//             // alignItems: 'center',
//             justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         {/*<Button onPress={() => navigation.navigate('Profile')}>*/}
//         {/*Go to Profile*/}
//         {/*</Button>*/}
//             <EmbeddableGLIncome />
//      </View>
// );
// }
//
// function ProfileScreen() {
//     const navigation = useNavigation();
//
//     return (
//         <View style={{ flex: 1,
//             // alignItems: 'center',
//             justifyContent: 'center' }}>
//     <Text>Profile Screen</Text>
//     {/*<Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>*/}
//     <EmbeddableGLIncome />
//
//     </View>
// );
// }

const Drawer = createDrawerNavigator();

// const Navigation = createStaticNavigation(MyDrawer);


export default function BaseDrawerNavigator() {
    return (
        // 1. just component: working
        // <>
        //     This is root index
        //     <EmbeddableGLIncome />
        //     {/*<AnotherClickableComponent />*/}
        // </>
        //
        // 2. use react-navigation/drawer  still working
        <Drawer.Navigator
            backBehavior={"history"}
            screenOptions={{
                drawerStyle,
                // drawerType: "permanent"
            }}
        >
            <Drawer.Screen name={"Embeddable"} key={"Embeddable"} component={EmbeddableGLIncome} />
            <Drawer.Screen name={"Orlando example"} key={"Orlando example"} component={AnotherClickableComponent}/>
        </Drawer.Navigator>
        // <Text>1222223</Text>
    );
}

const drawerStyle = {
    width: 200,
    // backgroundColor: Colors.CHARCOAL,
    // borderRightWidth: 0
} satisfies ViewStyle;