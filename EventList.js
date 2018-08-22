import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
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