import showMessage from '../actions/showMessage';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home'),
        action: function(context, payload, done) {
            context.executeAction(showMessage, {}, done);
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    }
};
