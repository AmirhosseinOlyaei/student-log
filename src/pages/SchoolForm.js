import React, { useRef } from 'react';
import axios from 'axios';

export const SchoolForm = () => {
    const nameRef = useRef();
    const addressRef = useRef();

    const handleSchoolSubmit = async e => {
        e.preventDefault();

        // console.log(nameRef.current.value);
        // console.log(addressRef.current.value);

        const { data, status } = await axios.post(
            'https://txrothumatsyjpckbgrl.supabase.co/rest/v1/school',
            {
                name: nameRef.current.value,
                address: addressRef.current.value,
            },
            {
                headers: {
                    apikey:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cm90aHVtYXRzeWpwY2tiZ3JsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODcyODI0OSwiZXhwIjoxOTk0MzA0MjQ5fQ.xs5IqTdCwyNMcQBOch7juu0fl7bxEZQk6qOVdG3Vu_k',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cm90aHVtYXRzeWpwY2tiZ3JsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODcyODI0OSwiZXhwIjoxOTk0MzA0MjQ5fQ.xs5IqTdCwyNMcQBOch7juu0fl7bxEZQk6qOVdG3Vu_k',
                },
            }
        );

        console.log(`Added: ${nameRef.current.value} | Status: ${status}`);

        nameRef.current.value = '';
        addressRef.current.value = '';

        nameRef.current.focus();
    };

    return (
        <div>
            <form onSubmit={handleSchoolSubmit}>
                <input type='text' placeholder='School name' ref={nameRef} />
                <input type='text' placeholder='Address' ref={addressRef} />

                <input type='submit' value='Add School' />
            </form>
        </div>
    );
};
