import BaseDrawerNavigator from "@/app/BaseDrawerNavigator";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Index() {
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              flex: 1
            }
          }}
        >
          <Stack.Screen name={"Embeddable testing"} component={BaseDrawerNavigator} />
        </Stack.Navigator>
    );
}
