import React from 'react'

export default class UserDetailsForm extends React.Component {

  constructor() {
    super()

  }

  render() {

    let userDetailsForm = {
      pages: [
      {
        name: "page1",
        elements: [
        {
          type: "text",
          name: "firstname",
          title: "First Name:"
        },
        {
          type: "text",
          name: "lastname",
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
          name: "question4",
          title: "Phone Number:"
        }
        ]
      }
      ]
    }
    return <Survey.Survey model={survey} onValueChanged={surveyValueChanged}/>
  }
}

  

  