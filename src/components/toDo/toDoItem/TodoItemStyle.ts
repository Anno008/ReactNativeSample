import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    borderColor: "#d6d7da",
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5
  },
  strikeout: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
});
