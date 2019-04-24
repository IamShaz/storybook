import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import  Introduction  from '../components/intro'
import  ButtonAnimations  from '../components/buttons/ButtonAnimations'

storiesOf('Welcome', module).add('Intro', () => <Introduction />);
storiesOf('Buttons', module).add('Animations', () => <ButtonAnimations />);