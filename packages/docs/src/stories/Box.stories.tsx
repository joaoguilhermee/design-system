import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@joaoguilher.me/core-ui'

const meta = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} satisfies Meta<BoxProps>
export default meta

export const Primary: StoryObj<BoxProps> = {}
