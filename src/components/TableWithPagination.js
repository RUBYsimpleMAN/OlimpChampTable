import { useEffect, useState } from 'react'

import getAsync from '../api/getAsync'
import './TableWithPagination.css'
import '../App.css'


const TableWithPagination = ({selectChampion}) => {
  const [ champions, setChampions ] = useState([])
  const [ pageCount, setPageCount ] = useState(0)
  const [ pageNr, setPageNr ] = useState(0)
  const [ visibleRowsOnPage, ] = useState(12)
  const [ headers, setHeaders ] = useState([]);
  const [ activeRowIndex, setActiveRowIndex ] = useState(0)
  const columnGroupStart = 7

  const onPrev = () => {
    if (pageNr!==0)
    setPageNr(pageNr-1)
  }

  const onNext = () => {
    if (pageNr<pageCount)
    setPageNr(pageNr+1)
  }

  const selectRow = (event) => {
    const currentId = +event.currentTarget.dataset.rowindex
    const championIndex = currentId+pageNr*visibleRowsOnPage
    setActiveRowIndex(currentId)
    selectChampion(champions[championIndex])
  }

  useEffect(() => {
    const getAsyncChampions = async () => {
    const result = await getAsync()
    setChampions(result)
    setPageCount(Math.floor(result.length/12))
    selectChampion(result[0])
  }
  getAsyncChampions()
  },[]);

  useEffect(()=> {
    if (champions.length===0) return
    const championIndex = pageNr*visibleRowsOnPage+activeRowIndex
    selectChampion(champions[championIndex])
  }, [pageNr, champions, selectChampion, visibleRowsOnPage, activeRowIndex])


  useEffect(()=> {
    if (champions.length !== 0) {
      setHeaders(["id", ...Object.keys(champions[0])]);
    }
  }, [champions])

  const onNextPage = (event) => {
    setPageNr(+event.target.dataset.pagenr)
  }

  return (
    <div className='tableAndButtons'>
      <div className='tablePad'>
        <table border="1" >
          <col className='col01'/>
          <col className='col02'/>
          <col className='col03'/>
          <col className='col04'/>
          <col className='col05'/>
          <col className='col06'/>
          <col className='col07'/>
          <col className='col08'/>
          <col className='col09'/>
          <col className='col10'/>
          <col className='col11'/>
          <caption>
            page <span>{pageNr+1}</span>
          </caption>
          <thead>
            <tr>
              {
                [...Array(columnGroupStart)].map((header, index) => (
                  <th rowSpan="2" key={index}>{headers[index]}</th>
                ))
              }
              <th colSpan="4">medals</th>
            </tr>
            <tr>
              {
                headers.map((header, index) => {
                  if (index >= columnGroupStart)
                    return <th key={index}>{header}</th>
                  }
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              champions.slice(pageNr*visibleRowsOnPage, pageNr*visibleRowsOnPage+visibleRowsOnPage)
              .map( (champion, index) => (
                <>
                  <tr style={(index===activeRowIndex ? activeRowStyle : {})} 
                    data-rowindex={+index}
                    onClick={selectRow}
                  >
                    <td>{index+pageNr*visibleRowsOnPage+1}</td>
                    <td>{champion.athlete}</td>
                    <td>{champion.age}</td>
                    <td>{champion.country}</td>
                    <td>{champion.year}</td>
                    <td>{champion.date}</td>
                    <td>{champion.sport}</td>
                    <td>{champion.gold}</td>
                    <td>{champion.silver}</td>
                    <td>{champion.bronze}</td>
                    <td>{champion.total}</td>
                  </tr>
                </>
              ))
            }
          </tbody> 
        </table>
      </div>{/* <div className='tablePad'> */}
      <div className='buttonBlock'>
        <button className='buttonPrev'
                onClick={onPrev}>
          prev
        </button>
          {
            [pageNr-1, pageNr].map( (buttonText) => (
              <button className='buttonPageNr'
                      data-pagenr={buttonText-1}
                      onClick={buttonText < 1 ? () => {} : onNextPage}
              >
                {
                  buttonText < 1 ? String.fromCharCode(160)+String.fromCharCode(160) : buttonText
                }
              </button>
            ))
          }
            <button className='buttonPageNrBold'
                    data-pagenr={pageNr}
                    onClick={onNextPage}
            >
              {pageNr+1}
            </button>
          {
            [pageNr+2, pageNr+3].map( (buttonText) => (
              <button className='buttonPageNr'
                      data-pagenr={buttonText-1}
                      onClick={buttonText >= pageCount ? () => {} : onNextPage}
              >
                {
                  buttonText > pageCount+1 ? String.fromCharCode(160)+String.fromCharCode(160) : buttonText
                }
              </button>
            ))
          }
        <button className='buttonNext'
                onClick={onNext} >
          next
        </button>
      </div>
    </div>
  )
}

const activeRowStyle = { color: "red" }

export default TableWithPagination
