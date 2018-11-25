import React from "react";
import { Questionnaire } from "../components/questionnaire";

//Use this function to simulate delay
// eslint-disable-next-line
async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getBaseUrl() {
    //return `https://eaodi56ir5.execute-api.us-east-2.amazonaws.com/prod/users`;
    return `https://f84u5dyfug.execute-api.ap-southeast-2.amazonaws.com/prod/users`;
}

function getSubmitUrl(email){
    return `${getBaseUrl()}/${email}/questionnaire`
}

export class Signup extends React.Component {
    onComplete = async (survey, surveyApi) => {
        surveyApi.showDataSaving("Submitting your sign-up. Please wait ...");
        //await timeout(5000);
        const {data} = survey;
        const url = getSubmitUrl(data.email);
        let success = false;
        try {
            await fetch(url, {method: 'post', mode: 'no-cors', body: JSON.stringify(data)});
            surveyApi.showDataSavingSuccess("Your sign-up was successful. Welcome aboard!");
            success = true;
        } catch (e) {
            surveyApi.showDataSavingError("Sorry, a problem occurred submitting your form");
        }
        if (success) {
            try {
                const notifyArgs = {
                    text: `Hey! A new volunteer just registered : ${survey.data.firstName} ${survey.data.lastName} (${survey.data.email})... get onto it!`,
                    username: "Kensington Bot",
                    icon_emoji: ":smile:"
                };
                await fetch('https://hooks.slack.com/services/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', { method: "POST", mode: "no-cors", body: JSON.stringify(notifyArgs)});
            } catch (e) {

            }
        }
    }

    render() {
        return <Questionnaire onComplete={this.onComplete}/>
    }
}