import axios from 'axios'
export async function ping() {
    var data;
    await axios.get('https://api.futurelines.net/api/ping').then((response) => {
        data = response
    }).catch((error) => {
        data = error
    })
    return data;
}
export function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}