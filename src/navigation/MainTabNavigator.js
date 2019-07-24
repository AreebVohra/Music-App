import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import AlbuminfoScreen from '../screens/Album_info';
import AlbumCategoryScreen from '../screens/AlbumCategory';

const AlbuminfoStack = createStackNavigator({
  AlbumInfo: AlbuminfoScreen,
}, {
    headerMode: "none",
    navigationOptions: {

    }
  }
);

const AlbumsCategoryStack = createStackNavigator({
  AlbumsCategory: AlbumCategoryScreen,
}, {
    headerMode: "none",
    navigationOptions: {

    }
  }
);


const tabBarNavigation = createBottomTabNavigator({
  AlbuminfoStack,
  AlbumsCategoryStack,

}, {
    tabBarOptions: {
      showLabel: false
    }
  });
export default tabBarNavigation;
