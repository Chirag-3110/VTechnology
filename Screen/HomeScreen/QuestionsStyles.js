import { StyleSheet,Dimensions } from "react-native";
const windoWidth=Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "rgba(115,105,248,0.85)"
    },
    TopView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 13,
        marginVertical: 15
    },
    OptionImage: {
        width: 33,
        height: 33
    },
    CourseImageView: {
        height: windoHeight / 3.5,
        justifyContent: "center",
        alignItems: "center"
    },
    CourseImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Course: {
        borderRadius: 30,
        shadowColor: "rgba(115,105,248,0.9)",
        shadowOffset: {
            width: 10,
            height: -16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 900,
        elevation: 20,
    },
    CourseNameText: {
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 10,
        color: "white"
    },
    btnCourse: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
        width: windoWidth / 2.2,
        alignItems: "center"
    },
    MiddleView: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 15,
        elevation:20
    },
    TextCourse: {
        fontSize: 15,
        fontWeight: "700",
        color: "black"
    },


    container:{
        flex:1,
        // backgroundColor:"rgba(115,105,248,0.85)",
        marginBottom:windoHeight/10
    },
    MainImg: {
        width: 150,
        height: 200,
    },
    Quiztitle:{
        width:windoWidth-30,
        padding:15,
        borderRadius:10,
        backgroundColor:"white",
        alignSelf:"center",
        elevation:50,
        shadowColor:"#1000ff",
        marginBottom:20,
        shadowOffset:{
            width:0,
            height:-20
        }
    },
    quiCardTitle:{
        color:"rgba(115,105,248,0.85)",
        fontWeight:"bold",
        fontSize:16,
        width:'70%',
        backgroundColor:"rgba(198,194,250,0.40)",
        textAlign:"center",
        padding:10,
        borderRadius:10,
        marginVertical:5,
    },
    quizCardSubText:{
        color:"#2e2e2f",
        fontWeight:"bold",
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:5,
    },
    quizCardMiniText:{
        color:"#7f7f7f",
        fontWeight:"800",
        fontSize:15,
        paddingHorizontal:10,
        paddingVertical:5,
        width:'90%'
    },
    quesCard:{
        backgroundColor:"red",
        padding:10,
        backgroundColor:"rgba(198,194,250,0.40)",
        borderRadius:10,
        alignItems: 'center',
        marginVertical:10,
        paddingVertical:20
    },
    btnBody:{
        width:'40%',
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        elevation:20
    },
    selctedOptionLabel:{
        color:"rgba(115,105,248,0.85)",
        backgroundColor:"rgba(198,194,250,0.80)",
        paddingVertical:6,
        borderRadius:3,
    },
    inputField:{
        backgroundColor:"white",
        width:'98%',
        height:50,
        padding:10,
        marginTop:10,
        borderRadius:5,
        borderColor:"rgba(115,105,248,0.85)",
        borderWidth:2
    }
});
export default styles;