import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  boxTitleSelect: {
    padding: 12,
  },
  titleSelect: {
    fontSize: SIZES.large,
    fontWeight: '600',
  },
  boxInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 12,
    backgroundColor: COLORS.primaryLight,
  },
  textInfo: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  containerSelectDate: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  boxItemDate: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBottomSheet: {},
})

export default styles
