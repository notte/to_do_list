import { useState } from 'react'

import { DatePicker, Input, Select, Row, Col } from 'antd'
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker'
import type { SizeType } from 'antd/es/config-provider/SizeContext'

import './Edit.scss'

const { TextArea } = Input

const Edit = () => {
  const [size, setSize] = useState<SizeType>('large')

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string
  ) => {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  const onOk = (
    value: DatePickerProps['value'] | RangePickerProps['value']
  ) => {
    console.log('onOk: ', value)
  }

  return (
    <>
      <div className="edit_container">
        <TextArea
          className="textarea"
          bordered={false}
          allowClear
          placeholder="事件描述"
        />
        <div className="select-warp">
          <Select
            className="select"
            placeholder="請選擇分類"
            bordered={false}
            size={size}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
          <DatePicker
            placeholder="請選擇日期時間"
            className="datepicker"
            showTime
            size={size}
            onChange={onChange}
            onOk={onOk}
          />
        </div>
      </div>
    </>
  )
}

export default Edit
