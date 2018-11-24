import React from "react";
import { Questionnaire } from "../components/questionnaire";

function getSubmitUrl(email){
    return `https://1pf9vw9aw3.execute-api.ap-southeast-2.amazonaws.com/prod/users/${email}/questionnaire`
}

export class Signup extends React.Component {

    constructor(props){
        super(props)
        this.state = {isSubmitting: false, submitError: null, isSuccessful: false}
    }

    onComplete = async (survey, surveyApi) => {
        this.state.isSubmitting = true
        const {data} = survey
        const url = getSubmitUrl(data.email)
        try {
            await fetch(url, {method: 'post', body: JSON.stringify(data)});
            this.state.isSubmitting = false
            this.state.isSuccessful = true
        } catch (e) {
            this.state.isSubmitting = false
            this.state.submitError = 'error'

        }
    }

    render() {
          
        if (this.state.isSuccessful) {
            return <p>Success!</p>    
        } else {
            return <>
            {this.state.isSubmitting && <p>Submitting form. Please wait</p>}
            {this.state.submitError && <p>Uh-oh! Something went wrong</p>}
            <Questionnaire onComplete={this.onComplete}/>
            </>;
        }
        
    }
}