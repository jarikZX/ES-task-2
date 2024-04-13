import faceImage from './assets/faceImage.jpg'
import Comm from './assets/communication.svg'
import Fork from './assets/office.svg'
import Problem from './assets/problem.svg'
import Business from './assets/business.svg'
import { Card } from './components/card/card'
import './App.css'

function App() {
  return (
    <> 
      <div className='mainCard'>
        <Card src={faceImage} class='imageFace'/>
        <p>Ташланов Ярослав</p>
      </div>
      <div className='forCard'>
        <div className='for'>
          <Card src={Comm} class='imageFace'/>
          <p>Коммуникация ― способность находить общий язык с разными типажами людей и в разных ситуациях.</p>
        </div>
        <div className='for'>
          <Card src={Fork} class='imageFace'/>
          <p>Командная работа ― способность влиться в команду, работать вместе и помогать другим участникам.</p>
        </div>
        <div className='for'>
          <Card src={Problem} class='imageFace'/>
          <p>Problem solving ― умение решать проблемы и находить выход из сложных ситуаций.</p>
        </div>
        <div className='for'>
          <Card src={Business} class='imageFace'/>
          <p>Ориентация на результат ― способность работать не ради процесса, а ради результата.</p>
        </div>
      </div>
      <div className='tenCard'>
        <div className='ten'>
          <p>REST API</p>
        </div>
        <div className='ten'>
          <p>Алгоритмы и структуры данных</p>
        </div>
        <div className='ten'>
          <p>React</p>
        </div>
        <div className='ten'>
          <p>Vue.js</p>
        </div>
        <div className='ten'>
          <p>Next.js</p>
        </div>
        <div className='ten'>
          <p>TypeScript</p>
        </div>
        <div className='ten'>
          <p>GraphQL</p>
        </div>
        <div className='ten'>
          <p>Тестирование</p>
        </div>
        <div className='ten'>
          <p>Node.js</p>
        </div>
        <div className='ten'>
          <p>Docer</p>
        </div>
      </div>
      
    </>
  )
}

export default App
