import react, { useEffect, useState, } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function InnerDashboard({ route }) {
    const { performancedetails } = route.params;
    const [performace, setPerformance] = useState(null)
    useEffect(() => {
        setPerformance(performancedetails);
    }, [])
    return (
        <ScrollView style={styles.MainView}>
            {
                performace === null ? null :
                    <>
                        <View style={styles.MainInnerView}>
                            <Text style={styles.DashboardText}>DashBoard Screen</Text>
                        </View>
                        <View style={styles.DetailView}>
                            <View>
                                <Text style={styles.DetailText}>Activity Name : {performace.activityName}</Text>
                                <Text style={styles.DetailText}>No of Question : {performace.QuesArray.length}</Text>
                                <Text style={styles.DetailText}>{performace.courseName}</Text>
                                <Text style={styles.DetailText}>Feedback : {performace.AdminFeedback}</Text>
                            </View>
                        </View>
                        <View>
                            {
                                performace.QuesArray.map((items, quesIndex) => (
                                    <View key={quesIndex} style={styles.quesCard}>
                                        <Text style={{ fontFamily: "SourceSansPro-Bold", color: "black", fontSize: 24, width: '95%', paddingVertical: 10 }}>
                                            Q{quesIndex + 1}. {items.question}
                                        </Text>
                                        {
                                            items.options.map((value, index) => (
                                                <View key={index} style={{ width: '95%', padding: 2 }}>
                                                    <Text style={{
                                                        fontFamily: "SourceSansPro-Bold",
                                                        color: "#2e2e2f",
                                                        fontSize: 20
                                                    }}>
                                                        {index + 1}. {value.answer}
                                                    </Text>
                                                </View>
                                            ))
                                        }
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", marginVertical: 15 }}>
                                            <Text style={{ color: "black", fontFamily: "SourceSansPro-Bold", fontSize: 15, backgroundColor: "lightgreen", paddingVertical: 10, borderRadius: 10, width: windoWidth / 2.7, textAlign: "center" }}>
                                                Correct Option : {items.correctAnswerIndex + 1}
                                            </Text>
                                            <Text
                                                style={[{
                                                    fontFamily: "SourceSansPro-Bold",
                                                    fontSize: 15,
                                                    paddingVertical: 10,
                                                    borderRadius: 10,
                                                    width: windoWidth / 2.7,
                                                    textAlign: "center"
                                                }, items.selectedOption === items.correctAnswerIndex ? { backgroundColor: "lightgreen", color: "black" } : { backgroundColor: "red", color: "white", }]}>
                                                Your Option : {items.selectedOption + 1}
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                        <View style={{ marginBottom: windoHeight / 10 }} />
                    </>
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    MainInnerView: {
        height: windoHeight / 9,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97A3FF"
    },
    DashboardText: {
        fontSize: 28,
        fontFamily: "SourceSansPro-Bold",
        color: "white"
    },
    DetailView: {
        paddingVertical: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97A3FF",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    DetailText: {
        fontSize: 21,
        color: "white",
        marginVertical: 6,
        fontWeight: "bold",
        fontFamily: "SourceSansPro-Bold"
    },
    quesCard: {
        backgroundColor: "red",
        padding: 10,
        backgroundColor: "rgba(198,194,250,0.40)",
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 20,
        width: '90%',
        alignSelf: "center"
    },
})
export default InnerDashboard