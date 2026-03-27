import React from 'react'

function Card({username,btnText="visit me"}) {
 
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">

        <div className="relative overflow-hidden rounded-lg mb-6">
          <img
            src="https://picsum.photos/400/300?random=90"
            alt="Featured content"
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase bg-white text-black rounded-full mb-3">
            {username}
          </span>

          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300">
            Modern Design Solutions
          </h2>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Discover cutting-edge design patterns and UI components.
        </p>

        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg">
            {btnText}
          </button>

          <div className="text-xs text-gray-500">
            234 views
          </div>
        </div>

      </div>
  )
}

export default Card
