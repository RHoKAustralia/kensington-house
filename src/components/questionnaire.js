import React from 'react'
import * as Survey from 'survey-react'

const configuration = {

  pages: [
    {
      name: "page1",
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
          name: "volunteeringOpportunities",
          title: "Which of these Volunteer Opportunities sound interesting to you? (Tick as many as you like)",
          choices: [
            "Board of Management (Not For Profits are run by volunteer Boards of Management. Generally meet once a month on a weekday evening)",
            "Code Club (Nationwide, weekly after-school computer coding clubs for kids aged 9 – 11)",
            "Drop In Form Help (Assisting people to fill out forms online or on paper, various days and times)",
            "Family Literacy Program (weekly 1 hour session providing reading and writing support to children aged Prep – Year 4)",
            "Community Gardens (working bees, day to day garden maintenance, composting etc, flexible days and hours)",
            "Resume Support (Helping prepare professional resumes for people seeking employment, flexible days and hours)",
            "Vietnamese Interpreter (Fortnightly, Thursdays 10am – 12pm",
            "Gentle Exercise Instructor (Fortnightly, Thursdays 10am – 10.30am)",
            "Bus Driver (collecting and transporting people in a 12 seater mini-van. No special licence required. Various days and times)",
            "Kitchen Hand (Assists in preparing and serving meals, Wednesdays 11.30am – 1.30pm)",
            "Homework Club (help children from Prep – Year 10 with their homework, literacy and numeracy. Mondays or Wednesdays 5.30pm – 7.30pm)",
            "House/garden working bees (one off events at various times of the year)",
            "Festivals and events (eg. Kensington Community Festival, various dates and times of year) "
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