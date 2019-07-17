
var socket = io();

        new Vue({
            el: '#chat',

            data: {
                messages: [],
                message: '',
            },
                mounted: function() {
                   socket.on('chat.message', function(message) {
                       console.log('message client send ...');
                       this.messages.push(message);
                    }.bind(this));
            },

            methods: {
                send: function() {
                    socket.emit('chat.message', this.message);
                    this.message = '';
                }
            }
        });
