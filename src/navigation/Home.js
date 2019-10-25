import React from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { Home, Movie, Person } from '~/screens';
import { Icon, HeaderTitle } from '~/components';

const stack = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle title="TMDB" />,
      headerRight: (
        <View style={{ paddingRight: 16 }}>
          <Icon
            name="search"
            color={Colors.white}
          />
        </View>
      ),
    }),
  },
  movie: {
    screen: Movie,
    navigationOptions: () => ({
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    }),
  },
  person: {
    screen: Person,
    navigationOptions: () => ({
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    }),
  },
}, {
  initialRouteName: 'home',
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Colors.black,
      ...Platform.select({
        ios: {
          borderBottomColor: 'transparent',
        },
        android: {
          elevation: 0,
        },
      }),
    },
    headerTintColor: Colors.white,
    headerBackImage: <Icon name="arrow-left" color={Colors.white} />,
  }),
});

export default stack;
