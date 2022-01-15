import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: colors.NEUTRAL_500,
    fontWeight: '700',
    fontSize: 20,
  },
  description: {
    marginTop: 10,
    marginBottom: 35,
    textAlign: 'center',
    color: colors.NEUTRAL_500,
    fontSize: 15,
  },
});
