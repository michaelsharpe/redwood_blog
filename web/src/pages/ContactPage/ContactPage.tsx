import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  input: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label errorClassName="error" name="message">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
