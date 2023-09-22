import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    // justifyContent: 'space-around',
  },
  searchContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.offwhite,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    width: '80%',
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
  notiWrapper: {
    marginLeft: SIZES.small,
  },
})

export default styles
