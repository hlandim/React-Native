import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
        paddingTop: 20,
        backgroundColor: '#f3f3f3'
    },
});

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {

        setInterval(() => {
        
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                }))
            });
        }, 1000);

        const events = require('./db.json').events;
        this.setState({events});
    }

    renderItem = ({item}) => (
            <EventCard event={item}/>
        );

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    render() {
        return [
            <FlatList
                key="list"
                style={styles.list}
                data={this.state.events}
                renderItem = {this.renderItem}
                keyExtractor= {event => event.id}
            />,
            <ActionButton 
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 60, 1)"
            />
        ];
    }
}

export default EventList;