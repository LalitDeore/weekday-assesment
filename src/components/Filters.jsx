import { Grid, TextField } from "@mui/material";
import "../App.css"
const Filters = ({ setLocation, setCompanyName, setExperience, setRole, setMinBasePay }) => {
    return (
        <Grid container spacing={2} style={{ marginTop: 20, marginLeft: 10 }}>
            <TextField
                placeholder="Experience"
                variant="outlined"
                sx={{ width: 200, marginRight: 1, '& .MuiInputBase-root': { height: 36 } }}
                onChange={(e) => setExperience(parseInt(e.target.value))}
                type="number"
            />

            <TextField
                placeholder="Company Name"
                variant="outlined"
                sx={{ width: 200, marginRight: 1, '& .MuiInputBase-root': { height: 36 } }}
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <TextField
                placeholder="Location"
                variant="outlined"
                sx={{ width: 200, marginRight: 1, '& .MuiInputBase-root': { height: 36 } }}
                onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
                placeholder="Role"
                variant="outlined"
                sx={{ width: 200, marginRight: 1, '& .MuiInputBase-root': { height: 36 } }}
                onChange={(e) => setRole(e.target.value)}
            />
            <TextField
                placeholder="Min Base pay"
                variant="outlined"
                sx={{ width: 200, marginRight: 1, '& .MuiInputBase-root': { height: 36 } }}
                type="number"
                onChange={(e) => setMinBasePay(e.target.value)}
            />
        </Grid>
    );
}

export default Filters;
