import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Questionnaire } from '../components/questionnaire';
import { UserDetailsForm } from '../components/UserDetailsForm';
import { LandingPage } from '../components/LandingPage'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello World
  </Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Questionnaire', module)
    .add('Survey', () => <Questionnaire onComplete={action('formsubmitted')}/>)

storiesOf('User Details', module)
  .add('User Details', () => <UserDetailsForm/>)

storiesOf('Landing Page', module)
    .add('Landing Page', () => <LandingPage/>)
