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
  inputLabel: {
    position: 'absolute',
    fontSize: 12,
    backgroundColor: colors.NEUTRAL_100,
    top: 18,
    left: 15,
    zIndex: 2,
    paddingHorizontal: 3,
    color: colors.NEUTRAL_500,
  },
});
