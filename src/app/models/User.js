import { BaseModel } from '../core/model/BaseModel';


const _makeData = formData => (
    new FormData(formData)
);

export const User = {
    reg: (data, cb) => {
        BaseModel('registration', 'post', _makeData(data), cb);
    },
    auth: (data, cb) => {
        const fData = _makeData(data);
        fData.set('is_remember', 1);
        BaseModel('login', 'post', fData, cb);
    },
    logout: (cb) => {
        BaseModel('logout', 'delete', null, cb);
    },
    forgot: (data, cb) => {
        BaseModel('forgot', 'post', _makeData(data), cb);
    },
    confirm: (data ,cb) => {
        BaseModel(`confirm_user${data}`, 'get', null, cb);
    },
};
