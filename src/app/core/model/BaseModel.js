import axios from 'axios';
import { Cookie } from '../helper/Cookie';


export const BaseModel = (uri, methodName, formData, cb) => (
    axios({
        url: `http://api.mailmaker.loc/${uri}`,
        method: methodName,
        data: formData,
        withCredentials: true,
        config: {
            headers: {
                Cookie: `token=${Cookie.get('token')}`,
                'Content-Type': 'multipart/form-data',
            },
        },
    }).then((resp) => {
        if (resp.data && cb) {
            cb(resp);
        }
    }).catch((err) => {
        console.error(err);
    })
);
