import { useState } from 'react';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ userName: username, password: password })
    };
    async function handleLogin() {
        try {
            const response = await fetch(`/login`, requestOptions);
            const result = await response.json();

            setResponse(result)

        } catch (error) {
            console.error(error);
        }
    }
    const onFormSubmit = e => {
        e.preventDefault();

    }
    return <>
        <div className="flex items-center justify-center h-screen">
            <div className=" max-w-xs">
                <form onSubmit={onFormSubmit} className="bg-slate-200 shadow-md rounded px-8 py-6 m-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-4 text-center">
                        <label className=" text-gray-700 text-sm font-bold  ">
                            Username
                        </label>
                        <input id='login-userName' name="username" className=" border mt-2 rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-outline" type="text"
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-4 text-center">
                        <label className=" text-gray-700 text-sm font-bold ">
                            Password
                        </label>
                        <input id='login-password' name="password" className=" border mt-2 rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-outline" type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleLogin()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded outline-none "
                            type="submit">
                            Login
                        </button>
                    </div>
                    <p>
                        {response === true ?
                            'Gongrats! you are logged in.' :
                            response === false ?
                                'Wrong email or password' : null}
                    </p>

                </form>
            </div>
        </div>
    </>
}

export default Login
