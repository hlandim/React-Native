import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

class EventForm extends React.Component {

    handleAddPress = () => {
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handleAddPress}>
                    <Text>add</Text>
                </TouchableHighlight>
            </View>
        );
    };
}

export default EventForm;