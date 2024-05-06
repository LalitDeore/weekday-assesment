import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
const JobCard = ({ job }) => {

    const boxStyling = {
        minHeight: 550,
        minWidth: 30,
        border: '1px solid #ededed',
        padding: 5,
        borderRadius: 20,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        position: 'relative',
    }

    const viewJobButtonStyle = {
        zIndex: 1,
        color: "#4943da",
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        textDecoration: "none",
        padding: 0
    };

    return (
        <Card elevation={3} style={boxStyling}>
            <CardContent>
                <Typography variant="body2" component="div" style={{ padding: "4px 6px", boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px", borderRadius: 10, border: "1px solid rgb(230, 230, 230)", width: 100, height: 15, fontSize: 9, fontFamily: "Roboto,Helvetica,Arial,sans-serif" }}>
                    ⏳ Posted {Math.floor(Math.random() * 10) + 1} days ago
                </Typography>

                <Typography variant='body2' component="div" style={{ display: 'flex', flexDirection: 'column', marginTop: 25 }}>
                    <Typography variant='body2' component="div" style={{ display: 'flex', flexDirection: 'row', }}>
                        <img src={job.logoUrl} style={{ width: "2.5rem", height: "2.5rem" }} alt='company logo'></img>
                        <Typography variant='body2' component="div" style={{ display: 'flex', flexDirection: 'column', scrollBehavior: 'smooth', scrollMarginTop: 90 }}>
                            <Typography variant='body2' style={{ marginLeft: 15, cursor: 'pointer', fontSize: 13, fontWeight: 600, letterSpacing: 1, marginBottom: 3, color: "#8b8b8b" }}>{job.companyName}</Typography>
                            <Typography variant='body2' style={{ marginLeft: 15, fontSize: 14, lineHeight: 1.5, }}>{job.jobRole}</Typography>
                            <Typography variant='body2' style={{ marginLeft: 15, fontSize: 11, fontWeight: 500, marginTop: 5 }}>{job.location}</Typography>
                        </Typography>
                    </Typography>
                    <Typography component='div' style={{ display: 'flex', flexDirection: 'column' }}>
                        {(job.minJdSalary || job.maxJdSalary) && (
                            <Typography variant='body2' style={{ display: 'flex', alignItems: 'flex-start', fontWeight: 400, fontSize: 16, margin: "10px 0 8px", fontFamily: "__LexendFont_7838d2, __LexendFont_Fallback_7838d2", color: "rgb(77, 89, 106)", lineHeight: 1.43 }}>
                                Estimated Salary: {job.minJdSalary && job.maxJdSalary ? `${job.salaryCurrencyCode === "USD" ? '$' : '₹'}${job.minJdSalary + "K"} - ${job.salaryCurrencyCode === "USD" ? '$' : '₹'}${job.maxJdSalary + "K"}` : job.minJdSalary ? `${job.salaryCurrencyCode === "USD" ? '$' : '₹'}${job.minJdSalary} LPA` : `${job.salaryCurrencyCode === "USD" ? '$' : '₹'}${job.maxJdSalary} LPA`} ✅
                            </Typography>
                        )}

                        <Typography variant='h4' style={{ display: 'flex', alignItems: 'flex-start', margin: 0, fontFamily: "__LexendFont_7838d2, __LexendFont_Fallback_7838d2", fontSize: '1rem', lineHeight: 1.5, fontWeight: "bold" }}>About Company:</Typography>
                        <Typography variant='h4' style={{ display: 'flex', alignItems: 'flex-start', margin: 0, fontFamily: "__LexendFont_7838d2, __LexendFont_Fallback_7838d2", fontSize: '1rem', lineHeight: 1.5, fontWeight: "bold" }}>About Us</Typography>
                        <Typography variant='body2' style={{ display: 'flex', textAlign: 'start', }}>
                            {job.jobDetailsFromCompany.substring(0, 200)}
                        </Typography>
                        <Typography variant='body2' style={{ display: 'flex', textAlign: 'start', opacity: '0.6' }}>
                            {job.jobDetailsFromCompany.substring(job.jobDetailsFromCompany.length - 150)}
                        </Typography>
                        <Typography variant='body2' style={{ display: 'flex', textAlign: 'start', opacity: '0.2' }}>
                            {job.jobDetailsFromCompany.substring(job.jobDetailsFromCompany.length - 150)}
                        </Typography>
                        <Typography variant='body2' style={{ display: 'flex', alignItems: 'flex-start', fontSize: 14, whiteSpace: "pre-wrap", display: 'flex', justifyContent: 'center', textAlign: "center" }}>
                            <Button style={viewJobButtonStyle} >View Job</Button>
                        </Typography>
                    </Typography>
                    <div style={{ height: 50, display: "flex", flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant='body2' style={{ marginTop: 10, fontSize: 13, fontWeight: 600, letterSpacing: 1, marginBottom: 3, color: "#8b8b8b" }}>{job && job.minExp && "Minimum Experience"}</Typography>
                        <Typography variant='body2' style={{ fontSize: 14, lineHeight: 1.5 }}>{job && job.minExp && job.minExp + " " + "years"}</Typography>
                    </div>
                    <a href={job.jdLink} target="_blank" rel="noopener noreferrer">
                        <Button style={{ backgroundColor: "rgb(85, 239, 196)", width: "100%", marginTop: 15, color: "rgb(0, 0, 0)", textTransform: 'none', padding: '8px 18px' }}>⚡ Easy Apply</Button>
                    </a>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default JobCard;
