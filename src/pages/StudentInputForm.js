import {useRef, useState} from "react";

const StudentInputForm = () => {

    // state
    const [studentName, setStudentName] = useState()

    // reference
    const studentNameRef = useRef()
    const studentLastNameRef = useRef()
    const studentEmailRef = useRef()
    const studentUserNameRef = useRef()
    const studentPasswordRef = useRef()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        console.log(studentNameRef)
        console.log(studentNameRef.current.value)
        console.log(studentLastNameRef.current.value)
        console.log(studentEmailRef.current.value)
    }

    return (
        // name
        <div>
            <h3>{studentName}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'Student name'}
                       ref={studentNameRef}
                />
                <input type="text" placeholder={'Student Last Name'}
                       ref={studentLastNameRef}
                />
                <input type="text" placeholder={'Student Email'}
                       ref={studentEmailRef}
                />
                <input type="text" placeholder={'Student Username'}
                       ref={studentUserNameRef}
                />
                <input type="password" placeholder={'Student Password'}
                       ref={studentPasswordRef}
                />

                <input type="submit" value="Add Student"/>
            </form>
        </div>
    )

}

export default StudentInputForm;