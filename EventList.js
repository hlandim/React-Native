import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f3f3f3',
    },
});

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./db.json').events;
        this.setState({events});
    }

    renderItem = ({item}) => (
            <EventCard event={item}/>
        );

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem = {this.renderItem}
                keyExtractor= {event => event.id}
            />
        );
    }
}

export default EventList;