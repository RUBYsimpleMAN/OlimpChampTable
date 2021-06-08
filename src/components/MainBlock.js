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
    <div className='MainBlockClassName'>
      <div style={styleMainExtra}>
        <TableWithPagination selectChampion={selectChampion}/>
      </div>
      <div style={styleAsideExtra}>
        <Aside champion={champion} />
      </div>
    </div>
  )
}

export default MainBlock

const styleMainExtra = {
  width: '78%',
  padding: '0 1%',
}
const styleAsideExtra = {
  width: '20%',
  padding: '0 1%',
  textAlign: 'center',
  color: 'silver',
}
