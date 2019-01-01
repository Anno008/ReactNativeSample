import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderColor: "#d6d7da",
    borderRadius: 4,
    borderWidth: 1,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 5
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  strikeout: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  }
});
