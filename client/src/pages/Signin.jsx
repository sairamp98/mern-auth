import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function Signin() {
  const [formData,setFormData] = useState({})
  const {loading, error} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]:e.target.value})
  };
  //console.log(formData);
  const handleSubmit = async (e) => {
    //prventDefault is used to avoid page refresh when we click on submit
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(data.success===false){
        dispatch(signInFailure(data))
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error))
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <button disabled={loading} className='bg-slate-700 rounded-lg uppercase hover:opacity-95 text-white p-3 disabled:opacity-80'>{loading?'Loading...':'Sign In'}</button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account? </p>
        <Link to="/sign-up">
        <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>
      <p className="text-red-600 mt-5">{error ? error.message ||"Something went wrong...." : ''}</p>
    </div>
  )
}
