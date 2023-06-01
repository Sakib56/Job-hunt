import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Assignment_result: []
        };
    }

    componentDidMount() {
        // Simulate data fetch from server
        const Assignment_result = [
            { Assignment_Name: 'A-1', Assignment_marks: 57 },
            { Assignment_Name: 'A-2', Assignment_marks: 60 },
            { Assignment_Name: 'A-3', Assignment_marks: 60 },
            { Assignment_Name: 'A-4', Assignment_marks: 60 },
            { Assignment_Name: 'A-5', Assignment_marks: 60 },
            { Assignment_Name: 'A-6', Assignment_marks: 60 },
            { Assignment_Name: 'A-7', Assignment_marks: 60 },
            { Assignment_Name: 'A-8', Assignment_marks: 60 },

        ];

        this.setState({ Assignment_result });
    }

    render() {
        const { Assignment_result } = this.state;
        return (
            <div className='max-w-7xl mx-auto my-16'>
                <h2 className='text-center text-2xl mt-5 mb-10 font-bold'>Analysis of Assignment Name and Marks</h2>
                <ScatterChart
                    className='mx-auto'
                    width={1000}
                    height={400}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Assignment_Name" name="Assignment_Name" />
                    <YAxis dataKey="Assignment_marks" name="Assignment_marks" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Student Scores" data={Assignment_result} fill="#8884d8" />
                </ScatterChart>
            </div>
        );
    }
}

export default Statistics;
