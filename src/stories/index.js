import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Questionnaire } from '../components/questionnaire';
import { LandingPage } from '../pages/landing-page'

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

const onCompleteAction = (model, api) => {
  action('formsubmitted')(model, api);
  console.log([model, api]);
}

storiesOf('Questionnaire', module)
    .add('Survey', () => <Questionnaire onComplete={onCompleteAction}/>)

storiesOf('Landing Page', module)
    .add('Landing Page', () => <LandingPage/>)
