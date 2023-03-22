import {useRef, useState} from "react";

const InputForm = () => {

    // state
    const [studentName, setStudentName] = useState()

    // reference
    const studentNameRef = useRef()
    const gradeRef = useRef()
    const schoolRef = useRef()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        console.log( charityNameRef )
        console.log( charityNameRef.current.value )
        console.log( descriptionRef.current.value )
        console.log( totalGrantRef.current.value )
        // console.log( evt.target.value )
    }

    return (
        // name
        <div>
            <h3>{charityName}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'charity name'}
                       ref={ charityNameRef }
                />
                <input type="text" placeholder={'Charity description'}
                       ref={descriptionRef}
                />
                <input type="number" placeholder={'Total Grant'}
                       ref={totalGrantRef}
                />

                <input type="submit" value="Add Charity"/>
            </form>
        </div>
    )
}

export default InputForm;