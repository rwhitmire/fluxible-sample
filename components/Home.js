'use strict';
var React = require('react');
var MessageStore = require('../stores/MessageStore');
import connectToStores from 'fluxible/addons/connectToStores';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <div>{this.props.messages[0].message}</div>
                <p>Welcome to the site!</p>
            </div>
        );
    }
}

module.exports = connectToStores(
    Home,
    [MessageStore],
    function(stores, props) {
        var messages = stores.MessageStore.getAll();
        if(messages.length == 0) messages.push({message: 'loading...'});

        return {
            messages: stores.MessageStore.getAll()
        };
    }
);
