module.exports = {

    subscribers:[],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     * метод on() не применяется к подписчикам сразу, его запускает метод emit().
     */
    on: function (event, subscriber, handler) {
        this.subscribers.push({     //добаляем в массив новых подписчиков вместе с обработчиком
            nameEvent: event,
            subscriber: subscriber,
            handler: handler
        });

        return this;

    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     * На OFF вы должны удалить все добавленные ранее функции обработчики для конкретного подписчика
     */
    off: function (event, subscriber) {
        //console.log(this.subscribers.length)
        this.subscribers = this.subscribers.filter(function (item) {
            //console.log(event)
            //console.log(item.nameEvent)
            //console.log(item.nameEvent === event)//
            //console.log(subscriber)
            //console.log(item.subscriber)
            //console.log(item.subscriber === subscriber)
            //console.log('return')
            //console.log(!((item.nameEvent === event) && (item.subscriber === subscriber)));
            return (!((item.nameEvent === event) && (item.subscriber === subscriber)));
        });
        //console.log(this.subscribers.length)
        return this;

    },

    /**
     * @param {String} event
     * На EMIT вы должны должны вызвать все функции-обработчики, в том порядке, в котором они были подписаны
     */
    emit: function (event) {
        this.subscribers.forEach(function (item, i, arr) {  //перебираем массив на наличие переданного события,
           if((item.nameEvent === event)    //если переданное событие есть в хранилище и
               && (typeof item.subscriber !== "undefined")   //подписчик не пустой и
               && (typeof item.handler !== "undefined")      //обработчик то же не пустой, то
           ) {
              item.handler.call(item.subscriber);        //вызываем функцию обработчик в контексте подписчика
           }

        });
        return this;
    }
};

/**
 // В этом массиве будем хранить все подписки
 var subscriptions = [];

 module.exports = {
    /**
 * @param {String} event
 * @param {Object} subscriber
 * @param {Function} handler

 on: function (event, subscriber, handler) {
    // Сохраняем полную информацию
    subscriptions.push({
        event: event,
        subscriber: subscriber,
        handler: handler
    });

    return this;
},

 /**
 * @param {String} event
 * @param {Object} subscriber

 off: function (event, subscriber) {
    // Удаляем всю информацию, связанную с событием и подписчиком
    subscriptions = subscriptions.filter(function (subscription) {
        return subscription.event !== event || subscription.subscriber !== subscriber;
    });

    return this;
},

 /**
 * @param {String} event

 emit: function (event) {
    subscriptions.forEach(function (subscription) {
        if (event === subscription.event) {
            // Вызываем обработчик в контексте объект-подписчика
            subscription.handler.call(subscription.subscriber);
        }
    });

    return this;
}
 };
 */
