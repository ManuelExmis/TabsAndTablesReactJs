import { useState } from 'react'
import Button from 'react-bootstrap/Button';


// redux
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteItemById,
  setEditingRow,
  updateItem
} from '../redux/tableReducer'

export const ItemTable = ({
  item
}) => {

  const isEditingFromRedux = useSelector((state) => state.tableReducer.isEditing)
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [localItem, setLocalItem] = useState(item)

  const beginEdit = () => {
    setIsEditing(true)
    setLocalItem(item)
  }

  const cancelEdit = () => {
    setIsEditing(false)
  }

  const handleChangeInput = (e) => {
    const {name, value} = e.target
    setLocalItem({
      ...localItem,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    console.log('submit')
    e.preventDefault()
    setIsEditing(false)
    dispatch(updateItem(localItem))
  }

  return (
    <tr>
      {
        isEditing 
        ? <>
            <td>
              <form id={`frm-${item.id}`} onSubmit={onSubmit}>
              </form>
              <input 
                value={ localItem.name }
                onChange={handleChangeInput}
                placeholder='type the name' 
                type='text' 
                name='name' 
                maxLength={50} 
                required 
                form={`frm-${item.id}`}
              />
            </td>
            <td>
              <input 
                value={ localItem.username }
                onChange={handleChangeInput}
                placeholder='type the username' 
                type='text' 
                name='username' 
                maxLength={15} 
                required 
                form={`frm-${item.id}`}
                />
            </td>
            <td>
              <input 
                value={ localItem.phone }
                onChange={handleChangeInput}
                placeholder='type the phone' 
                type='tel' 
                name='phone' 
                maxLength={15} 
                required 
                form={`frm-${item.id}`}
                />
            </td>
            <td>
              <input 
                value={ localItem.email }
                onChange={handleChangeInput}
                placeholder='type the email' 
                type='email' 
                name='email' 
                required 
                form={`frm-${item.id}`}
                />
            </td>
            <td>
              <input 
                value={ localItem.city }
                onChange={handleChangeInput}
                placeholder='type the city' 
                type='text' 
                name='city' 
                maxLength={50} 
                required 
                form={`frm-${item.id}`}
                />
            </td>
            <td>
              <Button className='btnGuardar' size="sm" as='input' variant='primary' form={`frm-${item.id}`} type='submit' value='Guardar' />
              <Button size="sm" type="button" variant='secondary' onClick={ cancelEdit }>Cancelar</Button>
            </td>  
        </>
        : <>
          <td>{ item.name }</td>
          <td>{ item.username }</td>
          <td>{ item.phone }</td>
          <td>{ item.email }</td>
          <td>{ item.city }</td>
          <td>
            <Button className='btnEditar' size="sm" variant='success' onClick={ () => beginEdit() }>Editar</Button>
            <Button size="sm" variant='danger' onClick={ () => dispatch(deleteItemById(item.id)) }>Eliminar</Button>
          </td>        
        </>
        
      }
    </tr>
  )

}

