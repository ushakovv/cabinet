import { Template } from '../models/Template';


export const asyncGetTemplates = () => (dispatch) => {
    Template.getAll((response) => {
        dispatch({ type: 'GET_ALL_TEMPLATES', payload: response.data.result.templates.list });
    });
};
