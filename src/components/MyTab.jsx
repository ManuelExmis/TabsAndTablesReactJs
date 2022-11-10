import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ItemTable } from './ItemTable'
import './table.css'

export const MyTab = ({
  value,
  index,
  data
}) => {

  return (
    <div
      role='tabpanel'
      hidden={ value !== index }
      id={`mysimple-tabpanel-${ index }`}
      aria-labelledby={`mysimple-tab-${ index }`}
    >
      {value === index && (
        <div>
         <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Date of birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, indexItem) => {
                return <ItemTable key={ indexItem } index={indexItem} item={item} />
              })
            }
          </tbody>
         </table>
        </div>
      )}
    </div>
  )
}

