export default function(context, payload, done) {
    context.service.read('message', {}, {}, function(err, messages) {
        context.dispatch('RECEIVE_MESSAGES', messages);
        done();
    });
}