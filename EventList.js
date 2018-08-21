import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native';
import EventCard from './EventCard';

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
                data={this.state.events}
                renderItem = {this.renderItem}
                keyExtractor= {event => event.id}
            />
        );
    }
}

export default EventList;