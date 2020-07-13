import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors'
import MovieScreen from "../screens/MovieScreen";
import MovieDetails from "../screens/MovieDetails";

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
                name="Movies"
                options={{ title: 'Movies' }}
                component={MovieScreen}
                options={{ headerShown: true },
                {
                    headerStyle: {
                        backgroundColor: colors.colorPrimary,
                    },
                    headerTintColor: '#FFFFFF',
                    headerTitleStyle: {
                        fontSize: 18,
                    },
                }
                }
            />
            <Stack.Screen
                name="MovieDetail"
                options={{ title: 'MovieDetail' }}
                component={MovieDetails}
                options={{
                    headerShown: false
                }, {
                    headerStyle: {
                        backgroundColor: 'transparent',
                        // zIndex: 100,
                        // position: 'absolute',
                        // top: 0,
                        // left: 0,
                        // right: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    }
                }
                }

            //options={{ headerShown: false }}
            />

        </Stack.Navigator>
    </NavigationContainer>
)