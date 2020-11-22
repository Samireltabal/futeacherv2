import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
// components can be called from the imported UIkit reference
// UIkit.notification('اهلاً بالعالم');
import $ from 'jquery'
import './index.css';
import { ping, getUrlParameter } from './js/app'

$(document).ready(function () {
    $('#tester').text(process.env.STREAM_HOST)
    $('#tester').append(`<br> ${process.env.WEBSOCKET_HOST}`)
    ping().then((response) => {
        $('#loading').hide();
        $('#content').show();
    }).catch((error) => {
        $('#loading').hide();
        $('#content').html(`
            <pre>
                ${error}
            </pre>
        `);
    })
})

function init () {
    // console.log('initatied')
    var id = getUrlParameter("id");
    var token = getUrlParameter("token")
    if(typeof id != "undefined" && typeof token != "undefined") {
        $("#streamName").text(id);
        document.title = `Futurelines || متابعة حصة ${id}`
    }
    else {
        id = getUrlParameter("name");
        if (typeof id != "undefined" && typeof token != "undefined") {
            $("#streamName").text(id);
            document.title = `Futurelines || متابعة حصة ${id}`
        } 
        else {
            var current = window.location.pathname;
            if (current == '/') {
                window.location.replace("./unauthorised.html");
            } else {
                console.log('Not on the homepage.')
            }
        }
    }
}

$(function() {
    init();
});