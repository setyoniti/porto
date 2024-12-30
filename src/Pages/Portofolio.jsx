import React, { useState, useEffect, useCallback } from "react";
import { db } from "../firebase"; // Adjust the import according to your project structure
import { collection, getDocs } from "firebase/firestore";

const Portofolio = () => {
  // Remove state for projects and certificates
  // const [projects, setProjects] = useState([]);
  // const [certificates, setCertificates] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      // Remove fetching projects and certificates
      // const projectSnapshot = await getDocs(collection(db, "projects"));
      // const certificateSnapshot = await getDocs(collection(db, "certificates"));

      // Remove mapping project data
      // const projectData = projectSnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      //   TechStack: doc.data().TechStack || [],
      // }));

      // Remove mapping certificate data
      // const certificateData = certificateSnapshot.docs.map((doc) => doc.data());

      // Remove setting state for projects and certificates
      // setProjects(projectData);
      // setCertificates(certificateData);

      // Remove storing in localStorage
      // localStorage.setItem("projects", JSON.stringify(projectData));
      // localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    // Handle tab change if necessary
  };

  return (
    <div>
      {/* Remove rendering projects */}
      {/* {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul>
            {project.TechStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      ))} */}

      {/* Remove rendering certificates */}
      {/* {certificates.map((certificate, index) => (
        <div key={index}>
          <h3>{certificate.name}</h3>
          <p>{certificate.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Portofolio;