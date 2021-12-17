import React from "react";
import { ImSpinner3 } from 'react-icons/im';
import stl from "./Spinner.module.css";
export const Spinner = () => {
    return (<div className={stl.spinner}>
			<ImSpinner3 className={stl.spinning} size={60}/>
		</div>);
};
