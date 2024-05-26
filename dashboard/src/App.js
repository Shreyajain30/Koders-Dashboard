import "./App.css";

import { cols, employeeImages } from "./Components/Table/Data.js";
import Header from "./Components/Header/Header.js";
import Table from "./Components/Table/Table.js";
import Card from "./Components/Card/Card.js";
import { employees } from "./Components/Data/EmployeeData.js";

export default function App() {
  const getTotalHoursWorked = (hoursString) => {
    //using regex
    const match = hoursString.match(/\((\d+)\)/);
    // match[1] contains the string of digits found within the parentheses
    //and 10 is radix, indicating that the string should be interpreted as a decimal number.
    return match ? parseInt(match[1], 10) : 0;
  };
  // Sort the employees based on the total hours worked
  const sortedData = [...employees].sort(
    (a, b) =>
      getTotalHoursWorked(b["No. of hours worked"]) -
      getTotalHoursWorked(a["No. of hours worked"])
  );
  //add rank to each Item
  const rankedData = sortedData.map((item, index) => {
    let medal = " ";
    switch (index + 1) {
      case 1:
        medal = "🥇";
        break;
      case 2:
        medal = "🥈";
        break;
      case 3:
        medal = "🥉";
        break;
      default:
        medal = "  ";
    }
    return { Rank: `${medal}\t\t\t${index + 1}`, ...item };
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Table columns={cols} data={rankedData} />
        <Card
          name={employees[0].Name}
          image={employeeImages[employees[0].Name]}
          designation={employees[0].Designation}
        />
      </div>
    </div>
  );
}
