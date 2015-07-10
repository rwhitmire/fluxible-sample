import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import MessageStore from './stores/MessageStore';
import fetchrPlugin from 'fluxible-plugin-fetchr';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

app.plug(fetchrPlugin({
    xhrPath: '/api'
}));

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(MessageStore);

module.exports = app;
