import {useEffect}from 'react'

const useTitle = (title) => {
   // const titledoc=document.title(title)
    useEffect(()=>{
        document.title=`${title}`
    })
  return null;
}

export default useTitle