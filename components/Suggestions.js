import { useState, useEffect } from 'react'
import faker from 'faker'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: 1,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className="font-semibold text-gray-400">See all </button>
      </div>
      <div>
        {suggestions.map((profile) => (
          <div
            key={profile.id}
            className="mt-3 flex items-center justify-between"
          >
            <img
              src={profile.avatar}
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-sm font-semibold ">{profile.username}</h2>
              <h3 className="text-sm text-gray-400 ">{profile.company.name}</h3>
            </div>
            <button className='text-blue-400 text-sm'>Follow</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suggestions
