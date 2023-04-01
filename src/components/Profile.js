import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CarContext from '../context/CarContext'
import CarCard from './CarCard'
import axios from 'axios'
const Profile = () => {
    const [UserCars, setUserCars] = useState([])
    const context = useContext(CarContext);
    const { user } = context;
    useEffect(() => {
      async function getAll(){
        const res = await axios.get(`https://marketplace-server-frjo.onrender.com/api/car/user/${user._id}`)
        setUserCars(res.data.cars.cars)
      }
      if(user){
       getAll(); 
      }
    }, [user])
    
    console.log(user);
  return (
    <div className='p-5'>
    <div className='py-5'>
        <h1 className="text-xl text-slate-950" > Name: {user?.name}</h1>
        <h1 className="text-xl text-slate-950" > Email: {user?.email}</h1>
    </div>
    <div>
        {
            UserCars.length > 0 ? (
                <div>
                <h5 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Go to your added car page to update or delete</h5> 
                 {
                    UserCars.map(ele => (
                       <Link to={`/car/${ele._id}`} ><CarCard key={ele._id} cars={ele} /></Link>
                    ))
                 }
                </div>
            ): (
                <div className='flex flex-col gap-4'>
                <h1 className="text-xl text-slate-950" >You Not Add a single car yet</h1>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    <Link to="/dealer">Add car</Link>
                </button>                    
                </div>
            )
        }
    </div>
    </div>
  )
}

export default Profile
