import { StyleSheet } from 'react-native'
import { COLORS, SIZES, BANNER_H, TOPNAVI_H } from '../../constants'

const styles = StyleSheet.create({
  container: {},
  header: {
    top: 0,
    width: '100%',
    // height: 100,
    backgroundColor: 'red',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    paddingTop: 48,
  },
  nameTour: {
    fontSize: SIZES.large,
    fontFamily: 'bold',
    color: COLORS.offwhite,
    marginLeft: 12,
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: (scrollA) => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
})

export default styles
