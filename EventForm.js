import React, {Component} from 'react';
import {
    View,
    Text,
    ThouchebleHighlight,
} from 'react-native';

class EventForm extends React.Component {

    handleAddPress = () => {
        
    }

    render() {
        return (
            <View>
                <ThouchebleHighlight
                    onPress={this.handleAddPress}>
                    <Text>add</Text>
                </ThouchebleHighlight>
            </View>
        );
    };
}

export default EventForm;