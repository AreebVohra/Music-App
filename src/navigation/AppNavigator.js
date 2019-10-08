import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';
import OnboardingScreen from '../screens/onboarding';
import SigninScreen from '../screens/SignIn';
import SignupScreen from '../screens/SignUp';
import AlbuminfoScreen from '../screens/Album_info';
import PlayScreen from '../screens/Play';
import AlbumCategoryScreen from '../screens/AlbumCategory';
import HomeScreen from '../screens/Home';
import playlistScreen from '../screens/Playlist';
import CastingScreen from '../screens/Casting';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Main: MainTabNavigator,
    Album: AlbuminfoScreen,
    Onboard: OnboardingScreen,
    SignUp: SignupScreen,
    SignIn: SigninScreen,
    Play: PlayScreen,
    Albums: AlbumCategoryScreen,
    Home: HomeScreen,
    Playlist: playlistScreen,
    Casting: CastingScreen


  })
);
