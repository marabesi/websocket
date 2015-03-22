'use strict';

(function () {
    var url = 'ws://localhost:9002';
    var socket = new WebSocket(url);

    var chatBox = document.getElementById('chat-box');

    socket.onopen = function () {
        chatBox.innerHTML += '<p>connected !</p>';
    };

    socket.onclose = function () {
        chatBox.innerHTML += '<p>closed !</p>';
    };

    socket.onmessage = function (e) {

        var jsonObj = JSON.parse(e.data);
        console.log(jsonObj);
        chatBox.innerHTML += '<p>' + jsonObj.message + '</p>';
    };

    $('.form').submit(function (e) {
        e.preventDefault();
        var send = $('#data').val();

        socket.send(send);
    });
})();