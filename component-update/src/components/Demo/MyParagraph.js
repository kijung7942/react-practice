import React, { useMemo } from "react";

const MyParagraph = (props) => {
	const {data} = props
	const arr = useMemo(() => {
		console.log("useMemo2(sort) running!")
		return data.sort((a, b) => a - b);
	},[data]);
	console.log("MyParagraph Running!");
	return (
		<>
			<p>{props.show ? "This is new!" : ""}</p>
			<p>{arr}</p>
		</>
	);
};

export default React.memo(MyParagraph);
