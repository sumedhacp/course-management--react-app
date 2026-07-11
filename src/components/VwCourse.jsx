import React, { useState } from 'react'

const VwCourse = () => {

    const [data, changeData] = useState(

        [
            {
                "id": 1,
                "course_name": "MERN Stack Bootcamp",
                "created_at": "2026-07-11T13:59:49",
                "duration": "8 Days",
                "fee": 15000,
                "mode": "Offline",
                "trainer": "Anish"
            },
            {
                "id": 2,
                "course_name": "Generative AI for Professionals",
                "created_at": "2026-07-11T13:59:49",
                "duration": "10 Days",
                "fee": 25000,
                "mode": "Online",
                "trainer": "Anish"
            },
            {
                "id": 3,
                "course_name": "React Corporate Training",
                "created_at": "2026-07-11T13:59:49",
                "duration": "3 Days",
                "fee": 71000,
                "mode": "Hybrid",
                "trainer": "Anish"
            }
        ]

    )
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map
                                    (
                                        (value, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                                    <div className="card">

                                                        <div className="card-body">
                                                            <h5 className="card-title">Details: </h5>
                                                            <p><b>Course Name: </b>{value.course_name}</p>
                                                            <p><b>Duration: </b>{value.duration}</p>
                                                            <p><b>Fee: </b>{value.fee}</p>
                                                            <p><b>Mode: </b>{value.mode}</p>
                                                            <p><b>Trainer: </b>{value.trainer}</p>
                                                            <p><b>Created At: </b>{value.created_at}</p>
                                                            <a href="#" className="btn btn-success">View</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default VwCourse