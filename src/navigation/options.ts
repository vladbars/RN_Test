import styles from './styles'
import { StackNavigationOptions } from '@react-navigation/stack'
const option: StackNavigationOptions = {
  headerTransparent: true,
  cardStyle: styles.cardStyle,
  cardOverlayEnabled: false,
  cardShadowEnabled: false,
  headerStyle: styles.headerTransparent,
  headerBackTitleVisible: false,
  title: '',
  headerRightContainerStyle: false,
  headerMode: 'screen',
}

export default option
