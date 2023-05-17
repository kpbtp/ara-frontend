
const Signup = () => {
   

    const handleSubmit = () => {
       console.log('sign up')
       
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            Email: <input type="email" name='email' placeholder="email" />
            <br/>
            Password: <input type="password" name='password' placeholder="password" />
            <br/>
            Password Confirmation: <input type="password" name='password_confirmation' placeholder="password confirm" />
            <br/>
            <input type='submit' value="Submit" />
        </form>
        <br />
        <div>Already registered, <a href="/login" >Login</a> here.</div>
    </div>
    )
}
export default Signup