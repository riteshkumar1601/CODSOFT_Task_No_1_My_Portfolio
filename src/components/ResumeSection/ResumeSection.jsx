import React from "react";
import "./ResumeSection.css";

const ResumeSection = () => {
  const onButtonClick = () => {
    const pdfUrl = "RiteshResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ritesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-container">
      <h5>Resume</h5>

      <div className="resume-content">
        <h6>This is My Resume</h6>
        <p>Click here to download my resume:</p>
        <button onClick={onButtonClick}>Download PDF</button>
      </div>
    </section>
  );
};

export default ResumeSection;
