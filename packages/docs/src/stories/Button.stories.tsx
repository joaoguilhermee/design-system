import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@joaoguilher.me/core-ui'

const meta = {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} satisfies Meta<ButtonProps>
export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
