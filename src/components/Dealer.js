import React, {useState, useContext} from "react";
import ODM from '../dummy'
import axios from "axios";
import CarContext from '../context/CarContext'

const Dealer = () => {
  
  const context = useContext(CarContext);

  const [title, settitle] = useState("");
  const [km, setkm] = useState(0);
  const [scratch, setscratch] = useState(0);
  const [accident, setaccident] = useState(0);
  const [image, setimage] = useState("");
  const [paint, setpaint] = useState("");
  const [place, setplace] = useState("");
  
  const [odmData, setodmData] = useState({
    model_name: '',
    year_of_model: 0,
    list_price: 0,
    mileage: 0,
    power: 0,
    max_speed: 0,
  })
  function handleSelect(e){
    if(e.target.value === "Choose a cars"){
      setodmData({
        model_name: '',
        year_of_model: 0,
        list_price: 0,
        mileage: 0,
        power: 0,
        max_speed: 0,
      })
    }else{
      setodmData({
        model_name: ODM[e.target.value].model_name,
        year_of_model: ODM[e.target.value].year_of_model,
        list_price: ODM[e.target.value].list_price,
        mileage: ODM[e.target.value].mileage,
        power: ODM[e.target.value].power,
        max_speed: ODM[e.target.value].max_speed,
      })
    }
    console.log(e.target.value);
  }

  const addCar = async () => {
        const { user } = context;
         if(user){
        const credential = {
          title: title, 
          kms: km,
          scratchs: scratch, 
          paint: paint , 
          accident: accident, 
          place: place, 
          image: image, 
          user : user._id 
        };
        try {
          const res = await axios.post(
            "https://marketplace-server-frjo.onrender.com/api/car/add",
            credential
          );
          alert(" Car added to market place")
        } catch (e) {
          alert("not able to add this car");
        }
      } else {
        alert("first you need to login")
      }
  }

  return (
    <div className="p-4 ml-10 flex flex-col place-content-center gap-4" >
      <div className="flex flex-col py-2 font-bold leading-relaxed text-justify gap-2" >
        <h1 className="text-5xl text-slate-950" >Add Your Car to Market Place</h1>
        <h1 className="text-xl text-slate-500">and earn from it</h1>
      </div>
      <div className="flex flex-col py-2 drop-shadow-md gap-4" >
        <div>
          <label
            for="countries"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Select Car from list OCM list
          </label>
          <select
            id="cars"
            onChange={e => handleSelect(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a cars</option>
            {
              ODM.map(ele => (
                <option value={ele.id} >{ele.model_name}</option>
              ))
            }
          </select>
        </div>
        <div className="flex justify-evenly" >
          <div className="block max-w-md rounded-lg bg-slate-300 p-6 shadow-lg w-1/2 dark:bg-neutral-700">
          <form className="space-y-4 md:space-y-6" action="/">
                  <div>
                      <label for="model_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">model_name</label>
                      <input type="number" name="model_name" id="model_name" placeholder={odmData.model_name}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" disabled/>
                  </div>
                  <div>
                      <label for="year_of_model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">year_of_model</label>
                      <input type="number" name="year_of_model" id="year_of_model" placeholder={odmData.year_of_model}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" disabled/>
                  </div>
                  <div>
                      <label for="list_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">list_price</label>
                      <input type="number" name="list_price" id="list_price" placeholder={odmData.list_price} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" disabled/>
                  </div>
                  <div>
                      <label for="mileage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">mileage</label>
                      <input type="number" name="mileage" id="mileage"  placeholder={odmData.mileage} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" disabled/>
                  </div>
                  <div>
                      <label for="power" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pwer</label>
                      <input type="number" name="power" id="power" placeholder={odmData.power} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" disabled/>
                  </div>
                  <div>
                      <label for="max_speed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">max_speed</label>
                      <input type="number" name="max_speed" id="max_speed" placeholder={odmData.max_speed} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" disabled/>
                  </div>
              </form>
          </div>
          <div className="block max-w-md rounded-lg bg-slate-300 p-6 shadow-lg w-1/2 dark:bg-neutral-700">
          <form className="space-y-4 md:space-y-6" action="/">
                  <div>
                      <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                      <input type="text" name="title" id="title" placeholder="honda city" onChange={(e)=>{settitle(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="km" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">KMs on odeometer</label>
                      <input type="number" name="km" id="km" onChange={(e)=>{setkm(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="scratchs" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number on scratchs</label>
                      <input type="number" name="scratchs" id="scratchs" onChange={(e)=>{setscratch(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="place" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Place</label>
                      <input type="text" name="place" id="place" onChange={(e)=>{setplace(e.target.value)}} placeholder="Noida" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="paint" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Orignal Paint of car</label>
                      <input type="text" name="paint" id="paint" onChange={(e)=>{setpaint(e.target.value)}} placeholder="green" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL of car</label>
                      <input type="text" name="image" id="image" onChange={(e)=>{setimage(e.target.value)}} placeholder="URL of image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="accident" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nuber of accident register</label>
                      <input type="number" name="accident" onChange={(e)=>{setaccident(e.target.value)}} id="accident" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>  
              </form>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={addCar}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            ADD CAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dealer;
