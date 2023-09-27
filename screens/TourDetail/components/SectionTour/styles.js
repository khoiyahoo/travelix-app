import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
  },
  boxDesc: {
    // paddingTop: 12,
    // paddingBottom: 0,
    paddingHorizontal: 12,
  },
  titleSection: {
    fontSize: SIZES.large,
    fontWeight: '600',
  },
  boxDescSub: {
    paddingTop: 12,
    paddingBottom: 0,
    paddingHorizontal: 12,
  },
  dot: {
    backgroundColor: 'black',
    width: 6,
    height: 6,
    borderRadius: 4,
    marginRight: 16,
  },
  itemSub: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonReadMore: {
    paddingTop: 12,
    alignSelf: 'center',
    width: '50%',
  },
  boxImageCol: {
    width: '50%',
    height: 300,
  },
  boxImageRow: {
    width: '100%',
    height: 150,
    marginLeft: 12,
  },
  boxImgRowTop: {
    paddingBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  boxGoodFor: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  goodFor: {
    fontSize: SIZES.medium,
    fontWeight: '600',
  },
})

export default styles
