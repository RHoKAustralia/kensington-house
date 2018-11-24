import React from "react";
import * as Survey from "survey-react";

const configuration = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "firstName",
          title: "First Name:"
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
    }
  ]
};

export class UserDetailsForm extends React.Component {
  render() {
    return (
      <Survey.Survey json={configuration} onComplete={this.props.onComplete} />
    );
  }
}
