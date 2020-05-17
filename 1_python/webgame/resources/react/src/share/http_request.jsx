import { addHeader, getCsrfTokenTag } from './csrf.jsx';
import request from 'superagent';

export function httpGET(url, data, func) {
    addHeader(request.get(url))
        .send(data)
        .end(function (err, res) {
            if (err) {
                alert(res.text);
            }
            func(err, res);
        });
}