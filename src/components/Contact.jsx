'use client'

import { useState } from 'react'

export function Contact() {
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event) => {
    let errors = {}
    event.preventDefault()
    if (event.target.firstName.value === '') {
      errors.firstName = 'Campo requerido'
    }
    if (event.target.lastName.value === '') {
      errors.lastName = 'Campo requerido'
    }
    if (event.target.email.value === '') {
      errors.email = 'Campo requerido'
    }
    if (event.target.message.value === '') {
      errors.message = 'Campo requerido'
    }
    setErrors(errors)
    if (Object.keys(errors).length > 0) {
      return
    } else {
      setSuccess(true)

      try {
        const response = await fetch('/api/createContact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: event.target.firstName.value,
            apellido: event.target.lastName.value,
            email: event.target.email.value,
            contenido: event.target.message.value,
          }),
        });
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="relative bg-white">
      <div className="flex lg:absolute lg:inset-0 lg:left-1/2">
        <iframe
          className="my-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.994584026849!2d-79.89528712510568!3d-2.155751797825074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6da15e2b1c2b%3A0xd274a80c859ce020!2sMall%20del%20Sol!5e0!3m2!1ses!2sec!4v1730775275267!5m2!1ses!2sec"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Lets work together
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form onSubmit={handleSubmit} method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  {errors.firstName ? (
                    <div>
                      <p className="mt-1 text-sm font-normal text-red-700">
                        {errors.firstName}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  {errors.lastName ? (
                    <div>
                      <p className="mt-1 text-sm font-normal text-red-700">
                        {errors.lastName}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  {errors.email ? (
                    <div>
                      <p className="mt-1 text-sm font-normal text-red-700">
                        {errors.email}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div>
                  {errors.message ? (
                    <div>
                      <p className="mt-1 text-sm font-normal text-red-700">
                        {errors.message}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  disabled={success}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {success ? 'Message sent' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
