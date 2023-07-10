import { Outlet } from 'react-router-dom'
import './Layout.scss'

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="left">
          <button className="normal_btn">依截止時間排序</button>
          <button className="normal_btn">依新增時間排序</button>
          <button className="normal_btn">依類別排序</button>
        </div>

        <div className="content">
          <Outlet />
        </div>

        <div className="right">
          <button className="normal_btn">新增待辦事項</button>
        </div>
      </div>
    </>
  )
}

export default Layout
