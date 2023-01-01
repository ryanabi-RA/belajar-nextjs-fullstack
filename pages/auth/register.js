import { useState } from 'react'
import { unAuthPage } from '../../middlewares/authorizationPage'

export async function getServerSideProps(ctx) {
    await unAuthPage(ctx)

    return { props: {} }
}

export default function Register() {
    const [fields, setFields] = useState({
        email: '',
        password: '',
    })

    const [status, setStatus] = useState('')

    async function registerHandler(e) {
        e.preventDefault()

        setStatus('loading')

        if (!fields.email || !fields.password)
            return setStatus('masukkan email & password')

        const registerReq = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'COntent-Type': 'application/json',
            },
        })

        if (!registerReq.ok) return setStatus('error ' + registerReq.status)

        const registerRes = await registerReq.json()

        setStatus('create account success')
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
                        Register
                    </h1>
                    <form
                        className="flex flex-col space-y-5 items-center"
                        onSubmit={registerHandler.bind(this)}
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
                            className="p-2 w-64 rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-700"
                            required
                        />
                        <button
                            type="submit"
                            className="m-auto py-1 px-10 bg-blue-500 dark:bg-blue-800 hover:bg-transparent active:bg-blue-500 active:rounded-2xl rounded-2xl text-lg text-white hover:text-blue-500 border-2 border-blue-500 dark:border-blue-700 hover:border-blue-500 font-medium overflow-hidden"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
