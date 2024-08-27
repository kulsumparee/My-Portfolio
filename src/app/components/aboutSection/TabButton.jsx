import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white border-b border-purple-500 " : "text-[#ADB7BE]"
  return (
    <div>
          <button onClick={selectTab} className=''>
              <p className={`  mr-3 font-semibold hover:text-white text-slate-200 ${buttonClasses} `}>
                  {children}
              </p>
          </button>

    </div>
  )
}

export default TabButton
