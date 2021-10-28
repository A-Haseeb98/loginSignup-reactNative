import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function ResetPassword() {
    return (
        <View style={styles.contain}>
            <Text style={styles.heading}>Reset Password</Text>
            <Text style={styles.heading_label}>Please enter your email to recieve a link to create a new password via email</Text>
            <View style={styles.input_wrapper}>
                <TextInput placeholder='Email' style={styles.input} />
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity activeOpacity={0.7} >
                    <Text style={styles.button}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contain:{
        width: '100%',
        alignItems:"center"
    }
    ,
    heading: {
        width: "100%",
        color: "#767e80",
        fontSize: 35,
        padding: 10,
        textAlign: "center"
    },

    heading_label: {
        width: "80%",
        color: "#7d7d7d",
        fontSize: 14,
        padding: 5,
        textAlign: "center"
    },
    input_wrapper: {
        width: "80%",
        marginHorizontal: "auto",
        marginTop: 20
    },
    input: {
        height: 60,
        backgroundColor: "#e7e7e7",
        borderRadius: 25,
        marginBottom: 25,
        paddingHorizontal: 20
    },
    buttonContainer: {
        width: "85%",
        marginHorizontal: "auto",
        marginTop: 10,
        marginBottom: 20
    },
    button: {
        width: "100%",
        height: 70,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#000",
        paddingVertical: 25,
        borderRadius: 40,
        fontSize: 16,
        backgroundColor: "#39eb9a"
    },
    forgotPasswordLink: {
        textAlign: "center",
        marginBottom: 20
    },
    signupText: {
        textAlign: "center",
        color: "#7d7d7d"
    },
    signupLink: {
        fontWeight: "bold",
        color: "#08ad69"
    }
});

export default ResetPassword;