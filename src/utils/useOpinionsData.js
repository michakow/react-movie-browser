import { useState, useEffect } from "react"

export const useOpinionsData = () => {
  const [opinions, setOpinions] = useState({
    state: 'loading'
  })

  useEffect(() => {
    setOpinions({
      state: 'loading'
    })

    const fetchData = async () => {
      try{
        const res = await fetch('http://localhost:8888/opinions')
        if(!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        const opinions = data.opinions
        setOpinions({
          state: 'success',
          opinions,
        })
      } catch(error) {
        setOpinions({
          state: 'error'
        })
        console.error('Oops, something bad happend')
      }
    }

    setTimeout(fetchData, 1000)
  }, [])

  return opinions
}