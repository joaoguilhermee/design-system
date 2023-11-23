import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@joaoguilher.me/core-ui'
import { ArrowRight } from 'phosphor-react'

const meta = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} satisfies Meta<ButtonProps>
export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
