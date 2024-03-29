import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: 'center',
        backgroundColor: "white",
        alignSelf: "center",
        width: windowWidth,
        // paddingVertical: 15,
    },
    MainText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 40,
        marginLeft: 25,
    },
    subText: {
        color: "#5B5B5B",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
    customInput: {
        width: windowWidth - 60,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1.5,
        borderColor: "#A8A8A8",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        fontWeight: "bold",
        color: "black"
    },
    btnContainer: {
        width: windowWidth - 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1D0EFE",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 10
    },
    btnText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
    },
    bottomText: {
        flexDirection: "row",
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'rgba(161,255,255,0.7)',
        width: windowWidth - 60,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#BDFAFA",
        marginTop: windowheight / 15,
        shadowColor: "#0DB0FA",
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
    },
    subText: {
        color: "#5B5B5B",
        fontWeight: "bold",
        marginTop: 10,
    },
    bottomText: {
        flexDirection: "row",
        marginVertical:10
    }
})
export default styles;