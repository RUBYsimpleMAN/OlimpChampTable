import imgGoldMedal from '../assets/imgs/248px_Gold.png'
import imgSilverMedal from '../assets/imgs/248px_Silver.png'
import imgBronzeMedal from '../assets/imgs/248px_Bronze.png'
import '../App.css'

const AsideActive = ({champion}) => {
  return (
    <div className='AsideActive_SelfStyle'>
      <div className='AsideActive_ChampionSportAndYear'>{champion.sport} {champion.year}</div>
      <div className='AsideActive_ChampionAthlete'>{champion.athlete}</div>
      <div className='AsideActive_ChampionCountry'>{champion.country}</div>
      <div> {champion.date} at age of {champion.age} earned a total of {champion.total} medals </div>
      <div style={styleMedalsBlock}>
        <span style={styleMedalBlock}>
          <div><img src={imgGoldMedal} className='AsideActive_ImgGoldMedal' alt="gold" /></div>
          <div>{champion.gold}</div>
        </span>
        <span style={styleMedalBlock}>
          <div><img src={imgSilverMedal} className='AsideActive_ImgSilverMedal' alt="silv" /></div>
          <div>{champion.silver}</div>
        </span>
        <span style={styleMedalBlock}>
          <div><img src={imgBronzeMedal} className='AsideActive_ImgBronzeMedal' alt="brnz" /></div>
          <div>{champion.bronze}</div>
        </span>
      </div>
    </div>
  )
}

const styleMedalsBlock = {
  display: 'flex',
}
const styleMedalBlock = {
  margin: '2vh auto'
}

export default AsideActive
