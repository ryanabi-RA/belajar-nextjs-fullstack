import { useState } from "react";

export default function Register() {
    const [fields, setFields] = useState({
        email: '',
        password: ''
    });

    const [status, setStatus] = useState('');

    async function registerHandler(e) {
        e.preventDefault();

        setStatus('loading');

        const registerReq = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'COntent-Type': 'application/json'
            }
        });

        if (!registerReq.ok) return setStatus('error ' + registerReq.status)

        const registerRes = await registerReq.json();

        setStatus('create account success');
        // console.log(registerRes);
    }

    function fieldHandler(e) {
        const name = e.target.getAttribute('name');
        setFields({
            ...fields,
            [name]: e.target.value
        });
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="relative">
                <div className="w-full h-full bg-blue-900 rounded-2xl blur-sm absolute"></div>
                <div className="m-1 px-8 pb-10 border-2 border-blue-500 bg-black rounded-xl flex flex-col justify-center items-center relative">
                    <h1 className="my-14 text-4xl text-gray-300 font-bold">Register</h1>
                    <form className="flex flex-col space-y-5 items-center" onSubmit={registerHandler.bind(this)}>
                        <div className="text-base text-emerald-500 font-medium">{status}</div>
                        <input
                            name="email"
                            type="text"
                            onChange={fieldHandler.bind(this)}
                            placeholder="Email"
                            className="p-2 w-64 rounded-lg bg-transparent border-2 border-gray-700" />
                        <input
                            name="password"
                            type="password"
                            onChange={fieldHandler.bind(this)}
                            placeholder="Password"
                            className="p-2 w-64 rounded-lg bg-transparent border-2 border-gray-700" />
                        <button type="submit" className="m-auto py-1 px-10 bg-blue-800 hover:bg-blue-600 active:bg-transparent rounded-2xl text-lg hover:bg-transparent border-2 border-blue-700 hover:border-blue-500 font-medium">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
