import JobGrid from "./components/JobGrid"
import Filters from "./components/Filters";
import { useState } from "react";
function App() {
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [experience, setExperience] = useState(0);
  const [role, setRole] = useState("");
  const [minBasePay, setMinBasePay] = useState(0);
  return (
    <div>
      <Filters setLocation={setLocation} setCompanyName={setCompanyName} setExperience={setExperience} setRole={setRole} setMinBasePay={setMinBasePay} />
      <div className="App" style={{ marginRight: 15, marginLeft: 15, marginTop: 30 }}>
        <JobGrid location={location} companyName={companyName} experience={experience} role={role} minBasePay={minBasePay} />
      </div>
    </div>
  );
}

export default App;
