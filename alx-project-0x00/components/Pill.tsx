import React from "react"

const Pill: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
      {title}
    </div>
  )
}

export default Pill;