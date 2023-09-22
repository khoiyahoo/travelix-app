import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'
const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: 'bold',
  },
  boxDesc: {
    display: 'flex',
    flexDirection: 'row',
  },
  descSub: {
    fontFamily: 'bold',
    color: COLORS.gray,
  },
})
export default styles
