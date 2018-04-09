const regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

let valid = true;

export const Form = {
    validate: (virtualForm) => {
        if (!!virtualForm.email) {
            Form.mail = $(virtualForm.email);
            const mailVal = Form.mail.val();
            if (!mailVal && !regExp.test(mailVal)) {
                valid = false;
                Form.mail.parents('.form-group').addClass('has-error');
                Form.mail.next().text('Please insert correct email');
            } else {
                Form.mail.parents('.form-group').removeClass('has-error');
                Form.mail.next().text('');
            }
        }
        if (!!virtualForm.password) {
            Form.password = $(virtualForm.password);
            const passwordVal = Form.password.val();
            if (!passwordVal && passwordVal.length < 8) {
                valid = false;
                Form.password.parents('.form-group').addClass('has-error');
                Form.password.next().text('Please insert correct password');
            } else {
                Form.password.parents('.form-group').removeClass('has-error');
                Form.password.next().text('');
            }
        }
        if (!!virtualForm.name) {
            Form.name = $(virtualForm.name);
            const nameVal = Form.name.val();
            if (!nameVal) {
                valid = false;
                Form.name.parents('.form-group').addClass('has-error');
                Form.name.next().text('Please insert correct name');
            } else {
                Form.name.parents('.form-group').removeClass('has-error');
                Form.name.next().text('');
            }
        }
        return valid;
    },
};
