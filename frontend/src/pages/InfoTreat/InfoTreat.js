const treatments = [
  {
    id: 1,
    name: "Angioplasty",
    slug: "angioplasty",
    category: "Cardiology",
    description:
      "Angioplasty is a minimally invasive procedure used to open blocked or narrowed coronary arteries to restore blood flow to the heart.",
    whyNeeded:
      "Needed when arteries are blocked due to plaque buildup, causing chest pain (angina) or heart attack.",
    procedureOverview:
      "A thin catheter with a balloon is inserted into the artery and inflated to open the blockage. A stent is usually placed to keep the artery open.",
    hospitalStay: "1–2 days",
    recoveryTime: "1–2 weeks",
    averageCostIndia: "₹1.5L – ₹3L",
    successRate: "95%+",
    risks: [
      "Bleeding at catheter site",
      "Re-narrowing of artery",
      "Blood clots",
      "Rare heart attack",
    ],
    preparation: "Fasting 6–8 hours before procedure.",
    afterCare:
      "Avoid heavy lifting for a week, take prescribed blood thinners.",
  },

  {
    id: 2,
    name: "Heart Bypass Surgery (CABG)",
    slug: "cabg",
    category: "Cardiology",
    description:
      "Coronary Artery Bypass Grafting (CABG) is a surgical procedure that improves blood flow to the heart by bypassing blocked arteries.",
    whyNeeded:
      "Recommended for severe coronary artery disease when multiple arteries are blocked.",
    procedureOverview:
      "A healthy blood vessel from another part of the body is used to create a new path for blood flow around blocked arteries.",
    hospitalStay: "5–7 days",
    recoveryTime: "6–12 weeks",
    averageCostIndia: "₹2.5L – ₹5L",
    successRate: "90–95%",
    risks: ["Infection", "Stroke", "Memory issues", "Bleeding"],
    preparation: "Blood tests, ECG, chest X-ray before surgery.",
    afterCare: "Cardiac rehabilitation, healthy diet, regular follow-ups.",
  },

  {
    id: 3,
    name: "Brain Tumor Surgery",
    slug: "brain-tumor-surgery",
    category: "Neurology",
    description: "Surgery to remove abnormal growth (tumor) in the brain.",
    whyNeeded:
      "Required when tumor causes pressure, seizures, or neurological problems.",
    procedureOverview:
      "A neurosurgeon removes part or all of the tumor through a craniotomy.",
    hospitalStay: "5–10 days",
    recoveryTime: "4–8 weeks",
    averageCostIndia: "₹3L – ₹8L",
    successRate: "Depends on tumor type and stage",
    risks: ["Bleeding", "Infection", "Neurological deficits", "Seizures"],
    preparation: "MRI/CT scan, neurological tests.",
    afterCare: "Rehabilitation therapy, follow-up scans.",
  },

  {
    id: 4,
    name: "Spinal Fusion Surgery",
    slug: "spinal-fusion",
    category: "Orthopedics",
    description:
      "A procedure to permanently connect two or more vertebrae in the spine.",
    whyNeeded:
      "Used to treat spinal instability, fractures, scoliosis, or severe back pain.",
    procedureOverview:
      "Bone grafts or implants are used to fuse vertebrae together.",
    hospitalStay: "3–5 days",
    recoveryTime: "3–6 months",
    averageCostIndia: "₹2L – ₹6L",
    successRate: "80–90%",
    risks: ["Infection", "Nerve damage", "Blood clots"],
    preparation: "Imaging scans and blood tests.",
    afterCare: "Physiotherapy required.",
  },

  {
    id: 5,
    name: "Knee Replacement",
    slug: "knee-replacement",
    category: "Orthopedics",
    description:
      "Surgical replacement of a damaged knee joint with an artificial implant.",
    whyNeeded: "Recommended for severe arthritis or joint damage causing pain.",
    procedureOverview:
      "Damaged bone and cartilage are removed and replaced with metal/plastic components.",
    hospitalStay: "3–5 days",
    recoveryTime: "6–12 weeks",
    averageCostIndia: "₹1.5L – ₹4L",
    successRate: "90–95%",
    risks: ["Infection", "Blood clots", "Implant wear"],
    preparation: "Physical fitness assessment.",
    afterCare: "Physiotherapy for mobility.",
  },

  {
    id: 6,
    name: "Hip Replacement",
    slug: "hip-replacement",
    category: "Orthopedics",
    description: "Replacement of damaged hip joint with artificial components.",
    whyNeeded: "Used for arthritis, fractures, or severe hip pain.",
    procedureOverview:
      "Damaged bone is removed and replaced with prosthetic implant.",
    hospitalStay: "3–5 days",
    recoveryTime: "6–12 weeks",
    averageCostIndia: "₹2L – ₹5L",
    successRate: "90–95%",
    risks: ["Infection", "Dislocation", "Blood clots"],
    preparation: "Pre-surgical tests and evaluation.",
    afterCare: "Physiotherapy and limited movement initially.",
  },

  {
    id: 7,
    name: "Liver Transplant",
    slug: "liver-transplant",
    category: "Transplant",
    description:
      "Surgical replacement of a diseased liver with a healthy donor liver.",
    whyNeeded: "Required in liver failure or severe liver disease.",
    procedureOverview:
      "The diseased liver is removed and replaced with donor liver.",
    hospitalStay: "2–3 weeks",
    recoveryTime: "3–6 months",
    averageCostIndia: "₹18L – ₹25L",
    successRate: "85–90%",
    risks: ["Organ rejection", "Infection", "Bleeding"],
    preparation: "Extensive medical evaluation and donor matching.",
    afterCare: "Lifelong immunosuppressant medicines.",
  },

  {
    id: 8,
    name: "Kidney Transplant",
    slug: "kidney-transplant",
    category: "Transplant",
    description:
      "Procedure to replace a failed kidney with a healthy donor kidney.",
    whyNeeded: "For end-stage kidney disease.",
    procedureOverview: "Donor kidney is surgically placed in lower abdomen.",
    hospitalStay: "1–2 weeks",
    recoveryTime: "6–8 weeks",
    averageCostIndia: "₹8L – ₹15L",
    successRate: "90–95%",
    risks: ["Rejection", "Infection", "Blood clots"],
    preparation: "Blood matching and health screening.",
    afterCare: "Lifelong medications and monitoring.",
  },

  {
    id: 9,
    name: "Cataract Surgery",
    slug: "cataract-surgery",
    category: "Ophthalmology",
    description:
      "Procedure to remove cloudy lens from the eye and replace it with an artificial lens.",
    whyNeeded: "Needed when vision becomes blurred due to cataract.",
    procedureOverview:
      "Cloudy lens is removed and replaced with intraocular lens (IOL).",
    hospitalStay: "Same day discharge",
    recoveryTime: "2–4 weeks",
    averageCostIndia: "₹20,000 – ₹80,000",
    successRate: "98%+",
    risks: ["Infection", "Blurred vision", "Swelling"],
    preparation: "Eye measurements and tests.",
    afterCare: "Use eye drops and avoid rubbing eyes.",
  },

  {
    id: 10,
    name: "LASIK Eye Surgery",
    slug: "lasik",
    category: "Ophthalmology",
    description: "Laser surgery to correct refractive vision problems.",
    whyNeeded: "Used to treat myopia, hyperopia, and astigmatism.",
    procedureOverview: "Laser reshapes cornea to improve vision.",
    hospitalStay: "Same day",
    recoveryTime: "1 week",
    averageCostIndia: "₹30,000 – ₹1L",
    successRate: "95–98%",
    risks: ["Dry eyes", "Glare", "Vision fluctuations"],
    preparation: "Stop wearing lenses before surgery.",
    afterCare: "Avoid eye strain for few days.",
  },

  {
    id: 11,
    name: "Chemotherapy (Per Cycle)",
    slug: "chemotherapy",
    category: "Oncology",
    description: "Drug treatment that destroys cancer cells.",
    whyNeeded: "Used to treat different types of cancer.",
    procedureOverview:
      "Cancer-fighting drugs are given via IV or orally in cycles.",
    hospitalStay: "Usually outpatient",
    recoveryTime: "Depends on cancer type",
    averageCostIndia: "₹50,000 – ₹2L per cycle",
    successRate: "Depends on stage & type",
    risks: ["Hair loss", "Nausea", "Weak immunity"],
    preparation: "Blood tests before each cycle.",
    afterCare: "Nutrition support and infection prevention.",
  },

  {
    id: 12,
    name: "Appendix Surgery",
    slug: "appendectomy",
    category: "General Surgery",
    description: "Surgical removal of inflamed appendix.",
    whyNeeded: "Required in appendicitis to prevent rupture.",
    procedureOverview: "Appendix is removed via laparoscopic or open surgery.",
    hospitalStay: "1–2 days",
    recoveryTime: "2–4 weeks",
    averageCostIndia: "₹50,000 – ₹1.5L",
    successRate: "95%+",
    risks: ["Infection", "Bleeding"],
    preparation: "Emergency blood tests & scans.",
    afterCare: "Avoid heavy work for few weeks.",
  },
];

export default treatments;
