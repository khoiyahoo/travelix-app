import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    backgroundColor: COLORS.primary,
    // justifyContent: 'space-around',
  },
  searchContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.offwhite,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginLeft: SIZES.small,
    height: 50,
    width: '75%',
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    backgroundColor: COLORS.offwhite,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
  },
  searchInput: {
    fontFamily: 'regular',
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  cancelWrapper: {
    marginLeft: SIZES.small,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: COLORS.offwhite,
    fontFamily: 'bold',
  },
  controlWrapper: {
    display: 'flex',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  textActive: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontFamily: 'bold',
  },
  clear: {
    fontSize: SIZES.medium,
    color: COLORS.primaryLight,
    fontFamily: 'bold',
  },
  showList: {
    display: 'block',
  },
  hideList: {
    display: 'none',
  },
})

export default styles
