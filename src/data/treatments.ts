// Extracted from Nancy's saved Squarespace treatment pages.
// Draft content: Nancy must verify clinical claims, prices and treatment availability.
export type Treatment = {
 slug: string; title: string; description: string;
 duration: string; downtime: string; pricing: string;
};
export const treatments: Treatment[] = [
  {
    "slug": "neuromodulators",
    "title": "Wrinkle Relaxing Injections",
    "description": "The most commonly used umbrella term for all wrinkle relaxing injections in aesthetics is Botox, which is botulinum toxin. Wrinkle relaxing injections are injected into targeted muscles to reduce the appearance of wrinkles and fine lines.",
    "duration": "15–30 minutes",
    "downtime": "Mild to none",
    "pricing": "$8 per unit"
  },
  {
    "slug": "dermal-fillers",
    "title": "Dermal Fillers",
    "description": "Dermal fillers are a cosmetic treatment that restores fullness in your face when your skin begins to sag with aging. Different types of dermal fillers offered contain hyaluronic acid and calcium hydroxylapatite microspheres (Radiesse).",
    "duration": "30–45 minutes",
    "downtime": "Possible swelling and bruising",
    "pricing": "$650–$700 per syringe"
  },
  {
    "slug": "radiesse",
    "title": "Radiesse",
    "description": "Radiesse is an injectable dermal filler and biostimulator composed of calcium hydroxylapatite (CaHA) microspheres, used to provide immediate lift and long-term structural support in the skin.",
    "duration": "30–45 minutes",
    "downtime": "Possible swelling and bruising",
    "pricing": "$800 per syringe"
  },
  {
    "slug": "prp-prf-injections",
    "title": "PRP / PRF Injections",
    "description": "Platelet-Rich Plasma (PRP) is a minimally invasive treatment that uses your body’s own healing properties. PRP involves injecting concentrated platelets and plasma from your own blood into the treatment area.",
    "duration": "45–60 minutes",
    "downtime": "Possible swelling and bruising",
    "pricing": "$600 per session"
  },
  {
    "slug": "fat-dissolving-injections",
    "title": "Fat-Dissolving Injections",
    "description": "Lipodissolve is an injectable fat-reduction treatment composed of a blend of phosphatidylcholine and deoxycholate, used to dissolve localized fat deposits and refine contours.",
    "duration": "45–60 minutes",
    "downtime": "Extensive swelling and bruising for at least two weeks",
    "pricing": "Starting at $750 per session"
  },
  {
    "slug": "fotona-laser-hair-removal",
    "title": "Fotona Laser Hair Removal",
    "description": "Laser hair removal with the Fotona system utilizes Nd:YAG laser technology to reduce unwanted hair by targeting hair follicles.",
    "duration": "45–60 minutes",
    "downtime": "Little to none",
    "pricing": "Starting at $120 per session"
  },
  {
    "slug": "fotona-laser-skin-treatments",
    "title": "Fotona Laser Skin Treatments",
    "description": "Fotona laser skin treatments use dual-wavelength technology (Er:YAG and Nd:YAG) for skin tightening and resurfacing.",
    "duration": "45–60 minutes",
    "downtime": "Mild swelling and peeling",
    "pricing": "Starting at $200 per session"
  },
  {
    "slug": "microneedling",
    "title": "Microneedling with Dermapen 4",
    "description": "Microneedling is a minimally invasive skin-rejuvenation procedure that uses tiny sterile needles to create controlled micro-injuries on the skin surface.",
    "duration": "45–60 minutes",
    "downtime": "Mild swelling and redness",
    "pricing": "$300 per session"
  }
];
