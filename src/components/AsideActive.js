import imgGoldMedal from '../assets/imgs/248px_Gold.png'
import imgSilverMedal from '../assets/imgs/248px_Silver.png'
import imgBronzeMedal from '../assets/imgs/248px_Bronze.png'
import '../App.css'

const AsideActive = ({champion}) => {
  return (
    <div style={styleAsideActive}>
      <div style={styleChampionSportAndYear}>{champion.sport} {champion.year}</div>
      <div style={styleChampionAthlete}>{champion.athlete}</div>
      <div style={styleChampionCountry}>{champion.country}</div>
      <div> {champion.date} at age of {champion.age} earned a total of {champion.total} medals </div>
      <div style={styleMedalsBlock}>
        <span style={styleMedalBlock}>
          <div><img src={imgGoldMedal} style={styleImgGoldMedal} alt="gold" /></div>
          <div>{champion.gold}</div>
        </span>
        <span style={styleMedalBlock}>
          <div><img src={imgSilverMedal} style={styleImgSilverMedal} alt="silv" /></div>
          <div>{champion.silver}</div>
        </span>
        <span style={styleMedalBlock}>
          <div><img src={imgBronzeMedal} style={styleImgBronzeMedal} alt="brnz" /></div>
          <div>{champion.bronze}</div>
        </span>
      </div>
    </div>
  )
}

const styleAsideActive = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '95%',  
  maxHeight: '95%',
  padding: '2vh 1% 0%',
  fontFamily: 'Lato',
  fontSize: 'calc(3.5vw - (1vw - 0.3vw))',
  fontWeight: '300',
  lineHeight: 'calc(6px + 5vmin)',
  border: '1px solid #61dafb80',
  overflow: 'hidden'
}
const styleChampionAthlete = {
  paddingTop: '2vh'
}
const styleChampionSportAndYear = {
  fontSize: '1.6vw',
  fontWeight: '600',
}
const styleChampionCountry = {
  fontSize: '1.6vw',
  fontWeight: '600',
  padding: '1vh'
}
const styleMedalsBlock = {
  display: 'flex',
}
const styleMedalBlock = {
  margin: '2vh auto'
}
const styleImgGoldMedal = {
  width: '5vw',
}
const styleImgSilverMedal = {
  width: '5vw',
}
const styleImgBronzeMedal = {
  width: '5vw',
}

export default AsideActive
