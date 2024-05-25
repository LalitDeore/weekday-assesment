import React, { useEffect, useState } from 'react';
import JobCard from "./JobCard";
import { Grid } from "@mui/material";

//added infinite scroller to the website
const JobGrid = ({ location, companyName, experience, role, minBasePay }) => {
    const [allJobData, setAllJobData] = useState({ jdList: [] });
    const [displayedJobData, setDisplayedJobData] = useState(null);
    const [page, setPage] = useState(1);
    const limit = 15; // Define the limit

    const fetchJobData = async () => {
        try {
            const response = await fetchApiFromDatabase();
            setAllJobData(prevData => ({
                jdList: [...prevData.jdList, ...response.jdList]
            }));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchApiFromDatabase = async () => {
        const body = JSON.stringify({
            "limit": limit,
            "offset": (page - 1) * limit
        });
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data);
        return data; // Return data directly
    };

    useEffect(() => {
        fetchJobData();
    }, [page]); // Include page in the dependency array

    useEffect(() => {
        const lowercaseCompanyName = companyName ? companyName.toLowerCase() : '';
        const filteredData = allJobData.jdList.filter(job =>
            job.location.includes(location) &&
            job.companyName.toLowerCase().includes(lowercaseCompanyName) &&
            (!experience || job.minExp === parseInt(experience)) &&
            (!role || job.jobRole.toLowerCase().includes(role.toLowerCase())) &&
            (!minBasePay || job.minJdSalary >= parseInt(minBasePay))
        );

        setDisplayedJobData({ jdList: filteredData });
    }, [location, companyName, experience, role, minBasePay, allJobData]);

    useEffect(() => {
        const handleInfiniteScroll = () => {
            const innerHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            try {
                if (innerHeight + scrollTop + 1 >= scrollHeight) {
                    setPage(prevPage => prevPage + 1);
                }
            } catch (error) {
                console.log(error);
            }
        };

        window.addEventListener("scroll", handleInfiniteScroll);
        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll);
        };
    }, [page]);

    if (!displayedJobData) {
        return <div>Loading...</div>;
    }

    if (!displayedJobData.jdList || displayedJobData.jdList.length === 0) {
        return <div>No job data available</div>;
    }

    return (
        <Grid container spacing={5}>
            {displayedJobData.jdList.map((job, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <JobCard job={job} />
                </Grid>
            ))}
        </Grid>
    );
}

export default JobGrid;
