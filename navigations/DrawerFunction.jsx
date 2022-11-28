import MainHome from '../Screens/MainHome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Address from '../Screens/Address';
import MyPredictions from '../Screens/MyPredictions';
import SideBar from '../Screens/SideBar';
import Fantasy from '../Screens/Fantasy';
import Staking from '../Screens/Staking';
const Drawer = createDrawerNavigator();

const DrawerComponent = () => <Drawer.Navigator
  drawerContent={props => <SideBar {...props} />}
  screenOptions={{ headerShown: false }}
  initialRouteName="Home">
  <Drawer.Screen name="MainHome" component={MainHome} />
  <Drawer.Screen name="Address" component={Address} />
  <Drawer.Screen name="MyPredictions" component={MyPredictions} />
  <Drawer.Screen name="Fantasy" component={Fantasy} />
  <Drawer.Screen name="Staking" component={Staking} />
</Drawer.Navigator>

export default DrawerComponent