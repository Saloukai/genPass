import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import ActionSheet from 'react-native-actionsheet'

const types = {
    0: {
        value: 'Alplhanumérique', // Texte affiché
        code: 'alphanumeric' // Code pour l'api
    },
    1: {
        value: 'PIN',
        code: 'pin'
    },
    2: {
        value: 'Hexadecimal',
        code: 'hex'
    }
}

export default class ButtonGeneratePassword extends React.Component {
    constructor(props) {
        super(props);
        
        // State par défaut
        this.state = {
            params: {
                type: {
                    value: 'Alplhanumérique',
                    code: 'alphanumeric'
                },
                len: 8,
            }
        }
    }

    updateType = (type) => {
        this.setState({
            params: {
                type: {
                    value: types[type].value,
                    code: types[type].code
                },
                len: this.state.params.len
            }
        });
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.title]}>Génération de mot de passe</Text>

                <Text>Type du mot de passe</Text>
                <Button title={this.state.params.type.value} onPress={this.showActionSheet}></Button>

                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Type du mot de passe'}
                    options={['Alphanumérique', 'PIN', 'Hexadecimal', 'Annuler']}
                    cancelButtonIndex={3}
                    onPress={(index) => {
                        if (index != 3)
                            this.updateType(index);
                    }}
                />

                <TouchableOpacity onPress={this._generatePassword}>
                    <Text style={styles.button}>GENERER</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _generatePassword = () => {
        this.props.navigation.navigate('Password', {type: this.state.params.type});
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24
    },
    title: {
        marginTop: 30,
        paddingBottom: 35
    },
    select: {
        width: 100
    },
    itemPicker: {
        width: 100,
    },
    button: {
        backgroundColor: '#147efb',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        overflow: 'hidden',
        marginTop: 45,
        padding: 12,
        textAlign: 'center',
    }
});