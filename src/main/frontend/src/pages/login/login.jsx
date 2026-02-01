import "../login/login.css";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <div class="login-card-container">
      <div class="login-card">
        <div class="login-card-logo">
          <img src={logo} alt="logo" />
        </div>

        <div class="login-card-header">
          <h1>Sign In</h1>
          <div>Please login to use platform</div>
        </div>

        <form action="" class="login-card-form">
          <div class="form-item">
            <span class="form-item-icon material-symbols-rounded">mail</span>
            <input type="text" placeholder="Enter Email" required autofocus />
          </div>

          <div class="form-item">
            <span class="form-item-icon material-symbols-rounded">lock</span>
            <input type="password" placeholder="Enter Password" required />
          </div>

          <div class="form-item-other">
            <div class="checkbox">
              <input type="checkbox" id="rememberMeCheckbox" />
              <label for="rememberMeCheckbox">Remember me</label>
            </div>
            <a href="#">I forgot my password</a>
          </div>
          <div class="login-card-footer">
            Don't have an account? <a href="#">Create a free account</a>.
          </div>
          <button type="submit">Sign In</button>
          <div class="login-card-social">
            <div>Other Sing-in Platform</div>

            <div class="login-card-social-btns">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-google"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
