import React from "react";
import { Questionnaire } from "../components/questionnaire";

//Use this function to simulate delay
// eslint-disable-next-line
async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getSubmitUrl(email){
    return `https://eaodi56ir5.execute-api.us-east-2.amazonaws.com/prod/users/${email}/questionnaire`
}

export class Signup extends React.Component {
    onComplete = async (survey, surveyApi) => {
        surveyApi.showDataSaving("Submitting your sign-up. Please wait ...");
        //await timeout(5000);
        const {data} = survey;
        const url = getSubmitUrl(data.email);
        try {
            await fetch(url, {method: 'post', body: JSON.stringify(data)});
            surveyApi.showDataSavingSuccess("Your sign-up was successful. Welcome aboard!");
        } catch (e) {
            surveyApi.showDataSavingError("Sorry, a problem occurred submitting your form");
        }
    }

    render() {
        return <Questionnaire onComplete={this.onComplete}/>
    }
}