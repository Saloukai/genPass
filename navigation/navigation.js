import { createStackNavigator, createAppContainer } from 'react-navigation'
import ButtonGeneratePassword from '../components/buttonGeneratePassword'
import PasswordGenerate from '../components/passwordGenerate'

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: ButtonGeneratePassword,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  Password: {
      screen: PasswordGenerate,
      navigationOptions: {
          title: 'Mot de passe'
      }
  }
})

export default createAppContainer(HomeStackNavigator)