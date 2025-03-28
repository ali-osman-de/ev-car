import { Cascader } from 'antd'
import React from 'react'

function CarFiltering() {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };
  return (

    <div >
      <div>
        <h2 className='text-xl font-sans font-medium my-3' >Filter By Category</h2>
        <p className='font-light text-sm font-normal leading-normal line-clamp-2 text-stone-500 my-1'>Brand</p>
        <Cascader options={options} onChange={onChange} placeholder="Please select" />
      </div>
      <div>
        <p className='font-light text-sm font-normal leading-normal line-clamp-2 text-stone-500 my-1'>Brand</p>
        <Cascader options={options} onChange={onChange} placeholder="Please select" />
      </div>
      <div>
        <p className='font-light text-sm font-normal leading-normal line-clamp-2 text-stone-500 my-1'>Brand</p>
        <Cascader options={options} onChange={onChange} placeholder="Please select" />
      </div>
    </div>

  )
}

export default CarFiltering
