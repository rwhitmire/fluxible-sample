export default {
    name: 'message',

    read: function(req, resource, params, config, callback) {
        setTimeout(function() {
            callback(null, [{message: new Date().getTime()}])
        }, 1000)
    }
}
