import React from 'react'
import * as Survey from 'survey-react'
import '../styles/survey.css'

const configuration = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "firstName",
          title: "First Name:",
          requiredErrorText: "Please provide a first name."
        },
        {
          type: "text",
          name: "lastName",
          title: "Last Name: "
        },
        {
          type: "text",
          name: "email",
          title: "Email:",
          validators: [
            {
              type: "email"
            }
          ],
          inputType: "email"
        },
        {
          type: "text",
          name: "phoneNumber",
          title: "Phone Number:",
          valueName: "phone number"
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "dropdown",
          name: "wouldVolunteer",
          title: "I would prefer to volunteer",
          choices: [
            "Once a week",
            "Once a month",
            "For one-off events"
          ]
        },
        {
          type: "dropdown",
          name: "availability",
          title: "I am available",
          choices: [
            "Week days only",
            "Weekends",
            "Week nights only"
          ]
        },
        {
          type: "checkbox",
          name: "chosenQualificationsAndClearances",
          title: "I have a (tick as many as apply)",
          choices: [
            "Current Working With Children Check",
            "Current VIT Registration",
            "Current Vic Police Check",
            "Current Drivers Licence (Full)"
          ]
        },
        {
          type: "checkbox",
          name: "languages",
          title: "In addition to English, I speak:",
          choices: [
            "Cantonese",
            "Mandarin",
            "Arabic",
            "Somali",
            "Vietnamese",
            "Farsi",
            "Other (specify)"
          ]
        },
        {
          type: "checkbox",
          name: "skills",
          title: "Volunteering doesn’t always have to mean a regular weekly commitment. Community organisations frequently need help with one-off tasks that they don’t have the skills, or time, for. Do you have any of these skills? Tick as many as apply.",
          choices: [
            "Bookkeeping/Accounting/Financial Reporting",
            "Policy writing",
            "Graphic Design",
            "IT skills (specify)",
            "Website design",
            "Social media marketing",
            "Strategic Planning",
            "Photography",
            "Film Making",
            "Proof Reading/Editing",
            "Other (what are you great at? Don’t be shy!)"
          ]
        },
        {
          type: "checkbox",
          name: "restrictions",
          title: "So that we don’t bother you with unsuitable options, please tick any of these that apply to you:",
          choices: [
            "I really don’t want to volunteer with children",
            "Not keen on working with elderly people",
            "I’d prefer ways I could contribute from home/online rather than face-to-face"
          ]
        }
      ]
    }
  ],
  showCompletedPage: false
}


export class Questionnaire extends React.Component {

  render() {
    return (
      <Survey.Survey json={configuration} onComplete={this.props.onComplete} />
    )
  }
}