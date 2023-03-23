// @ts-nocheck

import { deleteIcon, editIcon } from '@/icons/icons'
import React from 'react'
import Client from '../core/Client'


interface TableActionsProps{
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
    client?: Client
}

const TableActions = (props: TableActionsProps) => {

    return true ? (
        <>
            <td className='flex justify-center items-center'>
                {
                    props.selectedClient ?(
                        <button 
                            onClick={()=>props.selectedClient?.(props.client)}
                            className={`flex justify-center items-center 
                            text-green-600 rounded-full p-2 m-1 hover:bg-indigo-50
                        `}>
                            {editIcon}
                        </button>
                    ) : false
                }
                {
                    props.deletedClient ?(
                        <button
                            onClick={()=>props.deletedClient?.(props.client)} 
                            className={`flex justify-center items-center 
                            text-red-600 rounded-full p-2 m-1 hover:bg-indigo-50
                        `} >
                            {deleteIcon}
                        </button>
                    ) : false
                }


            </td>
        </>

    ) : (
        <>
        
        </>
    )
}

export default TableActions