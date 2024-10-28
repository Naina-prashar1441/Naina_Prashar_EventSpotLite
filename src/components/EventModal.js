import React from 'react';
import HeartButton from "./HeartButton"; 

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center animate-fadeIn mt-32 bg-black bg-opacity-60" onClick={onClose}>
      <div className="relative top-0 left-0 bg-white w-[680px] h-[510px] mt-16 p-5 rounded-2xl" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-[10px] left-[650px] text-black text-[18px] cursor-pointer z-10" onClick={onClose}>X</button>
        <h2 className='font-bold -mt-3 mb-2 text-[20px]'>{event.name}</h2>
        <img src={event.image} alt={event.name} className='w-[650px] h-[350px] rounded-xl' />
        <p className='font-bold mt-2 text-[18px]'>{event.description}</p>
        <p className='font-bold'>{event.location}</p>
        <p className='font-bold '>{event.date}</p>
        <HeartButton initialLikes={event.likes} />
      </div>
    </div>
  );
};

export default EventModal;
