import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export default StyleSheet.create({
  headerRightIcon: {
    marginRight: 20,
  },
  headerLeftIcon: {
    marginLeft: 20,
  },
  headerTitle: {
    color: colors.NEUTRAL_100,
    fontWeight: '400',
  },
  headerButtonContainer: {
    flexDirection: 'row',
  },
  header: {
    height: 55,
    backgroundColor: colors.BLUE_500,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.NEUTRAL_1000,
    shadowOpacity: 30,
    elevation: 4,
  },
  loginHeader: {
    height: 55,
    backgroundColor: colors.NEUTRAL_100,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.NEUTRAL_1000,
    shadowOpacity: 30,
    elevation: 4,
  },
});
