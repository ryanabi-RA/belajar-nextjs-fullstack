import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { unAuthPage } from '../../middlewares/authorizationPage'

export async function getServerSideProps(ctx) {
    await unAuthPage(ctx)

    return { props: {} }
}

export default function Login() {
    const [fields, setFields] = useState({
        email: '',
        password: '',
    })

    const [status, setStatus] = useState('')

    async function loginHandler(e) {
        e.preventDefault()

        setStatus('loading')

        if (!fields.email || !fields.password)
            return setStatus('masukkan email & password')

        const loginReq = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'COntent-Type': 'application/json',
            },
        })

        if (!loginReq.ok) return setStatus('your email & password wrong')

        const loginRes = await loginReq.json()

        setStatus('login success')

        Cookie.set('token', loginRes.token)

        Router.push('/posts')
    }

    function fieldHandler(e) {
        const name = e.target.getAttribute('name')
        setFields({
            ...fields,
            [name]: e.target.value,
        })
    }

    return (
        <div className="w-full h-screen flex justify-center items-center dark:bg-black">
            <div className="relative">
                <div className="w-full h-full bg-blue-100 dark:bg-blue-900 rounded-2xl blur-sm absolute"></div>
                <div className="m-[6px] px-8 pb-10 border-2 border-blue-300 dark:border-blue-500 bg-white dark:bg-black rounded-xl flex flex-col justify-center items-center relative">
                    <h1 className="my-14 text-4xl dark:text-gray-300 font-bold">
                        Login
                    </h1>
                    <form
                        className="flex flex-col space-y-5 items-center"
                        onSubmit={loginHandler.bind(this)}
                    >
                        <div className="text-base text-emerald-500 font-medium">
                            {status}
                        </div>
                        <input
                            name="email"
                            type="text"
                            onChange={fieldHandler.bind(this)}
                            placeholder="Email"
                            className="p-2 w-64 rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-700"
                            required
                        />
                        <input
                            name="password"
                            type="password"
                            onChange={fieldHandler.bind(this)}
                            placeholder="Password"
                            className="p-2 w-64 rounded-lg bg-transparent border-2  border-gray-300 dark:border-gray-700"
                            required
                        />
                        <button
                            type="submit"
                            className="m-auto py-1 px-10 bg-blue-500 dark:bg-blue-800 hover:bg-transparent active:bg-blue-500 active:rounded-2xl rounded-2xl text-lg text-white border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 font-medium overflow-hidden"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
