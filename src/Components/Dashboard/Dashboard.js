import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div>
                <h1 className='text-3xl font-mono mb-5'>LineChart</h1>
                <LineChart width={500} height={350} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip />
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <h1 className='text-3xl font-mono mb-5'>BarChart</h1>
                <BarChart width={500} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>


    );
};


export default Dashboard;