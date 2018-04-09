import React from 'react';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';
import { User } from '../models/User';
import { Form } from '../core/helper/Form';

const recover = (event) => {
    event.preventDefault();
    if (Form.validate(event.target)) {
        User.forgot(event.target, () => {
            swal('An you email addres was send a mail', {
                icon: 'info',
            });
        });
    }
};

export const RecoverPage = () => (
    <div className="row">
        <div className="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
            <div className="logo margin-top-30">
                <h3>MAILMAKER</h3>
            </div>
            <div className="box-forgot">
                <form className="form-forgot" onSubmit={recover}>
                    <fieldset>
                        <legend>Forget Password?</legend>
                        <p>Enter your e-mail address below to reset your password.</p>
                        <div className="form-group">
                            <span className="input-icon">
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                                <span className="help-block" />
                                <i className="fa fa-envelope-o" />
                            </span>
                        </div>
                        <div className="form-actions">
                            <Link to="/login/"><i className="fa fa-chevron-circle-left" /> Log-in</Link>
                            <button type="submit" className="btn btn-primary pull-right">
                                Submit <i className="fa fa-arrow-circle-right" />
                            </button>
                        </div>
                    </fieldset>
                </form>
                <div className="copyright">&copy;
                <span className="current-year" />
                <span className="text-bold text-uppercase"> MailMaker</span>. <span>All rights reserved</span>
                </div>
            </div>
        </div>
    </div>
);
