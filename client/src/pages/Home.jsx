import React from 'react'

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to My Authentication App</h1>
        <p className='mb-4 text-slate-700'>
            I have built an authentication app using the MERN stack (MongoDB, Express.js, React, and Node.js) integrated with Google Firebase for Google authentication. This project was a significant learning experience, as it helped me gain a deeper understanding of how to structure and organize code in a more efficient and maintainable way. Working with these technologies strengthened my fundamentals and broadened my expertise in full-stack development.
        </p>
        <p className='mb-4 text-slate-700'>
            One of the most rewarding aspects of this project was integrating Google Firebase for user authentication. It allowed me to seamlessly add a secure and user-friendly Google login option to the app. This experience taught me the importance of handling user data with care, ensuring privacy and security throughout the authentication process.
        </p>
        <p className='mb-4 text-slate-700'>
            Additionally, by working on this project, I was able to enhance my problem-solving skills, particularly in managing state in a React application and setting up backend routes in Node.js. This project has given me the confidence to tackle more complex full-stack development tasks and has solidified my understanding of modern web development practices.
        </p>
    </div>
  )
}
