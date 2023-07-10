import { IoClose, IoToday } from 'react-icons/io5'
import { useState } from 'react'
import './List.scss'

const List = () => {
  const [list, setList] = useState([
    { productId: 'foo', quantity: 1 },
    { productId: 'bar', quantity: 2 },
  ])
  const [name, setName] = useState('Yoyo')

  return (
    <>
      <div className="event_item">
        <span className="category work">work</span>
        <h3 className="describe">
          修改報告修改報告修改報告修改報告修改報告修改報告修改報告修改報告
        </h3>
        <p className="time">
          <IoToday className="icon" />
          2023.6.1 00:00
        </p>
      </div>
    </>
  )
}

export default List
