import React, { useState, useEffect } from 'react';

export const StudentForm = () => {
    const [schools, setSchools] = useState([]);

    // schools = []
    // schools = [ {},   {}] XXXX
    // setSchools([ {},   {}] )

    useEffect(() => {
        getAllSchools()
            .then( data => setSchools(data) );
    }, []);

    const getAllSchools = async () => {
        const { data } = await axios.get(
            'https://piimxdgpkeyvvzcraoqk.supabase.co/rest/v1/schools',
            {
                headers: {
                    apikey:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaW14ZGdwa2V5dnZ6Y3Jhb3FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzY5MTA3NiwiZXhwIjoxOTkzMjY3MDc2fQ.bDX9OzIJ6v6zn9qeMsYM78WFieWIzB0wpbEfpOWJmzI',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaW14ZGdwa2V5dnZ6Y3Jhb3FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzY5MTA3NiwiZXhwIjoxOTkzMjY3MDc2fQ.bDX9OzIJ6v6zn9qeMsYM78WFieWIzB0wpbEfpOWJmzI',
                },
            }
        );

        // console.log(data);

        return data;
    };

    return (
        <>
            <form>
                <input type='text' placeholder='Enter Student name' />

                <select>
                    <option selected>-- select a school ---</option>
                    {
                        schools.map( item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </form>
        </>
    );
};



// import {useRef, useState} from "react";
//
// const StudentForm = () => {
//
//     // state
//     const [studentName, setStudentName] = useState()
//
//     // reference
//     const studentNameRef = useRef()
//     const studentLastNameRef = useRef()
//     const studentEmailRef = useRef()
//     const studentUserNameRef = useRef()
//     const studentPasswordRef = useRef()
//
//     const handleSubmit = (evt) => {
//         evt.preventDefault()
//
//         console.log(studentNameRef)
//         console.log(studentNameRef.current.value)
//         console.log(studentLastNameRef.current.value)
//         console.log(studentEmailRef.current.value)
//     }
//
//     return (
//         // name
//         <div>
//             <h3>{studentName}</h3>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder={'Student name'}
//                        ref={studentNameRef}
//                 />
//                 <input type="text" placeholder={'Student Last Name'}
//                        ref={studentLastNameRef}
//                 />
//                 <input type="text" placeholder={'Student Email'}
//                        ref={studentEmailRef}
//                 />
//                 <input type="text" placeholder={'Student Username'}
//                        ref={studentUserNameRef}
//                 />
//                 <input type="password" placeholder={'Student Password'}
//                        ref={studentPasswordRef}
//                 />
//
//                 <input type="submit" value="Add Student"/>
//             </form>
//         </div>
//     )
//
// }
//
// export default StudentForm;