import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.small,
    marginTop: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
    paddingBottom: 12,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: 'bold',
  },
  wrapperRate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxRate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rate: {
    fontSize: SIZES.medium,
    color: COLORS.primaryLight,
    fontFamily: 'semibold',
    marginLeft: 8,
  },
  review: {
    fontSize: SIZES.medium,
    marginLeft: 8,
  },
  containerDate: {
    padding: 12,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  boxDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDate: {
    color: COLORS.gray,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
})

export default styles
