import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "./Container"
import Flex from "./Flex"

const Shopdetils = () => {
  let productId = useParams()
  let [habib, sethabib] = useState([])

  let dataId = () => {
    axios.get(`https://dummyjson.com/products/${productId.Id}`).then((response) => {
      sethabib(response.data)
    })
  }

  useEffect(() => {
    dataId()
  }, [])


  console.log(habib);
  return (
    <div className="py-[150px]">
      <Container>
        <Flex className={`justify-between`}>

          {habib?.images?.map((hadfae) => (
            <div className="w-[30%]">
              <img src={hadfae} className="h-full w-full" alt="" />
              <div className=" flex justify-between">
                <h2>${habib.price}</h2>
                <h2>{habib.discountPercentage}</h2>
                <h2>{habib.stock}</h2>
              </div>
              <h2>{habib.category}</h2>
              <h2>{habib.description}</h2>
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  )
}

export default Shopdetils
