import {
  claims_assistance,
  easy_refunds,
  exciting_rewards,
  expert_advice,
  lowest_price,
  salama,
  sukoon_logo,
  watania_takaful,
} from "../assets";

const filters = [
  "Sort",
  "Network(TPA)",
  "Network Hospitals",
  "Co-Payment",
  "Medical Cover",
  "Insurers",
  "Plan Types",
];
const advantages = [
  {
    icone: lowest_price,
    title: "Lowest Price Guaranteed",
  },
  {
    icone: expert_advice,
    title: "Expert Advice",
  },
  {
    icone: claims_assistance,
    title: "Cliams Assistance",
  },
  {
    icone: easy_refunds,
    title: "Easy Refunds",
  },
  {
    icone: exciting_rewards,
    title: "Exciting Rewards",
  },
];

const insurancePlans = [
  {
    company: salama,
    plans: [
      {
        plan: "Basic",
        network: "Mednet",
        medicalCover: "150,000",
        pharmacyList: "Upto AED 1,500",
        diagnosis: "20%",
        PhysicianConsultaion: "Nill",
        pharmacy: "30%",
        physiotharapy: "Nill",
        AED: "560",
        shouldKnow:
          "In order to visit a specialist within your network you have to first consult a general..",
        weLove:
          "Instant issuance and activation for members earning below AED 4,000.",
      },
      {
        plan: "Silk Road",
        network: "MEDNET Silk Road",
        medicalCover: "1,000,000",
        pharmacyList: "Upto Medical Cover",
        diagnosis: "20%",
        PhysicianConsultaion: "20%",
        pharmacy: "20%",
        physiotharapy: "20%",
        AED: "1,931",
        shouldKnow:
          "Silk road is restricted to clinics for specialists and hospital access for emergencies only.",
        weLove:
          "With easy claim service on Salama App, you can now submit your claim from the comfort of your home.. ",
      },
      {
        plan: "Silk Road",
        network: "MEDNET Silk Road",
        medicalCover: "1,000,000",
        pharmacyList: "Upto Medical Cover",
        diagnosis: "20%",
        PhysicianConsultaion: "20%",
        pharmacy: "20%",
        physiotharapy: "20%",
        AED: "1,931",
        shouldKnow:
          "Silk road is restricted to clinics for specialists and hospital access for emergencies only.",
        weLove:
          "With easy claim service on Salama App, you can now submit your claim from the comfort of your home.. ",
      },
    ],
  },
  {
    company: watania_takaful,
    plans: [
      {
        plan: "Silk Road - Family Care Plan",
        network: "MEDNET Silk Road",
        medicalCover: "1,000,000",
        pharmacyList: "Upto Medical Cover",
        diagnosis: "Nill",
        PhysicianConsultaion: "20%",
        pharmacy: "10%",
        physiotharapy: "Nill",
        AED: "2,075",
      },
    ],
  },
  {
    company: sukoon_logo,
    plans: [
      {
        plan: "Safe",
        network: "Vital Network",
        medicalCover: "150,000",
        pharmacyList: "Upto Medical Cover",
        diagnosis: "10%",
        PhysicianConsultaion: "10%",
        pharmacy: "10%",
        physiotharapy: "10%",
        AED: "2,636",
        shouldKnow: " Annual medical is Aed 150,000",
        weLove:
          "Direct access to hospitals for both inpatient & outpatient services",
      },
    ],
  },
];

export { filters, advantages, insurancePlans };
