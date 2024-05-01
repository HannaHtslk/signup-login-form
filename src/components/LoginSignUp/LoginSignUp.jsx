import s from './LoginSignUp.module.css';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import user_icon from '../../assets/person.png';

const LoginSignUp = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.text}>SignUp</div>
        <div className={s.underline}></div>
      </div>
      <div className={s.inputs}>
        <div className={s.input}>
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className={s.input}>
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={s.input}>
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className={s.forgotPassword}>
        Lost Password? <span>Click here</span>
      </div>
      <div className={s.submitContainer}>
        <div className={s.submit}>Sign Up</div>
        <div className={s.submit}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
