import React from "react";

interface InputProps {
	text: string;
	type?: "text" | "number";
	value: any;
	readOnly?: boolean;
    className?: string
    onChange?: (value: any)=> void
}

const Input = (props: InputProps) => {
	return (
		<div className={`flex flex-col ${props.className}`}>

			<label className={`mb-2`}>
                {props.text}
            </label>

			<input

                onChange={e => props.onChange?.(e.target.value)}
				type={props.type ?? "text"}
				value={props.value}
				readOnly={props.readOnly}
				className={`
                bg-gray-50 px-4 py-2
                border border-indigo-500 rounded-md
                focus:outline-none 
                ${props.readOnly ? "" : "focus:bg-gray-200"}

            `}
			/>
		</div>
	);
};

export default Input;
