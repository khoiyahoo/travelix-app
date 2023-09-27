import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
  },
  btnSecondary: {
    backgroundColor: COLORS.secondary,
    color: COLORS.offwhite,
  },
  btnOutlined: {
    backgroundColor: COLORS.primaryLight3,
    color: COLORS.primary,
  },
  textPrimary: {
    color: COLORS.offwhite,
  },
  textSecondary: {
    color: COLORS.offwhite,
  },
  textOutlined: {
    color: COLORS.primary,
  },
})
export default styles
