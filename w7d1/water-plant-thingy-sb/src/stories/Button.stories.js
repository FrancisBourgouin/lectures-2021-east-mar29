import { storiesOf } from '@storybook/react'

import Button from '../components/Button'



storiesOf('Button component', module)
  .add('overdue to water', () => <Button danger={true}>Water the plant</Button>)
  .add('no need to water', () => <Button>Water the plant</Button>)