import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePro } from './Context'

// https://jsonplaceholder.typicode.com/todos
function Home() {

  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
  const [data, setData] = useState([])

  const {todo, setTodo} = usePro()

  
  async function getData() {
    const response = await fetch(apiUrl)
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  useEffect(() => {
    getData()
  }, [])


  const handleClick = (e) => {
    let value = e.target.querySelector('p').innerHTML
    setTodo((prev) => {
      return [...prev, value]
    })

    console.log(todo)
  }

  

  return (
    <>

      <main className='mt-10'>
          <section className='bg-red grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1' >
            {
              data.map((item, index) => {
                return (
                <div onClick={handleClick} key={index} className='border w-full p-5'>
                  <h1 className='text-green-700 text-xl'>Title {index}</h1>
                  <p key={index}>{item.title}</p> 
                </div>
                )

              })

            }
          </section>
      </main>
    </>
  )
}

export default Home
