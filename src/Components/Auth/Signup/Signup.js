import React, { useState } from 'react'
import { useRegisterMutation } from '../../../Generic/Query'
import { useNavigate } from 'react-router-dom'
import {Alert} from 'react-bootstrap'
import Home from '../../../Pages/HomePageRender/Home'
import './Signup.css'
import FanFavourites from '../../../Pages/HomePageRender/HomePages/FanFavourites/FanFavourites'

const Signup = () => {

  const navigate = useNavigate()
  const [showLogIn,setShowLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false);
  const[formdata, setFormdata] = useState({
    email:"",password:''
})

  const [register,{isLoading,isError,error}] = useRegisterMutation()
  
  const displayLogin = ()=>{
    setShowLogin(!showLogIn)
    navigate('/')
  }

  const displaySignIn = ()=>{
    navigate('/signin')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleOnchange = (event)=>{
    const  {name, value} = event.target
    setFormdata({...formdata , [name]:value})
}


  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register({ ...formdata });
      
      if (response.data) {
        navigate('/');
      } else if (response.error && response.error.message === 'Email Already Exists') {
 
        console.log('Email Already Exists');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
}

  return (
    <>
    <FanFavourites/>
     { showLogIn && <div className='main-model'>
            <div className='main-model-container'>
                <div className='main-model-close-btn-container'>
              <div className='model-close-btn'>
                <svg onClick={displayLogin} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0891 2.08885C17.4145 1.76341 17.4145 1.23577 17.0891 0.910337C16.7637 0.584901 16.236 0.584901 15.9106 0.910337L8.99984 7.82108L2.08909 0.910337C1.76366 0.584901 1.23602 0.584901 0.910582 0.910337C0.585145 1.23577 0.585145 1.76341 0.910582 2.08885L7.82133 8.99959L0.910582 15.9103C0.585145 16.2358 0.585145 16.7634 0.910582 17.0889C1.23602 17.4143 1.76366 17.4143 2.08909 17.0889L8.99984 10.1781L15.9106 17.0889C16.236 17.4143 16.7637 17.4143 17.0891 17.0889C17.4145 16.7634 17.4145 16.2358 17.0891 15.9103L10.1783 8.99959L17.0891 2.08885Z" fill="#333333"></path>
                </svg>
                </div>  
                
                <section id='model-login'>
                  <div className='model-inner-container'>
                      <header className='login-header'>
                          <h2 className='login-header-text'>CREATE AN ACCOUNT</h2>
                      </header>
                      {isError && <Alert variant='danger'>{error.data}</Alert> }
                      <div className='signup-recipe-text' >Save recipes across devices, write reviews, and share your own photos</div>
                      <main className='model-body'>
                          <form action='submit' className='login-form' onSubmit={handleOnSubmit}>
                                <label className='signup-input-label'>Email</label>
                                <input 
                                type='email' 
                                placeholder='your@email.com' 
                                required 
                                value={formdata.email}
                                name='email'
                                onChange={handleOnchange}
                                className='form-input-field'/>

                                <label className='input-label input-password'>Password</label>
                                <div className='password-input'>
                              <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                required
                                value={formdata.password}
                                name='password'
                                onChange={handleOnchange}
                                className='form-input-field'
                              />
                              <button
                                type='button'
                                className='signup-toggle-password-btn'
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? 'Hide' : 'Show'}
                              </button>
                            </div>

                                <button className='login-btn' disabled={isLoading}>CREATE ACCOUNT</button> 
                         
                                <div className='terms-and-condition-container'>
                                <div
                                      className={`custom-checkbox-label ${isChecked ? "checked" : ""}`}
                                      onClick={toggleCheckbox}
                                    >
                                    {isChecked && <span className="tick-mark">✔</span>}
                                    </div>
                                 <span className='terms-text'> By creating an account, you agree to the <span style={{color:'#1769c2',cursor:'pointer'}}>Terms of Use</span> and have read our <span style={{color:'#1769c2',cursor:'pointer'}}>Privacy Policy</span>. Discovery and its <span style={{color:'#1769c2',cursor:'pointer'}}>affiliates</span> may use your email address to provide updates, ads, and offers. You can opt out or learn more about your rights via the <span style={{color:'#1769c2',cursor:'pointer'}}>Privacy Policy</span>.</span>
                                </div>


                                <div className='login-form-social-container'>
                                    <h3 className='login-continue'>OR CONTINUE WITH</h3>
                                    <ul className='login-social-list'>
                                      <li className='social-list-item'>
                                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="27" fill="black"></rect><rect width="24" height="24" transform="translate(15 15)" fill="black"></rect><path d="M36.2807 33.424C35.9328 34.2275 35.5211 34.9672 35.0441 35.6472C34.3939 36.5743 33.8615 37.216 33.4512 37.5724C32.8152 38.1573 32.1337 38.4568 31.404 38.4739C30.8801 38.4739 30.2483 38.3248 29.5129 38.0224C28.7751 37.7214 28.097 37.5724 27.4771 37.5724C26.8268 37.5724 26.1295 37.7214 25.3836 38.0224C24.6365 38.3248 24.0347 38.4824 23.5746 38.498C22.8748 38.5278 22.1773 38.2197 21.4811 37.5724C21.0367 37.1848 20.4809 36.5204 19.815 35.5791C19.1006 34.5739 18.5133 33.4084 18.0532 32.0795C17.5604 30.6442 17.3134 29.2543 17.3134 27.9087C17.3134 26.3673 17.6464 25.0379 18.3135 23.9238C18.8378 23.029 19.5353 22.3231 20.4083 21.8049C21.2813 21.2867 22.2246 21.0227 23.2404 21.0058C23.7962 21.0058 24.5251 21.1777 25.4308 21.5156C26.334 21.8546 26.914 22.0265 27.1683 22.0265C27.3584 22.0265 28.0026 21.8255 29.0948 21.4247C30.1277 21.0531 30.9994 20.8992 31.7135 20.9598C33.6485 21.1159 35.1023 21.8788 36.0691 23.253C34.3385 24.3016 33.4824 25.7703 33.4995 27.6544C33.5151 29.122 34.0475 30.3432 35.0938 31.3129C35.568 31.7629 36.0975 32.1107 36.6867 32.3578C36.5589 32.7283 36.4241 33.0832 36.2807 33.424ZM31.8427 15.9601C31.8427 17.1104 31.4224 18.1844 30.5848 19.1785C29.574 20.3602 28.3513 21.0431 27.0254 20.9354C27.0086 20.7974 26.9988 20.6521 26.9988 20.4995C26.9988 19.3953 27.4795 18.2135 28.3331 17.2472C28.7593 16.758 29.3014 16.3512 29.9587 16.0267C30.6146 15.7071 31.235 15.5303 31.8185 15.5C31.8356 15.6538 31.8427 15.8076 31.8427 15.9601V15.9601Z" fill="white"></path></svg>
                                      </li>

                                      <li className='social-list-item'>
                                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="27" fill="#1877F2"></rect><g clip-path="url(#clip0_84_5821)"><rect width="24" height="24" transform="translate(15 15)" fill="#1877F2"></rect><path d="M38.5 27.0699C38.5 20.7186 33.3513 15.5699 27 15.5699C20.6487 15.5699 15.5 20.7186 15.5 27.0699C15.5 32.8099 19.7054 37.5674 25.2031 38.4302V30.3941H22.2832V27.0699H25.2031V24.5363C25.2031 21.6541 26.92 20.0621 29.5468 20.0621C30.805 20.0621 32.1211 20.2867 32.1211 20.2867V23.1168H30.671C29.2424 23.1168 28.7969 24.0032 28.7969 24.9127V27.0699H31.9863L31.4765 30.3941H28.7969V38.4302C34.2946 37.5674 38.5 32.8099 38.5 27.0699Z" fill="white"></path></g><defs><clipPath id="clip0_84_5821"><rect width="24" height="24" fill="white" transform="translate(15 15)"></rect></clipPath></defs></svg>
                                      </li>

                                      <li className='social-list-item'>
                                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="52" height="52" rx="26" fill="white"></rect><rect width="24" height="24" transform="translate(15 15)" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M38.04 27.2614C38.04 26.4459 37.9668 25.6618 37.8309 24.9091H27V29.3575H33.1891C32.9225 30.795 32.1123 32.013 30.8943 32.8284V35.7139H34.6109C36.7855 33.7118 38.04 30.7637 38.04 27.2614Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27 38.4998C30.105 38.4998 32.7081 37.47 34.6109 35.7137L30.8943 32.8282C29.8645 33.5182 28.5472 33.9259 27 33.9259C24.0047 33.9259 21.4695 31.903 20.5652 29.1848H16.7231V32.1644C18.6154 35.9228 22.5045 38.4998 27 38.4998Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5652 29.1851C20.3352 28.4951 20.2045 27.758 20.2045 27.0001C20.2045 26.2421 20.3352 25.5051 20.5652 24.8151V21.8355H16.7232C15.9443 23.388 15.5 25.1444 15.5 27.0001C15.5 28.8557 15.9443 30.6121 16.7232 32.1646L20.5652 29.1851Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27 20.0739C28.6884 20.0739 30.2043 20.6541 31.3961 21.7936L34.6945 18.4952C32.7029 16.6395 30.0997 15.5 27 15.5C22.5045 15.5 18.6154 18.077 16.7231 21.8355L20.5652 24.815C21.4695 22.0968 24.0047 20.0739 27 20.0739Z" fill="#EA4335"></path><rect x="1" y="1" width="52" height="52" rx="26" stroke="#F2F2F2" stroke-width="2"></rect></svg>
                                      </li>

                                      <li className='social-list-item'>
                                      <svg width="54" height="54"  viewBox="0 -40 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="52" height="52" rx="26" fill="white"></rect><rect width="24" height="24" transform="translate(15 15)" fill="white"></rect><rect x="1" y="1" width="52" height="52" rx="26" stroke="#F2F2F2" stroke-width="2"></rect><path d="M370.9,206.9c0,16.7,0.6,33.3-0.2,50c-0.8,19,5,35.3,17,49.7c1.4,1.7,2.7,3.4,3.9,5.2   c4.3,6.5,3.5,11-2.4,16c-12.6,10.6-25.1,21.3-37.7,31.9c-7.5,6.3-12.2,6.2-19.8,0c-10.2-8.3-18.2-18.5-25.3-29.4   c-1.7-2.6-2.6-2.5-4.7-0.5c-12.6,12.3-25.9,23.7-42.8,29.4c-26.1,8.9-52.6,10.3-78.8,1c-25.2-9-40.3-27.6-45.9-53.5   c-6.2-28.9-3-56.4,14.8-80.9c13.5-18.5,32.2-29.4,53.7-36.1c22.2-6.8,45.1-9.4,68.1-11.7c6.5-0.7,12.9-1.3,19.4-1.9   c1.6-0.1,3-0.3,2.9-2.4c-0.2-10.6,0.9-21.4-1.6-31.8c-3.2-13.3-11.9-21.1-25.2-24c-9.5-2.1-18.9-1.5-28.1,1.6   c-14,4.8-22.7,14.5-26.2,28.9c-1.9,7.9-5.6,10.7-13.3,9.9c-16.4-1.7-32.8-3.4-49.1-5.1c-6.7-0.7-10.2-5.8-8.8-12.3   c8.5-41.5,35.7-64.8,74.9-75.5c30.1-8.2,60.6-8.7,90.8-0.2c24.3,6.8,44.7,18.8,56.1,42.6c6.5,13.5,8,28.1,8.2,42.7   C371,169.2,370.8,188.1,370.9,206.9C370.8,206.9,370.9,206.9,370.9,206.9z M293.1,238.1c0-5-0.2-10,0.1-15c0.2-3.1-0.9-4.2-4-3.9   c-7.6,0.7-15.3,0.8-22.9,1.8c-13.3,1.7-26.3,5-37.1,13.4c-15.7,12.3-19,29.1-16.4,48c3.1,22.2,22.9,34.5,44.1,27.1   c14.4-5,23.2-15.6,29.3-28.9C292.6,267.1,293.1,252.6,293.1,238.1z" fill="#050606"></path><path d="M256.1,463.8c-76.3-0.5-144.8-20.1-206.7-61.4c-12.6-8.4-24.6-17.6-36-27.7c-1-0.9-2-1.8-2.8-2.9   c-1.1-1.5-1.9-3.3-0.6-5.1c1.3-2,3.5-2.2,5.4-1.3c4.4,2.1,8.6,4.4,12.9,6.6c39.4,20.8,80.9,35.8,124.4,45.3   c39.4,8.6,79.2,12.6,119.6,11.5c57.7-1.6,113.3-13.2,166.8-34.7c2.6-1.1,5.3-2.2,8-2.8c3.8-0.7,7.6-0.2,9.3,3.9   c1.6,3.8-0.5,6.8-3.3,9.2c-2,1.7-4.3,3.1-6.6,4.6c-34.5,22.4-72.3,36.8-112.3,45.7C307.8,460.7,281,463.6,256.1,463.8z" fill="#F6A61F"></path><path d="M448.6,374.7c-11.5-0.1-22.9,1.4-34.3,2.6c-2.2,0.2-4.7,0.8-5.7-1.6c-1.2-2.7,1.1-4.3,3-5.6   c14.2-9.4,30.1-13.1,46.8-14c11.5-0.7,22.9-0.2,34.1,3.2c5.1,1.5,7.6,4.5,7.5,9.7c-0.6,27.8-9.9,52-30,71.7   c-0.7,0.7-1.5,1.3-2.3,1.9c-1.8,1.3-4,2.5-5.9,0.9c-1.8-1.5-0.8-3.7,0-5.5c5.9-14.7,11.9-29.3,14.8-45c0.4-2,0.5-4,0.6-5.9   c0.1-6.5-2.2-9.3-8.6-10.9C461.9,374.4,455.2,374.7,448.6,374.7z" fill="#F6A61F"></path></svg>
                                      </li>
                                     
                                    </ul>
                                </div>
                               <div className='dont-have-account-container'>
                               <div className='account-sentence-static'>Already a member?<span className='signup-link-in-login' onClick={displaySignIn}> Log In</span></div>
                               </div>
                          </form>
                      </main>
                  </div>
                </section>
                </div>
            </div>
        </div> }
  
    </>
  )
}

export default Signup
