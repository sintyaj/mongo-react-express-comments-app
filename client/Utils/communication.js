/**
 * Created by sergey-raichman on 18/03/2017.
 */
import 'es6-promise';
import 'whatwg-fetch'

const BASE_CONFIG = {
    credentials: 'same-origin',
    timeout: 20
};

let buildQURL = (path = "") => {
    if (path.length && typeof path === 'string') {

        if (path.substr(0, 4) === 'http') {
            return `${path}`;
        } else {
            if (path[0] !== '/') {
                path = `/${path}`;
            }
            return `${path}`;
        }
    }
};

let checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        return {error: true, response};
    }
};

let parseJSON = (response) => {
    if (response.error) {
        return response;
    }

    return response.json();
};

export function GET(path = "", config = {}, timeout = 60) {

    return new Promise((resolve, reject) => {
        let apiUrl = buildQURL(path);
        let requestConfig = {
            method: 'GET'
        };
        Object.assign(requestConfig, BASE_CONFIG, config);
        let to = setTimeout(()=> {
            console.log("Communication.JS Resolved due to timeout of " + timeout + " seconds with error : true ");
            resolve({error: true})
        }, timeout * 1000);
        fetch(apiUrl, requestConfig)
            .then(checkStatus)
            .then(parseJSON)
            .then((data => {
                clearTimeout(to);
                resolve(data);
            }));


    });

}

export function POST(url, obj = {}, timeout = 60) {

    return new Promise((resolve, reject) => {

        let data = obj.body || obj;

        let requestConfig = {
            'method': 'post',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(data)
        };

        Object.assign(requestConfig, BASE_CONFIG);

        if (obj.headers) {
            Object.assign(requestConfig.headers, obj.headers);
        }

        let to = setTimeout(()=> {
            console.log("Communication.JS Resolved due to timeout of " + timeout + " seconds with error : true ");
            resolve({error: true})
        }, timeout * 1000);
        fetch(url, requestConfig)
            .then(checkStatus)
            .then(parseJSON)
            .then((data => {
                clearTimeout(to);
                resolve(data);
            }));
    });
}
