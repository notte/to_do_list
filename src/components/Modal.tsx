import './Modal.scss'
import { IoClose, IoToday } from 'react-icons/io5'

const Modal = () => {
  return (
    <>
      <div className="modal_container">
        <div className="modal">
          <button className="close">
            <IoClose className="icon close" />
          </button>
          <span className="category work">work</span>
          <h3 className="describe">
            修改報告修改報告修改報告修改報告修改報告修改報告修改報告修改報告修改報告修改報告修改報告
          </h3>
          <p className="time">
            <IoToday className="icon" />
            2023.6.1 00:00
          </p>
          <hr />
          <div className="modify">
            <button className="edit text_btn">編輯</button>
            <button className="dele text_btn">刪除</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
