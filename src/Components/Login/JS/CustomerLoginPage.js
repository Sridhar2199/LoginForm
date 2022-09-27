import LoginForm from "./LoginForm";

import "../CSS/CustomerLoginPage.css";

import LoginImage from "../../../Resources/Images/CustomerLoginPage.jpg";
import ProductInfo from "../../../Resources/Images/ProductInfo.png";


function CustomerLoginPage() {
  return (
    <div className="login-container">
        <img src={LoginImage} alt="LoginPageImage" className="login-image"></img>
        <div className="login-form">
                <img src={ProductInfo} alt="ProductInfo" className="product-image"></img>
                <LoginForm />
        </div>
    </div>
  );
}

export default CustomerLoginPage;
