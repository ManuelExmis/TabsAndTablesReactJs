import { useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import {
  setData,
  setFetching
} from './redux/tableReducer'

import 'bootstrap/dist/css/bootstrap.min.css';

// material ui
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

// my components
import { MyTab } from './components/MyTab'

import reactLogo from './assets/react.svg'
//import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState(0)
  const dispatch = useDispatch()

  const handleClickTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        let users = json.map(item => {
          return {
            id: item.id,
            name: item.name,
            username: item.username,
            phone: item.phone,
            email: item.email,
            city: item.address.city
          }
        })

        dispatch(setData(users))
      })
      .catch(error => {
        console.log('error cargando datos del api: ', error)
      })
  }, [])

  return (
    <Box className="App">
      <div>
        <Tabs value={currentTab} onChange={handleClickTab} aria-label='basic tabs example'>
          <Tab label='Tab 1' id='mysimple-tabpanel-0' aria-controls='mysimple-tab-0'></Tab>
          <Tab label='Tab 2' id='mysimple-tabpanel-1' aria-controls='mysimple-tab-1'></Tab>
        </Tabs>
      </div>
      <MyTab value={currentTab} index={0} />
      <MyTab value={currentTab} index={1} />
    </Box>
  )
}

export default App
