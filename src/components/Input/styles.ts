import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  input: {
    borderColor: colors.NEUTRAL_500,
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    marginTop: 25,
    paddingHorizontal: 15,
    fontSize: 15,
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: colors.NEUTRAL_100,
    top: 14,
    zIndex: 2,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.NEUTRAL_500,
    marginHorizontal: 2,
  },
});
