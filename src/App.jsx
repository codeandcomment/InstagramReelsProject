import { useEffect, useState } from 'react'
import { getAllVideos } from './components/apis/videos'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{

   const res = getAllVideos()
   console.log(res);

  },[])

  return (
    <>
      <div>
       </div>
    </>
  )
}

export default App
