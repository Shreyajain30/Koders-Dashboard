const cols = ["Rank", "Name", "Designation", "No. of hours worked", "Changes"];
const greenTriangle = (
  <img
    className="triangle"
    src={process.env.PUBLIC_URL + "/green-triangle.png"}
    alt="green-triangle"
  />
);
const employeeImages = {
  "Rakesh Sharma": (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/rakesh_sharma.png"}
      alt="employee"
    />
  ),
  "Ankita Thakur": (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/ankita_thakur.jpg"}
      alt="employee"
    />
  ),
  "Sarah Yadav": (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/sarah_yadav.jpeg"}
      alt="employee"
    />
  ),
  "Harsha Shivhare": (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/harsha_shivhare.jpeg"}
      alt="employee"
    />
  ),
  "Vanhi Rai": (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/vanhi_rai.jpeg"}
      alt="employee"
    />
  ),
  "Bhanu Sharma": (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/bhanu_sharma.jpg"}
      alt="employee"
    />
  ),
  default: (
    <img
      className="employee"
      src={process.env.PUBLIC_URL + "/default.jpeg"}
      alt="employee"
    />
  ),
};

export { cols, greenTriangle, employeeImages };
