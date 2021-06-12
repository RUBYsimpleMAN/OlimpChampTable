import { useState } from 'react'

import Aside from './Aside'
import TableWithPagination from './TableWithPagination'
import '../App.css'

const MainBlock = () => {
  const [ champion, setChampion ] = useState({})

  const selectChampion = (currentChampion) => {
    setChampion(currentChampion)
  }

  return (
    <div className='MainBlock_MainBlockClassName'>
      <div className='MainBlock_MainExtraClassName'>
        <TableWithPagination selectChampion={selectChampion}/>
      </div>
      <div className='MainBlock_AsideExtraClassName'>
        <Aside champion={champion} />
      </div>
    </div>
  )
}

export default MainBlock
