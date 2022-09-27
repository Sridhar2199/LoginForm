import "../CSS/CustomerLoginPage.css";
import LoginImage from "../../../Resources/Images/CustomerLoginPage.jpg";
import LoginForm from "./LoginForm";

function CustomerLoginPage() {
  return (
    <div className="login-container">
      <img src={LoginImage} alt="LoginPageImage" className="login-image"></img>
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
}

export default CustomerLoginPage;
