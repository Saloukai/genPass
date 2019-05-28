import React from "react"
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'

export default class PasswordGenerate extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, dataSource: "" };
        this.type = this.props.navigation.getParam("type", {value: 'Alplhanumérique', code: 'alphanumeric'});
        this.getPassword();
    }

    getPassword = async () => {
        let url = "https://makemeapassword.ligos.net/api/v1/" + this.type.code + "/json";
        fetch(url).then(response => response.json()).then((data) => {
            if (data) {
                this.setState({
                    isLoading: false,
                    dataSource: data.pws[0]
                });
            } else {
                this.setState({
                    isLoading: false,
                    dataSource: "API surchargé, veuillez réessayer plus tard"
                });
            }
        });
    }

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Mon mot de passe :</Text>
                <Text style={styles.text}>{this.state.dataSource}</Text>
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
        fontSize: 24
    }
});