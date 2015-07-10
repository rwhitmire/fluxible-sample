import BaseStore from 'fluxible/addons/BaseStore';

class MessageStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher)
        this.messages = [];
    }

    receiveMessages(messages) {
        this.messages = messages;
        this.emitChange();
    }

    getAll() {
        return this.messages;
    }

    dehydrate() {
        return {
            messages: this.messages
        };
    }

    rehydrate(state) {
        this.messages = state.messages;
    }
}

MessageStore.storeName = 'MessageStore';

MessageStore.handlers = {
    'RECEIVE_MESSAGES': 'receiveMessages',
}

export default MessageStore;
