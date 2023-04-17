import React, { useMemo } from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
	console.log("DemoOutput Running!")
	const arr = useMemo(()=>[5,3,2,4,1],[]);
	return <MyParagraph show={props.show} data={arr}></MyParagraph>
}

export default DemoOutput;