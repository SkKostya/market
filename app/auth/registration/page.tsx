'use client'

import Link from 'next/link'
import { Formik } from 'formik'

import { ROUTES } from '@/app/globals/routes'
import Input from '@/app/globals/shared/ui/input'

export default function Login() {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isValid }) => (
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <h1 className="auth-form__title">Регистрация</h1>
          <Input
            placeholder="Логин"
            className="auth-form__field"
            // onChange={(e) => console.log(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            className="auth-form__field"
            // onChange={(e) => console.log(e.target.value)}
            type="password"
          />
          <Link className="auth-form__link" href={ROUTES.login}>
            Войти
          </Link>
          <button className="button button--blue-outlined auth-form__submit">
            Зарегистрироваться
          </button>
        </form>
      )}
    </Formik>
  )
}
