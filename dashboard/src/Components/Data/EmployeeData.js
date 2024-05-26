import { employeeImages, greenTriangle } from "../Table/Data";

export const employees = [
  {
    Name: "Rakesh Sharma",
    Image: employeeImages["Rakesh Sharma"],
    Designation: "UI/UX Designer",
    "No. of hours worked": "7(42)",
    Changes: (
      <>
        {greenTriangle}
        1.5hrs
      </>
    ),
  },
  {
    Name: "Ankita Thakur",
    Image: employeeImages["Ankita Thakur"],
    Designation: "HR Recruiter",
    "No. of hours worked": "7(41)",
    Changes: "🔻1.5hrs",
  },
  {
    Name: "Sarah Yadav",
    Image: employeeImages["Sarah Yadav"],
    Designation: "Product Manager",
    "No. of hours worked": "7(40)",
    Changes: (
      <>
        {greenTriangle}
        1.5hrs
      </>
    ),
  },
  {
    Name: "Harsha Shivhare",
    Image: employeeImages["Harsha Shivhare"],
    Designation: "Designer",
    "No. of hours worked": "7(37)",
    Changes: (
      <>
        {greenTriangle}
        1.5hrs
      </>
    ),
  },
  {
    Name: "Vanhi Rai",
    Image: employeeImages["Vanhi Rai"],
    Designation: "Video Editor",
    "No. of hours worked": "7(37)",
    Changes: "🔻1.5hrs",
  },
  {
    Name: "Bhanu Sharma",
    Image: employeeImages["Bhanu Sharma"],
    Designation: "Business Analyst",
    "No. of hours worked": "7(32)",
    Changes: "🔻1.5hrs",
  },
  {
    Name: "Sunil Yadav",
    Image: employeeImages["default"],
    Designation: "Developer",
    "No. of hours worked": "7(24)",
    Changes: (
      <>
        {greenTriangle}
        1.5hrs
      </>
    ),
  },
  {
    Name: "Akash Roy",
    Image: employeeImages["default"],
    Designation: "Business Analyst",
    "No. of hours worked": "7(21)",
    Changes: "🔻1.5hrs",
  },
  {
    Name: "Rohit Soni",
    Image: employeeImages["default"],
    Designation: "Developer",
    "No. of hours worked": "7(20)",
    Changes: "🔻1.5hrs",
  },
  {
    Name: "Suraj Chauhan",
    Image: employeeImages["default"],
    Designation: "Developer",
    "No. of hours worked": "7(18)",
    Changes: "🔻1.5hrs",
  },
];
