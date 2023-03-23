import Client from "@/core/Client";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
	client: Client;
    cancel?: ()=> void
    clientChanged?: (client: Client)=> void
}

const Form = (props: FormProps) => {
	const id = props.client?.id;
	const [name, setName] = useState(props.client?.name ?? "");
	const [age, setAge] = useState(props.client?.age ?? 0);



	return (
		<div>
			{id ? 
                <Input text="ID" value={id} readOnly className={`my-4`}/> 
                : false
            }

			<Input text="Name" value={name} onChange={setName} />
			<Input text="Age" value={age} type="number"
                onChange={setAge}
                className={`mt-4`}
            />

            <div className="flex justify-end mt-2">

                <Button
                    onClick={()=>props.clientChanged?.(new Client(name, +age, id))}
                    className=" mr-4
                        bg-gradient-to-r from-green-500 to-green-700"
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button onClick={props.cancel} className="bg-gradient-to-r from-gray-500 to-gray-700">
                    Cancel
                </Button>
                
            </div>
		</div>
	);
};

export default Form;
