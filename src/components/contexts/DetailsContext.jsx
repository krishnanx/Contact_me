import React, { createContext, useContext, useState } from 'react'
export const Details = createContext();
const DetailsContext = ({children}) => {
  const [name,setName] = useState(null) 
  const [phone,setPhone] = useState(null)
  const [email,setEmail] = useState(null)
  const [subject,setSubject] = useState(null)
  return (
    <div>
        <Details.Provider value={[name,setName,phone,setPhone,email,setEmail,subject,setSubject]}>
            {children}
        </Details.Provider>
    </div>
  )
}

export default DetailsContext