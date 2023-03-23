

import { useState } from 'react'
import Client from '../core/Client'
import TableActions from './TableActions'

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

const Table = (props: TableProps) => {




    const showAction = props.deletedClient || props.selectedClient 


    function selectedClient ( client: Client) {

    }


    function renderHeader(){
        return (
            <tr>
                <th className={`text-left p-4`}>Code</th>
                <th className={`text-left p-4`}>Name</th>
                <th className={`text-left p-4`}>Age</th>
                {showAction ? <th className={`p-4`}>Actions</th> : false}
            </tr>
        )
    }

    function renderData(){
        return props.clients?.map((client, i)=>{
            return(
                <tr key={client.id} className={`${ i% 2 === 0 ?'bg-indigo-200'
                : 'bg-indigo-100'
            }`}>
                    <td className={`text-left p-4 `}>{client.id}</td>
                    <td className={`text-left p-4 `}>{client.name}</td>
                    <td className={`text-left p-4 `}>{client.age}</td>

                    {showAction ?
                        <TableActions client={client} selectedClient={props.selectedClient} deletedClient={props.deletedClient}></TableActions>

                        : false
                    }
                </tr>
            )
        })
    }

    return(
        <>
            <table className={`w-full rounded-xl overflow-hidden`}>
                <thead
                    className={`bg-gradient-to-r from-indigo-500 to-indigo-800
                        text-gray-100
                    `}>
                    {renderHeader()}
                    
                </thead>
                <tbody className={``}>
                    {renderData()}
                </tbody>
            </table>
        </>
    )                    
}

export default Table