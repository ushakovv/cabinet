import React from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import { User } from '../models/User';
import { Form } from '../core/helper/Form';

const reg = (event) => {
    event.preventDefault();
    if (Form.validate(event.target)) {
        User.reg(event.target, () => {
            swal('An you email addres was send a mail. Plese confirm your profile', {
                icon: 'info',
            });
        });
    }
};

export const RegistrationPage = () => (
    <div className="row">
        <div className="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
            <div className="logo margin-top-30">
                <h3>MAILMAKER</h3>
            </div>
            <div className="box-register">
                <form className="form-register" onSubmit={reg}>
                    <fieldset>
                        <legend>Sign Up</legend>
                        <div className="form-group">
                            <span className="input-icon">
                                <input type="text" className="form-control" name="name" placeholder="Username" />
                                <span className="help-block" />
                                <i className="fa fa-user" />
                            </span>
                        </div>
                        <div className="form-group">
                            <span className="input-icon">
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                                <span className="help-block" />
                                <i className="fa fa-envelope" />
                            </span>
                        </div>
                        <div className="form-group">
                            <span className="input-icon">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <span className="help-block" />
                                <i className="fa fa-lock" />
                            </span>
                        </div>
                        <div className="form-actions">
                            <p>
                                Already have an account?
                                <Link to="/login/"> Log-in</Link>
                            </p>
                            <button type="submit" className="btn btn-primary pull-right">
                                Submit <i className="fa fa-arrow-circle-right" />
                            </button>
                        </div>
                    </fieldset>
                </form>
                <div className="copyright">&copy;
                <span className="current-year"></span>
                <span className="text-bold text-uppercase"> MailMaker</span>. <span>All rights reserved</span>
                </div>
            </div>
        </div>
    </div>
);
