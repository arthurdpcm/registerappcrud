import Client from "@/core/Client";
import React from "react";


interface ButtonProps {
	className?: string;
	children: any;
	onClick?: (any: any)=>void
}

const Button = (props: ButtonProps) => {

	return (
		<button
		onClick={props.onClick}
		className={`

			text-white
			px-4 py-2 rounded-md
			
        	${props.className}
    `}
		>
			{props.children}
		</button>
	);
};

export default Button;
