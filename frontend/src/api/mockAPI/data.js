export const mockData = {
    sessions: [
        {
            id: 1,
            start_date: "2019-09-08T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            name: "2019 Fall",
            rate1: 45.55,
            rate2: 47.33
        },
        {
            id: 2,
            start_date: "2020-01-01T00:00:00.000Z",
            end_date: "2020-04-30T00:00:00.000Z",
            name: "2021 Spring",
            rate1: 45.55,
            rate2: null
        }
    ],
    available_contract_templates: [
        {
            template_file: "/math/default.html"
        },
        {
            template_file: "/math/default2018.html"
        },
        {
            template_file: "/math/invigilate.html"
        },
        {
            template_file: "/math/invigilate2014.html"
        },
        {
            template_file: "/math/oto.html"
        }
    ],
    contract_templates: [
        {
            id: 1,
            template_name: "standard",
            template_file: "/math/default.html"
        },
        {
            id: 2,
            template_name: "oto",
            template_file: "/math/oto.html"
        },
        {
            id: 3,
            template_name: "standard",
            template_file: "/math/default2018.html"
        },
        {
            id: 4,
            template_name: "invigilate",
            template_file: "/math/invigilate.html"
        }
    ],
    contract_templates_by_session: {
        "1": [1, 2],
        "2": [3, 4]
    },
    instructors: [
        {
            id: 1000,
            last_name: "Smith",
            first_name: "Henry",
            email: "hery.smith@utoronto.ca",
            utorid: "smithh"
        },
        {
            id: 1001,
            last_name: "Garcia",
            first_name: "Emily",
            email: "emily.garcia@utoronto.ca",
            utorid: "garciae"
        },
        {
            id: 1002,
            last_name: "Miller",
            first_name: "Megan",
            email: "megan.miller@utoronto.ca",
            utorid: "millerm"
        },
        {
            id: 1003,
            last_name: "Beera",
            first_name: "Lizzy",
            email: "lizzy.beera@utoronto.ca",
            utorid: "beeral"
        }
    ],
    positions_by_session: {
        "1": [10, 11, 14, 15, 16],
        "2": [12, 13]
    },
    positions: [
        {
            id: 10,
            position_code: "MAT135H1F",
            position_title: "Calculus I",
            hours_per_assignment: 70,
            start_date: "2019-09-08T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            contract_template_id: 1,
            duties: "Tutorials",
            qualifications: "Teaching skill",
            ad_hours_per_assignment: 70,
            ad_num_assignments: 15,
            ad_open_date: "2019-08-01T00:00:00.000Z",
            ad_close_date: "2019-08-15T00:00:00.000Z",
            desired_num_assignments: 15,
            current_enrollment: 1200,
            current_waitlisted: 200,
            instructor_ids: [1000, 1001],
            instructor_preferences: [
                {
                    preference_level: 2,
                    applicant_id: 2000,
                    instructor_id: 1000
                },
                {
                    preference_level: 1,
                    applicant_id: 2002,
                    instructor_id: 1000
                },
                {
                    preference_level: -1,
                    applicant_id: 2005,
                    instructor_id: 1001
                },
                {
                    preference_level: 1,
                    applicant_id: 2002,
                    instructor_id: 1001
                },
                {
                    preference_level: 1,
                    applicant_id: 2006,
                    instructor_id: 1001
                }
            ]
        },
        {
            id: 11,
            position_code: "MAT136H1F",
            position_title: "Calculus II",
            hours_per_assignment: 70,
            start_date: "2019-09-08T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            contract_template_id: 2,
            instructor_ids: []
        },
        {
            id: 12,
            position_code: "CSC135H1F",
            position_title: "Computer Fun",
            hours_per_assignment: 70,
            start_date: "2019-09-08T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            duties: "Tutorials",
            contract_template_id: 3,
            instructor_ids: [1000],
            instructor_preferences: [
                {
                    preference_level: -1,
                    applicant_id: 2005,
                    instructor_id: 1000
                },
                {
                    preference_level: 2,
                    applicant_id: 2001,
                    instructor_id: 1000
                },
                {
                    preference_level: 1,
                    applicant_id: 2006,
                    instructor_id: 1000
                }
            ]
        },
        {
            id: 13,
            position_code: "MAT235H1F",
            position_title: "Calculus III",
            hours_per_assignment: 70,
            start_date: "2019-09-08T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            contract_template_id: 3,
            instructor_ids: [1002],
            instructor_preferences: [
                {
                    preference_level: 2,
                    applicant_id: 2000,
                    instructor_id: 1002
                },
                {
                    preference_level: 1,
                    applicant_id: 2002,
                    instructor_id: 1002
                }
            ]
        },
        {
            instructor_ids: [1002],
            position_code: "CSC100H1S",
            position_title: "Computers for Humans",
            hours_per_assignment: 100,
            duties:
                "Some combination of marking, invigilating, tutorials, office hours, and the help centre.",
            contract_template_id: 1,
            start_date: "2021-01-01T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 14
        },
        {
            instructor_ids: [1000],
            position_code: "MAT137Y1Y",
            position_title: "Calculus!",
            hours_per_assignment: 250,
            duties:
                "Some combination of marking, invigilating, tutorials, office hours, and the help centre.",
            contract_template_id: 1,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            qualifications: "Skilled Proofs Reader",
            current_enrollment: 1500,
            current_waitlisted: 78,
            desired_num_assignments: 22,
            id: 15
        },
        {
            instructor_ids: [1001],
            position_code: "MAT135H1F Head TA",
            position_title: "Calculus I",
            hours_per_assignment: 225,
            duties: "Top-notch Head TA Stuff",
            contract_template_id: 1,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            desired_num_assignments: 3,
            id: 16
        }
    ],
    applicants: [
        {
            id: 2000,
            utorid: "weasleyr",
            student_number: "89013443",
            first_name: "Ron",
            last_name: "Weasley",
            email: "ron@potter.com",
            phone: "543-223-9993"
        },
        {
            id: 2001,
            utorid: "potterh",
            student_number: "999666999",
            first_name: "Harry",
            last_name: "Potter",
            email: "harry@potter.com"
        },
        {
            id: 2002,
            utorid: "smithb",
            email: "smithb@mail.utoronto.ca",
            first_name: "Bethany",
            last_name: "Smith",
            student_number: "131382748"
        },
        {
            id: 2003,
            utorid: "wilsonh",
            email: "wilsonh@mail.utoronto.ca",
            first_name: "Hanna",
            last_name: "Wilson",
            student_number: "600366904"
        },
        {
            id: 2004,
            utorid: "molinat",
            email: "molinat@mail.utoronto.ca",
            first_name: "Troy",
            last_name: "Molina",
            student_number: "328333023"
        },
        {
            id: 2005,
            utorid: "howeyb",
            email: "howeyb@mail.utoronto.ca",
            first_name: "Brett",
            last_name: "Howey",
            student_number: "329613524"
        },
        {
            id: 2006,
            utorid: "brownd",
            email: "brownd@mail.utoronto.ca",
            first_name: "David",
            last_name: "Brown",
            student_number: "29151485"
        }
    ],
    assignments_by_session: {
        "1": [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
        "2": []
    },
    assignments: [
        {
            id: 100,
            position_id: 10,
            applicant_id: 2001,
            hours: 90
        },
        {
            id: 101,
            position_id: 10,
            applicant_id: 2005,
            hours: 95
        },
        {
            note: "",
            position_id: 16,
            applicant_id: 2000,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            id: 102
        },
        {
            note: "",
            position_id: 16,
            applicant_id: 2002,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            id: 103
        },
        {
            note: "",
            position_id: 15,
            applicant_id: 2001,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 104
        },
        {
            note: "",
            position_id: 15,
            applicant_id: 2002,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 105
        },
        {
            note: "",
            position_id: 15,
            applicant_id: 2005,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 106
        },
        {
            note: "",
            position_id: 15,
            applicant_id: 2000,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 107
        },
        {
            note: "",
            position_id: 15,
            applicant_id: 2006,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 108
        },
        {
            note: "",
            position_id: 14,
            applicant_id: 2002,
            start_date: "2021-01-01T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z",
            id: 109
        }
    ],
    wage_chunks: [
        {
            id: 3000,
            assignment_id: 100,
            hours: 20,
            start_date: "2019-09-08T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z",
            rate: 10.01
        },
        {
            id: 3001,
            assignment_id: 100,
            hours: 35,
            start_date: "2020-01-01T00:00:00.000Z",
            end_date: "2020-04-20T00:00:00.000Z",
            rate: 12.02
        },
        {
            id: 3002,
            assignment_id: 101,
            hours: 95,
            start_date: "2019-09-01T00:00:00.000Z",
            end_date: "2020-04-20T00:00:00.000Z",
            rate: null
        },
        {
            id: 3003,
            assignment_id: 102,
            hours: 225,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z"
        },
        {
            id: 3004,
            assignment_id: 103,
            hours: 225,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T00:00:00.000Z"
        },
        {
            id: 3005,
            assignment_id: 104,
            hours: 125,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T05:00:00.000Z"
        },
        {
            id: 3006,
            assignment_id: 104,
            hours: 125,
            start_date: "2020-01-01T05:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z"
        },
        {
            id: 3007,
            assignment_id: 105,
            hours: 125,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T05:00:00.000Z"
        },
        {
            id: 3008,
            assignment_id: 105,
            hours: 125,
            start_date: "2020-01-01T05:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z"
        },
        {
            id: 3009,
            assignment_id: 106,
            hours: 125,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T05:00:00.000Z"
        },
        {
            id: 3010,
            assignment_id: 106,
            hours: 125,
            start_date: "2020-01-01T05:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z"
        },
        {
            id: 3011,
            assignment_id: 107,
            hours: 100,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T05:00:00.000Z"
        },
        {
            id: 3012,
            assignment_id: 107,
            hours: 100,
            start_date: "2020-01-01T05:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z"
        },
        {
            id: 3013,
            assignment_id: 108,
            hours: 100,
            start_date: "2019-09-02T00:00:00.000Z",
            end_date: "2019-12-31T05:00:00.000Z"
        },
        {
            id: 3014,
            assignment_id: 108,
            hours: 100,
            start_date: "2020-01-01T05:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z"
        },
        {
            id: 3015,
            assignment_id: 109,
            hours: 100,
            start_date: "2021-01-01T00:00:00.000Z",
            end_date: "2020-04-03T00:00:00.000Z"
        }
    ],
    offers: [
        {
            id: 10000,
            assignment_id: 100,
            status: "withdrawn"
        },
        {
            id: 10001,
            assignment_id: 100,
            status: "pending"
        },
        {
            id: 10002,
            assignment_id: 101,
            status: "accepted"
        },
        {
            id: 10003,
            assignment_id: 102,
            status: "withdrawn"
        }
    ],
    applications: [
        {
            comments: "",
            program: "Phd",
            department: "Computer Science",
            previous_uoft_ta_experience: "Last year I TAed a bunch",
            yip: 2,
            annotation: "",
            session_id: 1,
            applicant_id: 2000,
            position_preferences: [
                {
                    preference_level: 2,
                    position_id: 10
                },
                {
                    preference_level: 3,
                    position_id: 15
                }
            ]
        },
        {
            comments: "",
            program: "UG",
            department: "Computer Science",
            previous_uoft_ta_experience: "",
            yip: 2,
            annotation: "",
            session_id: 1,
            applicant_id: 2001,
            position_preferences: [
                {
                    preference_level: 0,
                    position_id: 12
                },
                {
                    preference_level: 3,
                    position_id: 13
                }
            ]
        },
        {
            comments: "",
            program: "Phd",
            department: "Math",
            previous_uoft_ta_experience: "",
            yip: 2,
            annotation: "",
            session_id: 1,
            applicant_id: 2002,
            position_preferences: [
                {
                    preference_level: 3,
                    position_id: 10
                },
                {
                    preference_level: 3,
                    position_id: 13
                },
                {
                    preference_level: 2,
                    position_id: 12
                },
                {
                    preference_level: 0,
                    position_id: 11
                }
            ]
        },
        {
            comments: "",
            program: "Phd",
            department: "Computer Science",
            previous_uoft_ta_experience: "",
            yip: 2,
            annotation: "",
            session_id: 1,
            applicant_id: 2005,
            position_preferences: [
                {
                    preference_level: 2,
                    position_id: 10
                },
                {
                    preference_level: 3,
                    position_id: 13
                },
                {
                    preference_level: 0,
                    position_id: 12
                },
                {
                    preference_level: 1,
                    position_id: 11
                }
            ]
        },
        {
            comments: "",
            program: "UG",
            department: "Computer Science",
            previous_uoft_ta_experience: "",
            yip: 2,
            annotation: "",
            session_id: 1,
            applicant_id: 2006,
            position_preferences: [
                {
                    preference_level: 3,
                    position_id: 10
                },
                {
                    preference_level: 0,
                    position_id: 13
                },
                {
                    preference_level: 2,
                    position_id: 12
                }
            ]
        },
        {
            comments: "",
            program: "UG",
            department: "Math",
            previous_uoft_ta_experience: "",
            yip: 3,
            annotation: "",
            session_id: 2,
            applicant_id: 2002,
            position_preferences: [
                {
                    preference_level: 3,
                    position_id: 10
                },
                {
                    preference_level: 3,
                    position_id: 13
                },
                {
                    preference_level: 2,
                    position_id: 12
                },
                {
                    preference_level: 0,
                    position_id: 11
                }
            ]
        },
        {
            comments: "",
            program: "MSc",
            department: "Computer Science",
            previous_uoft_ta_experience: "",
            yip: 2,
            annotation: "",
            session_id: 2,
            applicant_id: 2003,
            position_preferences: [
                {
                    preference_level: 3,
                    position_id: 10
                },
                {
                    preference_level: 3,
                    position_id: 13
                },
                {
                    preference_level: 2,
                    position_id: 12
                },
                {
                    preference_level: 0,
                    position_id: 11
                }
            ]
        },
        {
            comments: "",
            program: "UG",
            department: "Computer Science",
            previous_uoft_ta_experience: "",
            yip: 4,
            annotation: "",
            session_id: 2,
            applicant_id: 2004,
            position_preferences: [
                {
                    preference_level: 1,
                    position_id: 10
                },
                {
                    preference_level: 3,
                    position_id: 13
                }
            ]
        }
    ],
    users: [
        {
            email: "hery.smith@utoronto.ca",
            utorid: "smithh",
            roles: ["admin", "instructor"]
        },
        {
            email: "emily.garcia@utoronto.ca",
            utorid: "garciae",
            roles: ["instructor"]
        },
        {
            email: "megan.miller@utoronto.ca",
            utorid: "millerm",
            roles: ["instructor"]
        },
        {
            email: "lizzy.beera@utoronto.ca",
            utorid: "beeral",
            roles: ["instructor"]
        }
    ],
    active_user: "smithh"
};
