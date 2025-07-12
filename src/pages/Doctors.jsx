import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate()

  const {doctors} = useAppContext()
  const [filterDocs, setFilterDocs] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const applyFilter = () => {
    if(speciality){
      setFilterDocs(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDocs(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  },[doctors, speciality])
  
  return (
    <div>
        <p className='text-gray-600'>Browse through the doctors specialist</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <button onClick={() => setShowFilter(prev => !prev)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?"bg-primary text-white":""}`}>Filters</button>
          <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter?"flex": "hidden sm:flex"}`}>
            <p onClick={() => speciality === 'General physician' ? navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded translation-all cursor-pointer transition-all duration-500  ${speciality === "General physician"? 'bg-indigo-100 text-black' :'hover:bg-indigo-100/25 hover:text-black hover:scale-105'}`}>General physician</p>
            <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded translation-all cursor-pointer transition-all duration-500   ${speciality === "Gynecologist"?"bg-indigo-100 text-black":"hover:bg-indigo-100/25 hover:text-black hover:scale-105"}`}>Gynecologist</p>
            <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded translation-all cursor-pointer transition-all duration-500  ${speciality === "Dermatologist"?"bg-indigo-100 text-black":"hover:bg-indigo-100/25 hover:text-black hover:scale-105"}`}>Dermatologist</p>
            <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded translation-all cursor-pointer transition-all duration-500  ${speciality === "Pediatricians"?"bg-indigo-100 text-black":"hover:bg-indigo-100/25 hover:text-black hover:scale-105"}`}>Pediatricians</p>
            <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded translation-all cursor-pointer transition-all duration-500   ${speciality === "Neurologist"?"bg-indigo-100 text-black":"hover:bg-indigo-100/25 hover:text-black hover:scale-105"}`}>Neurologist</p>
            <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded translation-all cursor-pointer transition-all duration-500  ${speciality === "Gastroenterologist"?"bg-indigo-100 text-black":"hover:bg-indigo-100/25 hover:text-black hover:scale-105"}`} >Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {filterDocs.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
    </div>
  )
}

export default Doctors