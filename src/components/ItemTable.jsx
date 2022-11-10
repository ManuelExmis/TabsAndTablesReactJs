import { useState } from 'react'

export const ItemTable = ({
  index,
  item
}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [localItem, setLocalItem] = useState(item)

  const beginEdit = () => {
    setIsEditing(true)
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

  return (
    <tr>
      {
        isEditing 
        ? <>
          <td>
            <input 
              value={ localItem.name }
              onChange={handleChangeInput}
              placeholder='type the name' 
              type='text' 
              name='name' 
              maxLength={50} 
              required 
            />
          </td>
          <td>
            <input 
              value={ localItem.address }
              onChange={handleChangeInput}
              placeholder='type the address' 
              type='text' 
              name='address' 
              maxLength={250} 
              required />
          </td>
          <td>
            <input 
              value={ localItem.dateOfBirth }
              onChange={handleChangeInput}
              placeholder='choose the date of birth' 
              type='date' 
              name='dateOfBirth' 
              required />
          </td>
          <td>
            <input 
              value={ localItem.phone }
              onChange={handleChangeInput}
              placeholder='type the telephone' 
              type='tel' 
              name='phone' 
              maxLength={10} 
              required />
          </td>
          <td>
            <input 
              value={ localItem.email }
              onChange={handleChangeInput}
              placeholder='type the email' 
              type='email' 
              name='email' 
              required />
          </td>
          <td>
            <button>Guardar</button>
            <button onClick={ cancelEdit }>Cancelar</button>
          </td>  
        </>
        : <>
          <td>{ item.name }</td>
          <td>{ item.address }</td>
          <td>{ item.dateOfBirth }</td>
          <td>{ item.phone }</td>
          <td>{ item.email }</td>
          <td>
            <button onClick={ beginEdit }>Editar</button>
            <button>Eliminar</button>
          </td>        
        </>
        
      }
    </tr>
  )

}

