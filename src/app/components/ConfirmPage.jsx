import React, { Component } from 'react';
import swal from 'sweetalert';

import { User } from '../models/User';


export default class ConfirmPage extends Component {
    componentDidMount() {
        User.confirm(window.location.search, (resp) => {
            if (resp.data.errors && resp.data.errors.session_has_expired) {
                swal('Incorrect link or it`a expired', {
                    icon: 'info',
                }).then(() => {
                    window.location.pathname = '';
                });
            } else {
                window.localStorage.setItem('auth', JSON.stringify(resp.data.result.user));
                window.location.pathname = '/';
            }
        });
    }
    render() {
        return (
            <div className="row">
                <div className="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                    <div className="logo margin-top-30">
                        <h3 className="text-center">WAITING...</h3>
                    </div>
                </div>
            </div>
        );
    }
}
