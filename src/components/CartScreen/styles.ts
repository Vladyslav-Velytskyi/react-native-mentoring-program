import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.NEUTRAL_500,
    fontWeight: '700',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    color: colors.NEUTRAL_500,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});
