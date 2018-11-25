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
          isRequired: true,
          requiredErrorText: "Please provide a first name"
        },
        {
          type: "text",
          name: "lastName",
          title: "Last Name: ",
          isRequired: true,
          requiredErrorText: "Please provide a last name"
        },
        {
          type: "text",
          name: "email",
          title: "Email:",
          isRequired: true,
          requiredErrorText: "Please provide an email address",
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
          isRequired: true,
          requiredErrorText: "Please provide a phone number",
          validators: [
            {
              type: "regex",
              text: "Please provide a valid phone number",
              regex: "^\\({0,1}((0|\\+61)(2|4|3|7|8)){0,1}\\){0,1}(\\ |-){0,1}[0-9]{2}(\\ |-){0,1}[0-9]{2}(\\ |-){0,1}[0-9]{1}(\\ |-){0,1}[0-9]{3}$"
            }
          ]
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
          type: "matrixdropdown",
          name: "volunteerPeriods",
          title: "I would prefer to volunteer",
          columns: [
            {
              name: "TimeOfDay",
              title: "Time Of Day"
            }
          ],
          choices: [
            "AM",
            "PM",
            "Evenings"
          ],
          cellType: "checkbox",
          rows: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
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
            "Current Drivers Licence (Full)",
            "None"
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
          type: "matrixdynamic",
          name: "otherLanguages",
          visibleIf: "{languages} = [\"Other (specify)\"]",
          title: "What other languages do you speak?",
          columns: [
            {
              name: "language",
              title: "Language",
              cellType: "text"
            }
          ],
          cellType: "text",
          rowCount: 1,
          addRowText: "Add Language",
          removeRowText: "Remove"
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
          type: "matrixdynamic",
          name: "otherSkills",
          visibleIf: "{skills} = [\"Other (what are you great at? Don’t be shy!)\"]",
          title: "You chose \"Other\". What other skills do you have?",
          columns: [
            {
              name: "skill",
              title: "Skill",
              cellType: "text"
            }
          ],
          cellType: "text",
          rowCount: 1,
          addRowText: "Add Skill",
          removeRowText: "Remove"
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
  showProgressBar: "top",
  showCompletedPage: false
}


export class Questionnaire extends React.Component {

  render() {
    const conf = {...configuration};
    if (this.props.initialData) {
      conf.data = { ...this.props.initialData };
    }
    return (
      <Survey.Survey json={conf} onComplete={this.props.onComplete} />
    )
  }
}