import { StyleSheet , Dimensions} from "react-native";
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    imageStyle:{
        width:windowWidth,
        height:windowHeight,
        resizeMode:"cover",
    },
    dotsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        position:"absolute",
        bottom:8,
        alignItems:"center"
    },
    buttonBoarding:{
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        elevation:20,
        shadowColor: 'blue',
        backgroundColor:"#4139FA",
        marginRight:15
    },
    subTitleText:{
        color:"#B0B0B0",
        fontWeight:"bold",
        fontSize:15,
        width:250,
        textAlign:"center",
        marginTop:10
    },
    animated:{
        flexDirection:"row",
        alignSelf:"center",
        position:"absolute",
        bottom:8,
        alignItems:"center",
        justifyContent:"flex-end",
        width:windowWidth,
        bottom:windowHeight/10,
        paddingHorizontal:15
    }
})
export default styles;