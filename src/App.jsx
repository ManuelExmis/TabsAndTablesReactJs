import { useState } from 'react'

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
  const [lista, setLista] = useState([
    {
      name: 'Manuel López',
      address: 'Km 8 carretera sur',
      dateOfBirth: '1997-05-19',
      phone: '57886421',
      email: 'lmanuelex@gmail.com'
    },
    {
      name: 'Gabriel Gimenez',
      address: 'Km 15 carretera sur',
      dateOfBirth: '1990-05-19',
      phone: '55886644',
      email: 'ggimenez@gmail.com'
    },
    {
      name: 'Leonel Messi',
      address: 'Km 13 carretera masaya',
      dateOfBirth: '1987-05-19',
      phone: '88669944',
      email: 'messi@gmail.com'
    },
    {
      name: 'Xavi Hernandez',
      address: 'Frente al camp nou',
      dateOfBirth: '1977-05-19',
      phone: '88997744',
      email: 'xavi@gmail.com'
    },
  ])

  const handleClickTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Box className="App">
      <div>
        <Tabs value={currentTab} onChange={handleClickTab} aria-label='basic tabs example'>
          <Tab label='Tab 1' id='mysimple-tabpanel-0' aria-controls='mysimple-tab-0'></Tab>
          <Tab label='Tab 2' id='mysimple-tabpanel-1' aria-controls='mysimple-tab-1'></Tab>
        </Tabs>
      </div>
      <MyTab value={currentTab} index={0} data={lista} />
      <MyTab value={currentTab} index={1} data={lista} />
    </Box>
  )
}

export default App
