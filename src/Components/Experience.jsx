
import React from "react";
import { Chrono } from "react-chrono";
import "./experience.css";

const experienceItems = [
  {
    title: "Feb 2024 – June 2024",
    cardTitle: "Machine Learning Intern",
    cardSubtitle: "ISRO (Indian Space Research Organisation)",
    cardDetailedText: [
      "Developed a machine learning-based forest fire detection system using Sentinel-2 satellite images with self-supervised learning techniques.",
      "Enhanced satellite-based environmental monitoring for early forest fire detection."
    ],
  },
  {
    title: "Nov 2021 – Apr 2024",
    cardTitle: "Undergraduate Research Assistant",
    cardSubtitle: "Amrita Vishwa Vidhyapeetham, Chennai",
    cardDetailedText: [
      "Quantum Kernel-aided Support Vector Machine Classifier for Improved Speech Classification.",
      "Sarcasm Detection in Telugu and Tamil using ML and DNNs.",
      "MedDQN: Deep Reinforcement learning approach for Biomedical Image Classification.",
      "Marine Plastic Detection with CLAHE-Enhanced Underwater Images using YOLOv8 + Attention.",
      "VisTA: Vision Transformer + CNN Ensemble for ALL Leukemia classification."
    ],
  },
  {
    title: "July 2023 – Aug 2023",
    cardTitle: "Machine Learning Intern",
    cardSubtitle: "Sync Interns",
    cardDetailedText: [
      "Built ML-based speech-to-speech medical chatbot for disease prognosis.",
      "Enhanced diagnostic accuracy with synonym recognition.",
      "Implemented & fine-tuned speech recognition and synthesis for accessibility."
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <Chrono
        items={experienceItems}
        mode="VERTICAL_ALTERNATING"
         disableToolbar
        cardHeight={null}
        hideControls
      />
    </div>
  );
}
