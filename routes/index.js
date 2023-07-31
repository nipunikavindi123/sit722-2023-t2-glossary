var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // Sample data for the table
  var tableData = [
    {
      id: 1,
      term: "DevOps",
      description:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to enhance collaboration and communication between development and operations teams. The goal is to automate and streamline the software delivery process, allowing for faster and more reliable deployment of applications.",
      references: "Sample References 1",
    },
    {
      id: 2,
      term: "Continuous Integration (CI)",
      description:
        "CI is a development practice in which code changes are automatically built, tested, and integrated into the main codebase frequently. This ensures that each code change is validated early in the development process, reducing integration issues and providing faster feedback to developers.",
      references: "Sample References 2",
    },
    {
      id: 3,
      term: "Continuous Deployment (CD)",
      description:
        "CD is an extension of continuous integration, where code changes that pass automated testing are automatically deployed to production environments. This enables rapid and frequent release of new features and improvements.",
      references: "",
    },
    {
      id: 4,
      term: "Infrastructure as Code (IaC)",
      description:
        "IaC is a practice of managing and provisioning infrastructure resources using code and configuration files. It allows infrastructure setups to be versioned, automated, and treated as part of the application code, promoting consistency and repeatability.",
      references: "",
    },
    {
      id: 5,
      term: "Microservices",
      description:
        " Microservices is an architectural style in software development where applications are broken down into small, independent services that can be developed, deployed, and scaled independently. This approach enhances flexibility and maintainability.",
      references: "",
    },
    {
      id: 6,
      term: "Containerization",
      description:
        "Containerization involves packaging an application and its dependencies into a container, which provides a standardized, isolated environment for running the application. Docker is a popular tool used for containerization.",
      references: "",
    },
    {
      id: 7,
      term: "Continuous Monitoring",
      description:
        "Continuous monitoring is the process of continuously observing and measuring various aspects of applications and infrastructure to identify issues, detect anomalies, and ensure optimal performance and availability.",
      references: "",
    },
    {
      id: 8,
      term: "Configuration Management",
      description:
        "Configuration management is the practice of automating and managing the configuration of software and infrastructure. It ensures consistency and tracks changes made to the systems over time.",
      references: "",
    },
    {
      id: 9,
      term: "DevSecOps",
      description:
        "DevSecOps extends DevOps practices to include security aspects throughout the software development and deployment lifecycle. It emphasizes integrating security practices and tools early in the development process.",
      references: "",
    },
    {
      id: 10,
      term: "test",
      description:
        "test2",
      references: "",}
  ];

  res.render("index", {
    title: "SIT722 DevOps Glossary",
    shortdescription:
      "Welcome to my website showing a collection of DevOps terms and their brief descriptions.",
    tableData: tableData,
  });
});

module.exports = router;
