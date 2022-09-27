import '../CSS/LoginForm.css'


function LoginForm() {
    return (
        <div class="child-login-form">   
                <input type="email" placeholder="Email" name="Email" id="child-login-email"/>               
                <input type="password" placeholder="Password" name="Password" id="child-login-password"/>
                <button type="submit" id="child-login-proceed">Proceed</button>          
        </div>
    )
}

export default LoginForm;