import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className=" inline-block py-1 px-3 rounded-full border-2 border-secondary text-primary md:text-left text-center font-notoSansJP font-bold text-xl hover:bg-secondary hover:text-shadow-sm">
        {heading}
      </div>
  )
}

export default Heading
