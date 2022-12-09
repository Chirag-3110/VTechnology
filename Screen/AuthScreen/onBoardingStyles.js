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
        width:windowWidth-100,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        elevation:20,
        shadowColor: 'blue',
        backgroundColor:"#4139FA"
    },
    subTitleText:{
        color:"#727275",
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
        justifyContent:"center",
        width:windowWidth,
        bottom:windowHeight/10,
        paddingHorizontal:15
    }
})
export default styles;