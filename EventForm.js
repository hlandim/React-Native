import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native';
import DateTimePicker from 'react-native-datetime-picker';

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        marginLeft: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
});

class EventForm extends React.Component {

    state = {
        title: ""
    }

    handleChangeTitle = (value) => {
        this.setState({title: value});
    }

    handleAddPress = () => {
        console.log(this.state.title);
        //this.props.navigation.navigate('list');
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput style={styles.text}
                        placeholder="Event title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}/>
                    <TextInput 
                    style={[styles.text, styles.borderTop]}/>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.handleAddPress}>
                    <Text
                        style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    };
}

export default EventForm;