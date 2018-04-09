import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import { Template } from '../models/Template';
import { User } from '../models/User';
import { Frame } from '../core/helper/Frame';
import { asyncGetTemplates } from '../actions/tempate';


class CabinetPage extends Component {
    constructor(props) {
        super(props);
        props.onGetTemplates();
    }
    componentDidMount() {
        this.$tpl = $(this.tpl);
        this.$wrapper = $(this.wrapper);
        this.$tpl.on('click', () => {
            Template.create(null, (response) => {
                const { id } = response.data.result.template;
                window.location.pathname = `/create/${id}`;
            });
        });
        this.processingPath();
    }
    componentDidUpdate() {
        this.$wrapper.find('.btn-del').on('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            swal({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this template!',
                icon: 'warning',
                buttons: {
                    cancel: {
                        text: 'Cancel',
                        value: null,
                        visible: true,
                        className: '',
                        closeModal: true,
                    },
                    confirm: {
                        text: 'Delete',
                        value: true,
                        visible: true,
                        className: '',
                        closeModal: true,
                    },
                },
                dangerMode: true,
            }).then((isDelete) => {
                if (isDelete) {
                    const del = $(event.target).attr('data-delete-id');
                    Template.delete({ id: del }, () => {
                        swal('Poof! Your imaginary file has been deleted!', {
                            icon: 'success',
                        });
                        this.props.onGetTemplates();
                    });
                }
            });
        });
    }
    processingPath() {
        const path = window.location.pathname.split('/').filter((val) => {
            if (val) return val;
        });
        if (path[0] && path[1]) {
            if (path[0] === 'edit') {
                this.$wrapper.append(Frame.edit(path[1]));
            } else if (path[0] === 'create') {
                this.$wrapper.append(Frame.create(path[1]));
            }
        }
    }
    logout(event) {
        event.stopPropagation();
        User.logout(() => {
            window.localStorage.removeItem('auth');
            window.location.pathname = '/';
        });
    }
    render() {
        return (
            <div id="app" ref={(wrapper) => this.wrapper = wrapper}>
                <div className="sidebar app-aside" id="sidebar">
                    <div className="sidebar-container perfect-scrollbar">
                        <nav>
                            <ul className="main-navigation-menu">
                                <li className="active open">
                                    <a href="index.html">
                                        <div className="item-content">
                                            <div className="item-media">
                                                <i className="ti-home" />
                                            </div>
                                            <div className="item-inner">
                                                <span className="title">Templates</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="app-content">
                    <header className="navbar navbar-default navbar-static-top">
                        <div className="navbar-header">
                            <a
                                href="#"
                                className="sidebar-mobile-toggler pull-left hidden-md hidden-lg btn btn-navbar"
                                data-toggle-class="app-slide-off"
                                data-toggle-target="#app"
                                data-toggle-click-outside="#sidebar"
                            >
                                <i className="ti-align-justify" />
                            </a>
                            <a className="navbar-brand" href="/">
                                MAILMAKER
                            </a>
                            <a
                                className="pull-right menu-toggler visible-xs-block"
                                id="menu-toggler"
                                data-toggle="collapse"
                                href=".navbar-collapse"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <i className="ti-view-grid" />
                            </a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-right">
                                <li className="dropdown current-user">
                                    <a href className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="/assets/images/avatar-1.jpg" alt="Peter" />
                                        <span className="username">
                                            Peter<i className="ti-angle-down" />
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-dark">
                                        <li>
                                            <a href="javascript:void(0);" onClick={this.logout}>Log Out</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div
                                className="close-handle visible-xs-block menu-toggler"
                                data-toggle="collapse"
                                href=".navbar-collapse"
                            >
                                <div className="arrow-left" />
                                <div className="arrow-right" />
                            </div>
                        </div>
                    </header>
                    <div className="main-content">
                        <div className="container-fluid">
                            <div className="panel panel-transparent">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="thumbnail thumbnail_create" ref={(tpl) => this.tpl = tpl}>
                                            <img src="/assets/images/scratch.jpg" alt="" />
                                        </div>
                                        {
                                            this.props.template.map((template, index) => {
                                                return (
                                                    <a href={`/edit/${template.id}`} key={index}>
                                                        <div className="thumbnail">
                                                            <img
                                                                src={template.preview_url}
                                                                alt={`preview-${template.id}`}
                                                            />
                                                            <div className="caption">
                                                                <p className="thumbnail__remove">
                                                                    <i
                                                                        className="ti-close btn-del warning-message"
                                                                        ref={(del) => this.del = del}
                                                                        data-delete-id={template.id}
                                                                    />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer-inner">
                        <div className="pull-left">&copy;<span className="current-year" />
                            <span className="text-bold text-uppercase">MAILMAKER</span>. <span>All rights reserved</span>
                        </div>
                        <div className="pull-right">
                            <span className="go-top">
                                <i className="ti-angle-up" />
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    template: state.template,
});

const mapDispatchToProps = dispatch => ({
    onGetTemplates: () => {
        dispatch(asyncGetTemplates());
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CabinetPage));
