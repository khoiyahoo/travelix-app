import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'
const styles = StyleSheet.create({
  container: {
    width: 182,
    borderRadius: SIZES.medium,
  },
  imageContainer: {
    width: 170,
    height: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
  },
  city: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 8,
  },
  priceContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 6,
    bottom: 24,
    right: 0,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 4,
  },
  price: {
    color: COLORS.offwhite,
    fontSize: SIZES.medium,
  },
})
export default styles
