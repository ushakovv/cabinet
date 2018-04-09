import { BaseModel } from '../core/model/BaseModel';


export const Template = {
    create: (data, cb) => (
        BaseModel('template', 'post', null, cb)
    ),
    getAll: (cb) => (
        BaseModel('template?limit=100', 'get', null, cb)
    ),
    get: (data, cb) => (
        BaseModel(`template?id=${data.id}`, 'get', null, cb)
    ),
    delete: (data, cd) => (
        BaseModel(`template?id=${data.id}`, 'delete', null, cd)
    ),
};
