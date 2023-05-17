
const Login = ({onSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                Email: <input type="email" name='email' placeholder="email" />
                <br/>
                Password: <input type="password" name='password' placeholder="password" />
                <br/>
                <input type='submit' value="Submit" />
            </form>
            <br />
            <div>Not registered yet?, <a href="/signup" >Signup</a> here.</div>
        </div>
    )

}

export default Login