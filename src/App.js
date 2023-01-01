// For Simple-Calculator-Addition

import React from "react";
import Fetch from "./Component/Fetch";
import SimpleCalculatorAddition from './Simple-Calculator-Addition'

const App = (props) => {

	return(
		<div>
			{/* <SimpleCalculatorAddition /> */}
			<Fetch />
		</div>
	)
}

export default App

//// For Table&Form

// import React,{useState} from "react";
// import Form from "./Table&Form/Form";
// import Table from "./Table&Form/Table";

// const App = (props) => {
// 	const [data, setData] = useState([])

// 	const addRows = (empData) => {
// 		const result = [...data,{...empData}]
// 		setData(result)
// 	}

// 	const tableRows = data.map((emp) =>{
// 		return(
// 		  <tr key= {emp.id}>
//             <td>{emp.id}</td>
//             <td>{emp.name}</td>
//             <td>{emp.email}</td>
//           </tr>
// 		)
// 	})
	

// 	return(
// 		<div>
// 			<h2>Table and Form</h2>

// 			<Form addRows={addRows}/>
// 			<Table tableRows={tableRows} />
// 		</div>
// 	)
// }

// export default App



















// import React,{useState} from "react";
// import Form from './Form'
// import Table from "./Table";


// const App = (props) => {
// 	const [data, setData] = useState([])

// 	const addRows = (empData) => {
// 		const result = [...data, {...empData}]
// 		setData(result)
// 	}

// 	const tableRows = data.map((emp)=>{
// 		return(
// 		  <tr key={emp.id}>
// 			<td>{emp.id}</td>
// 			<td>{emp.name}</td>
// 			<td>{emp.email}</td>
// 		  </tr>
// 		)
// 	  })

// 	return(
// 		<div>
// 			<h1>Table and Form Project</h1>

// 			<Form addRows={addRows}/>
// 			<Table tableRows={tableRows}/>
// 		</div>
// 	)
// }

// export default App




















// import React,{useState} from 'react'
// import Form from './Form'
// import Table from './Table'

// const App = (props) => {
// 	const [data, setData] = useState([])

// 	const addRows = (empData) => {
// 		const result = [...data, {...empData}]
// 		setData(result)
// 	}

	
// 	return(
// 		<div>
// 			<h1>Form and Table Project</h1>

// 			<Form addRows={addRows}/>
// 			<Table data={data}/>
// 		</div>
// 	)
// }

// export default App






















// import { useState } from "react";
// import Form from "./Form";
// import Table from "./Table";

// const App = (props) => {
// 	const [empData,setEmpData] = useState([])

// 	const addRows = (data) => {
// 		// console.log(data)		
// 		const result = [...empData,{...data}]		
// 		setEmpData(result);
// 	  };

	  

// 	  return(
// 		<div>
// 			<Form   addRows={addRows} />
// 			<Table empData={empData}/>
// 		</div>
// 	  )

// }

// export default App
