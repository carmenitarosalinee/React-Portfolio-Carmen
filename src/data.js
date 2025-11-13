// ===============================
// HERO SECTION
// ===============================
import HeroImage from "/assets/2.JPG";

const Image = {
  HeroImage,
};

export default Image;

// ===============================
// PROJECT SECTION
// ===============================
import LensaKulitku from "/assets/proyek/LensaKulitku.png";
import ProductQualityCheck from "/assets/proyek/ProductQualityCheck.png";
import SpamClassifierAPI from "/assets/proyek/SpamClassifierAPI.png";
import SpamClassifierClient from "/assets/proyek/SpamClassifierClient.png";
import SupplierPerformanceRiskScoringAnalysis from "/assets/proyek/SupplierPerformance&RiskScoringAnalysis.png";
import CreditDefaultPrediction from "/assets/proyek/CreditDefaultPrediction.png";
import HRAnalyticsDashboard from "/assets/proyek/HRAnalyticsDashboard.png";

export const listProyek = [
  {
    id: 1,
    gambar: LensaKulitku,
    nama: "LensaKulitku: Skin Disease Types and Severity Detection",
    desk: "LensaKulitku is an innovative application designed to tackle the pressing issue of delayed skin disease detection and limited access to dermatology services.",
    tools: [
      "TensorFlow",
      "Keras",
      "TFLite",
      "OpenCV",
      "Android Studio",
      "Retrofit",
      "Room",
      "CameraX",
      "Lottie",
      "Google Cloud Run",
      "Cloud SQL",
      "Postman",
      "Figma",
    ],
    highlight1: "Bangkit 2024",
    highlight2: "Cross-functional Team Project",
    dad: "200",
    github:
      "https://github.com/Ardani-Bangkit/Bangkit-Capstone-Team-C242-PS557",
  },
  {
    id: 2,
    gambar: ProductQualityCheck,
    nama: "Product Quality Check-Anomaly Detection API",
    desk: "A lightweight FastAPI application powered by a Convolutional Autoencoder to detect defective products from images. Packaged with Docker for easy deployment (e.g., Railway, Docker Hub, or other cloud services).",
    tools: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "Scikit-learn",
      "Numpy",
      "Gunicorn",
      "Pillow",
      "Docker",
    ],
    highlight1: "Learning Project",
    highlight3: "End-to-End Machine Learning Engineer",
    dad: "400",
    github:
      "https://github.com/carmenitarosalinee/Product-Quality-Check-Using-AI",
  },
  {
    id: 3,
    gambar: SpamClassifierAPI,
    nama: "Spam Classifier API",
    desk: "A simple Flask-based REST API that classifies text messages as spam or ham (not spam). The model is built with Scikit-learn, serialized with joblib, and deployed as a web service using Gunicorn and Docker.",
    tools: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "Joblib",
      "Gunicorn",
      "Docker",
      "Railway",
    ],
    highlight1: "Learning Project",
    highlight3: "End-to-End Machine Learning Engineer",
    dad: "300",
    github: "https://github.com/carmenitarosalinee/Spam-Classifier-API",
  },
  {
    id: 4,
    gambar: SpamClassifierClient,
    nama: "Spam Classifier Client",
    desk: "A web-based interface built with React.js to interact with the Spam Classifier API. This client allows users to input text messages and instantly receive predictions on whether the message is spam or not. It provides a simple, responsive, and user-friendly experience for testing the deployed machine learning model.",
    tools: ["React.js", "JavaScript", "HTML", "CSS"],
    highlight1: "Learning Project",
    highlight3: "Front-end Dev",
    dad: "500",
    github: "https://github.com/carmenitarosalinee/Spam-Classifier-Client",
  },
  {
    id: 5,
    gambar: SupplierPerformanceRiskScoringAnalysis,
    nama: "Supplier Performance & Risk Scoring Analysis",
    desk: "This project aims to evaluate supplier performance based on key KPIs and perform supplier risk classification to support strategic decision-making in supply chain management.",
    tools: ["Python", "Pandas, Numpy", "Matplotlib, Seaborn"],
    highlight1: "Learning Project",
    highlight3: "Data Analytics",
    dad: "600",
    github:
      "https://github.com/carmenitarosalinee/Supplier-Performance-Risk-Scoring-Analysis",
  },
  {
    id: 6,
    gambar: CreditDefaultPrediction,
    nama: "Credit Default Prediction",
    desk: "A machine learning web app for detecting fraudulent credit card transactions using Streamlit. Users can upload datasets, visualize class distribution, train models (Random Forest & XGBoost), evaluate performance, and analyze feature importance with SHAP.",
    tools: [
      "Streamlit",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "Pandas, Numpy",
      "Matplotlib",
      "Seaborn",
    ],
    highlight1: "Learning Project",
    highlight3: "Machine Learning",
    dad: "700",
    github: "https://github.com/carmenitarosalinee/Credit-Default-Prediction",
  },

  {
    id: 7,
    gambar: HRAnalyticsDashboard,
    nama: "HR Analytics Dashboard",
    desk: "This Tableau dashboard analyzes employee resignation trends using HR data. It helps identify key metrics like attrition rate, department-wise resignations, age group distributions, job satisfaction, and more.",
    tools: ["Tableau", "Microsoft Excel"],
    highlight1: "Learning Project",
    highlight3: "Data Analytics",
    dad: "700",
    github:
      "https://github.com/carmenitarosalinee/HR-Analytics-Resignation-Trend-Dashboard",
  },
];

// ===============================
// SKILLS SECTION
// ===============================

// Machine Learning & AI
import Python from "/assets/tools/Python.png";
import ScikitLearn from "/assets/tools/Scikitlearn.png";
import PyTorch from "/assets/tools/pytorch.png";
import TensorFlow from "/assets/tools/tensorflow.png";
import Keras from "/assets/tools/keras.png";
import XGBoost from "/assets/tools/xgboostlightgbm.png";
import Pandas from "/assets/tools/pandasnumpy.png";
import OpenCV from "/assets/tools/opencv.png";
import NLTK from "/assets/tools/nltkspcy.png";

// Data & Visualization
import SQL from "/assets/tools/sql.png";
import PostgreSQL from "/assets/tools/PostgreSQL.png";
import MySQL from "/assets/tools/MySQL.png";
import Tableau from "/assets/tools/tableau.png";
import Matplotlib from "/assets/tools/matplotlib.png";
import Seaborn from "/assets/tools/seaborn.png";
import Plotly from "/assets/tools/plotly.png";
import Gcolab from "/assets/tools/googlecolab.png";
import Jupyter from "/assets/tools/jupyternotebook.png";

// Backend & Deployment
import FastAPI from "/assets/tools/API.png";
import Docker from "/assets/tools/docker.png";
import GCloud from "/assets/tools/cloud.png";
import Git from "/assets/tools/github.png";

// MLOps & Experimentation
import MLflow from "/assets/tools/mlflow.png";
import WandB from "/assets/tools/wNb.png";
import GithubActions from "/assets/tools/github.png";

// Tools & Dev Environment
import VSCode from "/assets/tools/vscode.png";
import Notion from "/assets/tools/notion.png";
import Discord from "/assets/tools/discord.png";

export const skillCategories = [
  {
    kategori: "Machine Learning & AI",
    items: [
      { nama: "Python", gambar: Python },
      { nama: "Scikit-learn", gambar: ScikitLearn },
      { nama: "PyTorch", gambar: PyTorch },
      { nama: "TensorFlow", gambar: TensorFlow },
      { nama: "Keras", gambar: Keras },
      { nama: "XGBoost, LightGBM", gambar: XGBoost },
      { nama: "Pandas, NumPy", gambar: Pandas },
      { nama: "OpenCV", gambar: OpenCV },
      { nama: "NLTK, spaCy", gambar: NLTK },
    ],
  },
  {
    kategori: "Data & Visualization",
    items: [
      { nama: "SQL", gambar: SQL },
      { nama: "PostgreSQL", gambar: PostgreSQL },
      { nama: "MySQL", gambar: MySQL },
      { nama: "Tableau", gambar: Tableau },
      { nama: "Matplotlib", gambar: Matplotlib },
      { nama: "Seaborn", gambar: Seaborn },
      { nama: "Plotly", gambar: Plotly },
      { nama: "Google Colab", gambar: Gcolab },
      { nama: "Jupyter Notebook", gambar: Jupyter },
    ],
  },
  {
    kategori: "Backend & Deployment",
    items: [
      { nama: "FastAPI / Flask", gambar: FastAPI },
      { nama: "Docker", gambar: Docker },
      { nama: "Google Cloud / Railway / Render", gambar: GCloud },
      { nama: "Git, GitHub", gambar: Git },
    ],
  },
  {
    kategori: "MLOps & Experimentation",
    items: [
      { nama: "MLflow", gambar: MLflow },
      { nama: "Weights & Biases (W&B)", gambar: WandB },
      { nama: "GitHub Actions (CI/CD)", gambar: GithubActions },
    ],
  },
  {
    kategori: "Tools & Dev Environment",
    items: [
      { nama: "VS Code", gambar: VSCode },
      { nama: "Notion", gambar: Notion },
      { nama: "Discord", gambar: Discord },
    ],
  },
  {
    kategori: "Soft Skills",
    items: [
      { nama: "Communication & Presentation" },
      { nama: "Critical Thinking" },
      { nama: "Leadership & Collaboration" },
      { nama: "Problem Solving" },
      { nama: "Adaptability" },
    ],
  },
];

// ===============================
// EXPERIENCE SECTION
// ===============================
export const listExperience = [
  {
    id: 1,
    title: "Self-Employed",
    position: "Data Analyst/Machine Learning/AI Engineer",
    date: "May 2025 - Now",
    organization: "Data Driven AI-Freelance Services",
    highlights: [
      "Provided AI and data-related consultation for individuals and small businesses.",
      "Helped clients understand technical concepts such as model selection, data preparation, and problem framing.",
      "Researched and explored AI/ML solutions that can be applied to real business problems.",
      "Created early-stage prototypes and proof-of-concept models for demonstration purposes.",
    ],
    instagram:
      "https://www.instagram.com/datadriven.ai_?utm_source=ig_web_button_share_sheet&igsh=bnVyMHBkeGdsOGln",
  },

  {
    id: 2,
    title: "Bangkit Academy 2024",
    position: "Machine Learning Cohort",
    date: "Sep 2024 - Dec 2024",
    organization: "led by Google, GoTo, Tokopedia, Traveloka",
    highlights: [
      "Selected as one of 4636 students out of 45.841 applicants.",
      "Developed skin disease detection app using CNN.",
      "Worked in a cross-functional team (ML, Android, Cloud).",
      "Learned practical machine learning and deployment.",
    ],
    certificate:
      "https://drive.google.com/file/d/1E29m4esjLO4KoKHGGXsVVFzRn5x_A3jZ/view?usp=sharing",
    linkedin:
      "https://www.linkedin.com/in/carmenita-lamba-6a7555220/add-edit/POSITION/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profilePosition%3A%28ACoAADecNp8BBS42YvhOUeyssoTu0_Rft4r6ayo%2C2469652243%29&trackingId=4NlzQS%2BCR9O2nljE4OZV6A%3D%3D&desktopBackground=MAIN_PROFILE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bnsu1AWJVQF%2B3H7594VoqOA%3D%3D",
  },
  {
    id: 3,
    title: "Sam Ratulangi University",
    position: "Lecture Assistant in Database Practicum",
    date: "Jan 2024 - Jul 2024",
    highlights: [
      "Assisted students in database design and SQL queries.",
      "Supported lab sessions and graded practicum assignments.",
      "Supported lecturer in improving practicum materials.",
    ],
    linkedin:
      "https://www.linkedin.com/in/carmenita-lamba-6a7555220/add-edit/POSITION/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profilePosition%3A%28ACoAADecNp8BBS42YvhOUeyssoTu0_Rft4r6ayo%2C2475490164%29&trackingId=m4J0TDixSL2BtnY7HzbifA%3D%3D&desktopBackground=MAIN_PROFILE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqJhlnj8xR%2BO%2BPaFrgRCrjA%3D%3D",
  },
  {
    id: 4,
    title: "PT Metrocom Global Solusi",
    position: "Front-End Dev Intern",
    date: "Oct 2023 - Dec 2023",
    organization: "Magang Kampus Merdeka (MSIB)",
    highlights: [
      "Designed and developed a company portal website for HR and Sales Ops to manage contracts & employee data.",
      "Worked with business analysts and stakeholders to translate requirements into functional features.",
    ],
    certificate:
      "https://drive.google.com/file/d/1PRI44-A7xiiFnR1mqiiq5TWS49yn1WmU/view?usp=sharing",
    linkedin:
      "https://www.linkedin.com/in/carmenita-lamba-6a7555220/add-edit/POSITION/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profilePosition%3A%28ACoAADecNp8BBS42YvhOUeyssoTu0_Rft4r6ayo%2C2278772325%29&trackingId=t8p1E6s%2FStKrDXjIWJNdTA%3D%3D&desktopBackground=MAIN_PROFILE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqJhlnj8xR%2BO%2BPaFrgRCrjA%3D%3D",
  },
];
