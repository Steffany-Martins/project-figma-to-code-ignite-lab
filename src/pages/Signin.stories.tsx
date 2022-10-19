import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { SignIn } from './Signin'
import { rest } from 'msw'

export default {
  title: 'Components/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login Realizado!'
          }))
        })
      ],
    }
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'testing@project.com.br')
    userEvent.type(canvas.getByPlaceholderText('**********'), '12345678')
    userEvent.click(canvas.getByRole('button'))
    
    await waitFor(() => {
      return  expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
    })
  }
}
