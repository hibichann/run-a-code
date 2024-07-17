import { useState } from "react"

const options= ()=> {
  const [data, setData] = useState("123")

  return  (<div>{data}</div>)
  
}
export default options
