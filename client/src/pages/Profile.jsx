import {useSelector} from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {getStorage, uploadBytesResumable, ref, getDownloadURL} from 'firebase/storage';
import {app} from '../firebase';
export default function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError,setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(formData);
  const {currentUser} = useSelector(state => state.user)
  useEffect(() => {
    if(image) {
      handleUploadImage(image);
    }
  }, [image]);
    const handleUploadImage = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
    (error) => {
      setImageError(true);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        setFormData({
          ...formData, profilePicture: downloadUrl
        })
      });
    }
  );
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-xl font-semibold text-center my-7'>Profile
        <form className='flex flex-col gap-4'>
          <input type="file" ref={fileRef} hidden accept='image/*' onChange={(e) => {setImage(e.target.files[0])}}></input>
          <img src={formData.profilePicture || currentUser.profilePicture} alt="profile" className='h-24 w-24 self-center cursor-pointer
          rounded-full object-cover mt-2' onClick={() => fileRef.current.click()}></img>
          <p className='text-sm self-center'>
            {imageError ? (
              <span className='text-red-700'>Error Uploading the image (file size must be less than 2 MB)</span> ): imagePercent >0 && imagePercent<100 ? (
                <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>) : imagePercent === 100 ? (
                  <span className='text-green-700'>Image uploaded successfully</span>
                ):'' 
            }
          </p>
          <input defaultValue={currentUser.username} type='text' id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3 text-xl'></input>
          <input defaultValue={currentUser.email} type='email' id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3 text-xl'></input>
          <input type='password' id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3 text-xl'></input>
          <button className='bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled: opacity-80 text-xl'>Update</button>
        </form>
        <div className='flex justify-between mt-5 text-xl'>
          <span className='text-red-700 cursor-pointer'>Delete Account</span>
          <span className='text-red-700 cursor-pointer'>Sign Out</span>
        </div>
      </h1>
    </div>
  )
}
