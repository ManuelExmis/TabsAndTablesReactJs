import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ItemTable } from './ItemTable'
import './table.css'

import Table from 'react-bootstrap/Table';

// redux
import { useSelector } from 'react-redux'

export const MyTab = ({
  value,
  index
}) => {

  const dataUsers = useSelector((state) => state.tableReducer.data)

  return (
    <div
      role='tabpanel'
      hidden={ value !== index }
      id={`mysimple-tabpanel-${ index }`}
      aria-labelledby={`mysimple-tab-${ index }`}
    >
      {value === index && (
        <div>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              dataUsers.map((item, itemIndex) => {
                return <ItemTable key={ itemIndex } item={item} />
              })
            }
          </tbody>
         </Table>
        </div>
      )}
    </div>
  )
}

