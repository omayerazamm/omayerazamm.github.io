// =========================================================
// PORTFOLIO CONTENT
// This is the ONLY file you need to touch to add or edit
// skills, projects, or experience. No HTML editing required.
//
// Just add a new object to the relevant array below, following
// the same shape as the ones already there. Save the file,
// commit it — the site updates automatically.
// =========================================================

const PORTFOLIO_DATA = {

  // -----------------------------------------------------
  // SKILLS — grouped under category headings.
  // level is 0–100 and controls the bar fill.
  // -----------------------------------------------------
  skills: [
    {
      group: "Modeling & Simulation",
      items: [
        { name: "FLAC3D", level: 65 },
        { name: "AutoCAD", level: 55 },
        { name: "Numerical Methods", level: 70 }
      ]
    },
    {
      group: "Programming & ML",
      items: [
        { name: "Python", level: 60 },
        { name: "Random Forest / SVR / ANN", level: 50 },
        { name: "Data Analysis", level: 55 }
      ]
    },
    {
      group: "Core Engineering",
      items: [
        { name: "Mechanics of Materials", level: 70 },
        { name: "Fluid Mechanics", level: 65 },
        { name: "Geotechnical Engineering", level: 60 }
      ]
    },
    {
      group: "Other",
      items: [
        { name: "Technical Writing", level: 75 },
        { name: "Research Presentation", level: 70 },
        { name: "Project Planning", level: 65 }
      ]
    }
    // ADD A NEW GROUP:
    // { group: "Group Name", items: [ { name: "Skill", level: 60 } ] }
  ],

  // -----------------------------------------------------
  // PROJECTS
  // image is optional — leave as "" to skip, or point to a
  // file you uploaded into the /assets/projects/ folder,
  // e.g. "assets/projects/soil-ml.jpg"
  // link is optional — leave as "" to hide the link.
  // -----------------------------------------------------
  projects: [
    {
      code: "PRJ.01",
      status: "Ongoing",
      title: "ML-Based Soil Parameter Prediction",
      description: "National dataset initiative proposal comparing Random Forest, XGBoost, and Gaussian Process Regression for predicting geotechnical soil parameters, benchmarked against international database models.",
      tags: ["Machine Learning", "Geotechnical", "Dataset Design"],
      image: "",
      link: ""
    },
    {
      code: "PRJ.02",
      status: "Ongoing",
      title: "Centralized Geotechnical–Environmental Data Framework",
      description: "A cost-phased roadmap for a national geotechnical database, presented with the Environment and Disaster Management Club, University of Asia Pacific.",
      tags: ["Data Systems", "Environmental", "Policy Roadmap"],
      image: "",
      link: ""
    },
    {
      code: "PRJ.03",
      status: "In Progress",
      title: "FLAC3D Geotechnical Modeling Research",
      description: "Numerical modeling research under faculty collaboration, combining FLAC3D simulation output with machine learning methods.",
      tags: ["FLAC3D", "Research", "Python"],
      image: "",
      link: ""
    }
    // ADD A NEW PROJECT:
    // { code: "PRJ.04", status: "Ongoing", title: "...", description: "...",
    //   tags: ["Tag1","Tag2"], image: "", link: "" }
  ],

  // -----------------------------------------------------
  // EXPERIENCE — listed newest first.
  // -----------------------------------------------------
  experience: [
    {
      date: "2025 — Present",
      title: "Undergraduate Researcher — Geotechnical Modeling",
      org: "University of Asia Pacific, with Mashrur Hasan",
      description: "Researching FLAC3D-based geotechnical modeling combined with machine learning methods, working toward a defined 6-month research deliverable and a funded graduate scholarship application."
    },
    {
      date: "2025",
      title: "Peer Instructor — ML Applications in Geotechnical Engineering",
      org: "University of Asia Pacific",
      description: "Designed and delivered a 50-minute lesson covering Random Forest, ANN, and SVR methods with real case studies and an interactive teaching aid."
    },
    {
      date: "2023 — Present",
      title: "B.Sc. in Civil Engineering",
      org: "University of Asia Pacific",
      description: "Coursework includes Mechanics of Materials, Fluid Mechanics, and Numerical Methods, alongside independent research work."
    }
    // ADD A NEW ENTRY:
    // { date: "2026", title: "...", org: "...", description: "..." }
  ]
};
