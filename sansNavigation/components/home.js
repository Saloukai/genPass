import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Home extends React.Component {
    constructor(props) {
        super(props); // Constructeur du parent

        // Initialisation de state avec password vide
        this.state = {
            password: ""
        }
    }

    // Fonction asynchrone pour récupérer un mot de passe via une API
    getPassword = async () => {
        let url = "https://makemeapassword.ligos.net/api/v1/alphanumeric/json";
        fetch(url).then(response => response.json()).then((data) => {
            if (data) {
                this.setState({
                    password: data.pws[0]
                });
            } else {
                this.setState({
                    password: "API surchargé, veuillez réessayer plus tard"
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.title]}>Génération de mot de passe</Text>

                <TouchableOpacity onPress={this.getPassword}>
                    <Text style={styles.button}>GENERER</Text>
                </TouchableOpacity>

                <Text style={[styles.text, styles.password]}>{this.state.password}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        alignItems: 'center'
    },
    title: {
        marginTop: 25,
    },
    password: {
        marginTop: 15,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#1487B1',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#CEECF5',
        color: '#CEECF5',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 45,
        padding: 12,
        overflow: 'hidden',
        textAlign: 'center',
    }
});