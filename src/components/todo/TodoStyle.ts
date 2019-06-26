import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    scrollViewStyle: {
        flexGrow: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    todoContainer: {
        flex: 1,
        width: "100%"
    }
});
