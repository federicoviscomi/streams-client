import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {createStream} from "../../actions";
import {connect} from "react-redux";

class StreamCreate extends Component {

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div
                className="field">
                <label>
                    {label}
                </label>
                <input
                    autoComplete="off"
                    {...input}
                />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
        const errors = {};
        if (!formValues.title) {
            errors.title = "you must enter a title";
        }
        if (!formValues.description) {
            errors.description = 'you must enter a description';
        }
        return errors;
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter description"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                />
                <button
                    className="ui button primary">
                    Submit
                </button>
            </form>
        );
    }
}

const validate = (formValues) => {

};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, {
    createStream
})(formWrapped);




