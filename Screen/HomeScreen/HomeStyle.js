import { StyleSheet, Dimensions } from "react-native";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainScreen: {
        height: windoHeight,
        width: windoWidth,
        backgroundColor: "white"
    },
    topMainView: {
        // borderWidth: 1,
        width: windoWidth,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginLeft: 10
    },
    ProImg: {
        width: 37,
        height: 37
    },
    profilePic: {
        width: windoWidth / 7
    },
    TopText: {
        width: windoWidth / 1.56
    },
    TopDate: {
        fontWeight: "800",
        fontSize: 18,
        color: "black"
    },
    MainImg: {
        width: 100,
        height: 150,
    },
    CourseView: {
        // borderWidth: 1,
        backgroundColor: "#FFE7DF",
        marginHorizontal: 20,
        borderRadius: 14,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        shadowColor: 'red',
        shadowOffset: {
            width: 10,
            height: -16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 700,
        elevation: 20,
        //   elevation: 25,
    },
    TextMain: {
        // borderWidth: 1,
        width: windoWidth / 2.2,
        // justifyContent: "center"
        alignItems: "center",
        marginTop: 10
    },
    AcitivitiesText: {

        fontSize: 28,
        color: "black",
        fontWeight: "800"
    },
    AcitivitiesTextanother: {
        fontSize: 14,
        color: "grey",
        marginVertical: 10
    },
    ActivityBtn: {
        marginVertical: 10,
        backgroundColor: "#FC6736",
        borderRadius: 5,
        padding: 6,
        paddingHorizontal: 8
    },
    MyPlanView: {
        // borderWidth: 1,
        marginVertical: 15
    },
    ViewPlanView: {
        marginHorizontal: 25,
        marginTop: 20
    },
    PlanText: {
        // fontSize: 20,
        // fontWeight: "800",
        color: "black",
        fontFamily:"MuseoModerno-Bold"
        
    },
    Scrollview: {
        backgroundColor: "#FFE7DF",
        width: windoWidth / 2.5,
        borderRadius: 14,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    Scrollview1: {
        backgroundColor: "#FFE7DF",
        width: windoWidth / 2.5,
        borderRadius: 14,
        // paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    ScrollImg: {
        width: windoWidth / 2.6,
        height: 120
    },
    ModelView: {
        // position: 'absolute',
        zIndex: 1,
        backgroundColor: "white",
        width: windoWidth,
        marginTop: 20,
        height: windoHeight / 2,
        bottom: 10,
        borderWidth: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    ModelTopView: {
        // borderWidth: 1,
        marginVertical: 15,
        // marginHorizontal: 30,
        width: windoWidth,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    ModelTopViewText: {
        fontSize: 20,
        fontWeight: "700",
        color: "black"
    },
    ContentView: {
        // borderWidth: 1,
        width: windoWidth / 2.3
    },
    ModelTopTextPrice: {
        marginVertical: 10,
        fontSize: 20,
        color: "black",
        fontWeight: "800",
        borderWidth: 1,
    },
    PriceView: {
        marginHorizontal: 25
    },
    details: {
        marginHorizontal: 0,
        fontWeight: "700",
        width: windoWidth / 1.2
    },
    Modelviewbtn: {
        width: windoWidth / 1.3,
        borderWidth: 1,
        backgroundColor: "black",
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
        opacity: 0.9
    },
    ModelviewTextbtn: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    },
    detailsText: {
        fontWeight: "700"
    },

    //modelView
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
    },
    modalView: {
        width: windoWidth,
        height: windoHeight / 2.3,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 20,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    // Image for feedback
    NotifView: {
        position: "absolute",
        right: 25,
        bottom: windoHeight / 3,
        borderWidth: 2,
        borderColor: "yellow",
        borderRadius: 30,
        backgroundColor: "#0F69F4"
    },
    NotifImage: {
        width: 50,
        height: 50
    },

    textStyle1: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText1: {
        marginBottom: 15,
        textAlign: "center"
    },
    detailsText1: {
        color: "black"
    },
    ModelTopView1: {
        marginVertical: 15,
        width: windoWidth,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    ModelTopViewText1: {
        fontSize: 20,
        fontWeight: "700",
        color: "black"
    },
    ContentView1: {
        // borderWidth: 1,
        width: windoWidth / 2.3
    },
    ModelTopTextPrice1: {
        marginVertical: 10,
        fontSize: 20,
        color: "black",
        fontWeight: "800",
        borderWidth: 1,
    },
    NotifViewActivityText: {
        fontSize: 20,
        color: "black",
        marginVertical: 10
    },
    FeedBoxView: {
        // borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFE7DF",
        shadowColor: 'red',
        shadowOffset: {
            width: 10,
            height: -10,
        },
        shadowOpacity: 0.38,
        shadowRadius: 700,
        elevation: 10,

    }
});
export default styles;