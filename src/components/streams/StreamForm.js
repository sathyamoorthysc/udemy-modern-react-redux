import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component{
    renderError({error, touched}) {
        if(touched && error){
            return (
                <div className="ui error message visible">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInputs = ({ input, label , meta}) => {
        const fieldClass = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={fieldClass}>
                <label>{label}</label>
                {/* instead of using  onClick, value property explicitly passing all properties using ...input*/}
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
       return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name='title' component={this.renderInputs} label="Enter title"/>
                <Field name='description' component={this.renderInputs} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>
       );
    };
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter a title";
    } 
    if(!formValues.description){
        errors.description = "You must enter a description";
    }
    return errors;
}

export default reduxForm({
    form: 'StreamForm',
    validate //if keyvalue identical validate:validate can replace with 'validate'
})(StreamForm);