import {
  claims_assistance,
  easy_refunds,
  exciting_rewards,
  expert_advice,
  lowest_price,
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
      },
    ],
  },
];

export { filters, advantages, insurancePlans };
