import { useState } from "react";
import StudentInputForm from "./pages/StudentInputForm";
// import config from "./config.js";
function App() {
    const [students, setStudents] = useState([]);
    const getStudents = async () => {
      const response = await fetch(
          'https://txrothumatsyjpckbgrl.supabase.co/rest/v1/students?',  {
            headers: {
              apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cm90aHVtYXRzeWpwY2tiZ3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MjgyNDksImV4cCI6MTk5NDMwNDI0OX0.dVF59XvFesnIvalXRzCWxRMgsYiEoHEUshpB1TkgDbg",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cm90aHVtYXRzeWpwY2tiZ3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MjgyNDksImV4cCI6MTk5NDMwNDI0OX0.dVF59XvFesnIvalXRzCWxRMgsYiEoHEUshpB1TkgDbg",

            // "Authorization": `Bearer ${config.API_KEY}`,
            // "Content-Type": "application/json"
            },
          });
      const students = await response.json();
      console.log(students)
    }
  return (
    <div className="App">
        <StudentInputForm/>
        <button onClick={() => getStudents()} className={'bg-blue-300'}>get students</button>

    </div>
  );
}

export default App;
