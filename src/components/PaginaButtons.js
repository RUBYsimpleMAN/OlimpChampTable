
import getAsync from '../api/getAsync'

const PaginaButtons = ({goToPage,pageNr,pageCount}) => {

  const onNextPage = (event) => {
    goToPage(+event.target.dataset.pagenr)
  }

  return (
    <div>
      <div style={{display:"flex"}}>
        {
          [pageNr-1, pageNr].map( (buttonText) => (
          <div>
            <button
              data-pagenr={buttonText-1}
              onClick={buttonText < 1 ? () => {} : onNextPage}
            >
              {
                buttonText < 1 ? String.fromCharCode(160)+String.fromCharCode(160) : buttonText
              }
            </button>
          </div>
          ))
        }
        {
          Array.from(new Array (pageCount))
          .map((page, index) => index+1)
          .slice(pageNr, pageNr+3)
          .map( (buttonText) =>
            (
              <div>
                <button
                  data-pagenr={buttonText-1}
                  onClick={onNextPage}
                >
                  {buttonText}
                </button>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default PaginaButtons
