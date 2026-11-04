// Draft migration from Squarespace homepage. Confirm details with Nancy before publishing.
export const homeContent = {
  hero: {
    headline: 'Surgery-Like Results. Non-Surgical Precision.',
    description: 'From Fotona4D® Non-Surgical Facelifts to Facial Balancing with Injectables, we provide medical-grade aesthetic treatments in the heart of New Westminster, BC.',
  },
  treatments: [
    { slug: 'facial-balancing', title: 'Facial Balancing', description: 'We’ll use a combination of fillers and wrinkle relaxers to refine your features and bring everything into harmony.' },
    { slug: 'body-contouring', title: 'Body Contouring', description: 'We’ll target those stubborn pockets of fat that diet and exercise won’t touch, to give you a more sculpted look.' },
    { slug: 'skin-tightening', title: 'Skin Tightening', description: 'You can actually firm up your skin and get a visible lift without any surgery, by using our Fotona laser.' },
  ],
  about: { eyebrow: 'Behind Nancy’s Medical Aesthetics', headline: 'Meet Your Nurse Injector', description: 'Meet Nancy Luong, passionate founder of our medspa. With a deep commitment to enhancing beauty and well-being, she has dedicated her career to creating a space where clients can feel empowered.' },
  testimonials: { eyebrow: 'Don’t just hear it from us', headline: 'Kind words from clients' },
  location: {
    address: '555 6th St, Unit 240, New Westminster, BC V3L 5H1',
    driving: 'Park for free on Level P2 of Westminster Centre. From the P2 entrance, turn left into the hallway to find Unit 240.',
    transit: 'Once inside Westminster Centre, take the escalator by London Drugs or the elevator by Starbucks up to Floor 2 (P2). Turn left into the hallway to find Unit 240.',
  },
  closing: { headline: 'Ready to meet the best version of yourself?', description: 'Whether you’re looking to refresh your glow or completely transform your skin, let’s create a custom plan that makes you feel as good as you look. Let’s get started!' },
} as const;
