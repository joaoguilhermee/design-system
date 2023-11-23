import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@joaoguilher.me/core-ui'

const meta = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/joaoguilhermee.png',
    alt: 'João Guilherme',
  },
} satisfies Meta<AvatarProps>
export default meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
