import LoginForm from "./LoginForm"
import "../CSS/CustomerLoginPage.css";
import ProductInfo from "../../../Resources/Images/ProductInfo.png";


function CustomerLoginPage() {
  return (
    <div className="login-container">
      <div className = "image-container">
          <header className="login-header">
              <h1>An Apex Product</h1>
              <p>Quality isnt Expensive</p>
          </header>
          <footer className="login-footer">
            <h4>Copyright &copy; by Apex organization</h4>
            <p>Entry to this site is restricted to subscribers</p>
          </footer>
      </div>
        <div className="login-form">
                <img src={ProductInfo} alt="ProductInfo" className="product-image"></img>
                <LoginForm />
        </div>
    </div>
  );
}

export default CustomerLoginPage;
