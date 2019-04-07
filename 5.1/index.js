module.exports = {

    subscribers:[],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     * метод on() не применяется к подписчикам сразу, его запускает метод emit().
     */
    on: function (event, subscriber, handler) {
        //console.log('on_args________________')
        //console.log(arguments)
        //console.log('on_subscr________________')
        //this.subscribers.forEach(function (item, i, arr){
        //    console.log(arr[i]);
        //});
        //console.log('________________')
        this.subscribers.push({     //добаляем в массив новых подписчиков вместе с обработчиком
            nameEvent: event,
            subscriber: subscriber,
            handler: handler
        });
        //console.log(this);
        return this;

    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     * На OFF вы должны удалить все добавленные ранее функции обработчики для конкретного подписчика
     */
    off: function (event, subscriber) {
        //let count = 0;
        //console.log('off_args________________')
        //console.log(arguments)
        //console.log('off_subscr________________')
        //this.subscribers.forEach(function (item, i, arr){
        //    console.log(arr[i]);
        //});
        //console.log('________________')

        //this.subscribers.forEach(function (item, i, arr) {  //должны перебрать все индексы на наличие связки событие + подписчик, и удалить его из массива методом splice
        //    if((item.nameEvent === event)
        //    && (item.subscriber === subscriber)
        //    ){
        //        console.log(cou//nt++);
        //        arr.splice(i, 1);
        //    }
        //});

        this.subscribers = this.subscribers.filter(function (item) {
            console.log(item);
            return item.nameEvent !== event && item.subscriber !== subscriber;
        });
        return this;


        ////console.log('off_end subscr________________')
        ////this////.subscribers.forEach(function (item, i, arr){
        ////    console.log(arr[i]);
        ////});
        ////console.log('________________')
        ////return this;





        //var index = this.subscribers.findIndex(function (el, index) {
        //    if (el.nameEvent === event && el.subscriber === subscriber) {//
        //        return index;
        //    }
        //});
        //if (index !== -1) {
        //    this.subscribers.splice(index       , 1);
        //    return this.off(event, subscriber);
        //} else {
        //    return this;
        //}
    },

    /**
     * @param {String} event
     * На EMIT вы должны должны вызвать все функции-обработчики, в том порядке, в котором они были подписаны
     */
    emit: function (event) {
        //console.log('emit_args________________')
        //console.log(arguments)
        //console.log('emit_subscr________________')
        //this.subscribers.forEach(function (item, i, arr){
        //    console.log(arr[i]);
        //});
        //console.log('________________')
        this.subscribers.forEach(function (item, i, arr) {  //перебираем массив на наличие переданного события,
           if((item.nameEvent === event)    //если переданное событие есть в хранилище и
               && (typeof item.subscriber !== "undefined")   //подписчик не пустой и
               && (typeof item.handler !== "undefined")      //обработчик то же не пустой, то
           ) {
              item.handler.call(item.subscriber);        //вызываем функцию обработчик в контексте подписчика
           }

        });



        //for (var i = 0; i < this.subscribers.length; i++) {// //преребираем массив подписчиков
        //    var subscriber = this.subscribers[i];
        //    if (subscriber.nameEvent === event
        //        && subscriber.subscriber != undefined
        //        && subscriber.handler != undefined) {
        //        subscriber.handler.call(subscriber.subscriber);
        //    }
        //}//
        return this;
    }
};
