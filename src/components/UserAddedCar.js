import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"; 

const UserAddedCar = () => {
  const routeParams = useParams();
  const [title, settitle] = useState("");
  const [km, setkm] = useState(0);
  const [scratch, setscratch] = useState(0);
  const [accident, setaccident] = useState(0);
  const [image, setimage] = useState("");
  const [paint, setpaint] = useState("");
  const [place, setplace] = useState("");
  const [cardetail, setcardetail] = useState([]);
  useEffect(() => {
    async function getCar(){
       const res = await axios.get(`https://marketplace-server-frjo.onrender.com/api/car/${routeParams.id}`);
       setcardetail(res.data.car);
       settitle(res.data.car?.title);
       setaccident(res.data.car?.accident);
       setkm(res.data.car?.kms);
       setimage(res.data.car?.image)
       setscratch(res.data.car?.scratchs);
       setplace(res.data.car?.place);
       setpaint(res.data.car?.paint);
    }
    getCar();
  }, []);

  const updateCar = async () => {
      const credential = {
        title: title, 
        kms: km,
        scratchs: scratch, 
        paint: paint , 
        accident: accident, 
        place: place, 
        image: image, 
        user : cardetail.user
      };
      try {
        const res = await axios.put(
          `https://marketplace-server-frjo.onrender.com/api/car/update/${routeParams.id}`,
          credential
        );
        alert("updatation is successfull")
      } catch (e) {
        console.log(e);
      }
    }
    const deleteCar = async () => {
      try {
        const res = await axios.delete(
          `https://marketplace-server-frjo.onrender.com/api/car/${routeParams.id}`
        );
        alert("deletion is successfull")
      } catch (e) {
        console.log(e);
      }
    }
  
  return (
    <div className='p-4 flex flex-col '>
      <div className='flex items-center justify-center' >
          <div className="block max-w-md rounded-lg flex flex-row gap-5 bg-slate-300 p-6 shadow-lg dark:bg-neutral-700">
          <div className="space-y-4 md:space-y-6">
                  <div>
                      <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                      <input type="text" name="title" id="title" value={title} onChange={(e)=>{settitle(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="km" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">KMs on odeometer</label>
                      <input type="number" value={km} name="km" id="km" onChange={(e)=>{setkm(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="scratchs" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number on scratchs</label>
                      <input type="number" value={scratch} name="scratchs" id="scratchs" onChange={(e)=>{setscratch(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
          </div>
          <div className="space-y-4 md:space-y-6"> 
                  <div>
                      <label for="place" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Place</label>
                      <input type="text" value={place} name="place" id="place" onChange={(e)=>{setplace(e.target.value)}} placeholder="Noida" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="paint" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Orignal Paint of car</label>
                      <input type="text" value={paint} name="paint" id="paint" onChange={(e)=>{setpaint(e.target.value)}} placeholder="green" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL of car</label>
                      <input type="text" value={image} name="image" id="image" onChange={(e)=>{setimage(e.target.value)}} placeholder="URL of image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="accident" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nuber of accident register</label>
                      <input type="number" value={accident} name="accident" onChange={(e)=>{setaccident(e.target.value)}} id="accident" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>  
              </div>
          </div>  
          </div>
          <div className='flex my-5 justify-center' >
            <button onClick={updateCar} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">UPDATE</button>
            <button onClick={deleteCar} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>
          </div>
    </div>
  )
}

export default UserAddedCar
