import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'bold',
    fontSize: 20,
  },
  appBarWrapper: {
    paddingTop: 48,
    // marginTop: SIZES.small,
    backgroundColor: COLORS.primary,
  },
})

export default styles
