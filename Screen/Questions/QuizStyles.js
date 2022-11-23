import { StyleSheet,Dimensions } from "react-native";
const windowWidth=Dimensions.get('window').width;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(246,229,254,0.80)",
        alignItems:"center",
        padding:10,
        justifyContent: 'center',
    },
    customInput: {
        width:windowWidth-80,
        height: windowWidth/8,
        borderColor: 'rgba(21, 47, 74, 0.12)',
        backgroundColor:"white",
        marginTop: 20,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 1.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 24,
        fontWeight: "bold",
        color: "black"
    },
    Quescontainer:{
        flex:1,
        backgroundColor:"white",
        alignSelf:"center",
        padding:10,
        zIndex:20,
        width:windowWidth
    },
    infoContainer:{
        borderRadius:10,
        backgroundColor:"white",
        width:windowWidth-30,
        padding:10,
        paddingVertical:20,
        marginVertical:20,
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 10,
        // margin:10
    },
    textInput:{
        width:windowWidth-80,
        height:windowWidth/9,
        marginTop:10,
        borderColor:'rgba(21, 47, 74, 0.12)',
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:10,
        color:"black",
        zIndex:-10
    },
    dropDownContainerStyle: {
        height: windowWidth/3,
        marginTop:-5,
        borderRadius: 4,
        borderColor: 'rgba(21, 47, 74, 0.12)',
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:4,
    },
    dropDownItemStyle:{
        padding:5,
        margin:10,
    },
    dropDownLabelStyle:{
        borderColor: 'rgba(21, 47, 74, 0.12)',
        backgroundColor:"white",
        width: windowWidth/2.5,
        height:windowWidth/9,
        marginTop: 10,
        fontSize:20,
        borderWidth:1,
        paddingHorizontal:10,
        alignItems:"center",
        flexDirection: 'row',
        borderRadius:4,
        color:"black"
    }
})
export default styles;