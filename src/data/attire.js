// Professional Attire Portfolio
// To add a photo: put it in public/attire/ and set `image` to its path,
// e.g. image: "/attire/business-formal.jpg"
// Looks without a photo are hidden on the live site (shown as a frame only on localhost).
// Set aiEdited: true on a look whose photo was changed with AI, so a small "AI-edited" label shows.

export const attireData = [
  {
    id: "business-formal",
    category: "Business Formal",
    title: "Corporate Professional",
    image: "/attire/business-formal.jpg",
    aiEdited: true,
    alt: "Ahsan Iqbal in a white formal shirt, navy-blue trousers and black formal shoes",
    outfit: "White formal shirt tucked into dark navy trousers, belt and black formal shoes.",
    caption:
      "A crisp white formal shirt with tailored navy trousers and polished black shoes is the classic corporate look for offices, client meetings and formal events. It communicates reliability and attention to detail, reflecting Conscientiousness.",
    trait: "Conscientiousness",
    skill: "Professionalism",
  },
  {
    id: "skills-in-action",
    category: "Skills in Action",
    title: "Coding at Work",
    image: "/attire/skills-in-action.jpg",
    aiEdited: true,
    alt: "Ahsan Iqbal in a navy bomber jacket over a dark shirt, coding on a laptop at an office desk",
    outfit: "Smart-casual top at a desk with a laptop open and code on screen.",
    caption:
      "A smart-casual bomber jacket over a dark shirt keeps me comfortable yet professional while I write code at an office workstation. It demonstrates my programming and problem-solving skills and Openness to learning new technologies.",
    trait: "Openness",
    skill: "Programming & problem solving",
  },
  {
    id: "field-specific",
    category: "Field-Specific Wear",
    title: "Everyday Developer Wear",
    image: "/attire/field-specific.jpg",
    alt: "Ahsan Iqbal on campus in a black puffer jacket, grey hoodie and blue jeans",
    outfit: "Clean plain t-shirt or quarter-zip, university/ID lanyard, headphones around the neck. Desk with monitor showing an IDE.",
    caption:
      "A hoodie, jacket and jeans reflect the relaxed, practical dress code of software teams, where comfort supports long hours of focused coding and debugging. It represents my role as a developer and Emotional Stability (low Neuroticism): staying calm and steady under pressure.",
    trait: "Emotional Stability",
    skill: "Software development",
  },
  {
    id: "presentation-interview",
    category: "Presentation / Interview",
    title: "Interview Ready",
    image: "/attire/presentation-interview.jpg",
    alt: "Ahsan Iqbal standing confidently in a black button-down shirt and jeans",
    outfit: "Pressed formal shirt and blazer (tie optional), formal trousers. Standing beside a screen or slides, gesturing while speaking.",
    caption:
      "A crisp dark button-down shirt looks neat and confident without being stiff, which suits a tech-company interview or a class presentation. It shows communication skills and Extraversion: ready to speak up and present ideas clearly.",
    trait: "Extraversion",
    skill: "Communication & presenting",
  },
  {
    id: "team-networking",
    category: "Team / Networking Event",
    title: "Industry Visit with My Team",
    image: "/attire/team-networking.jpg",
    alt: "Ahsan Iqbal (right, black shirt) with three classmates at the reception of a software house",
    outfit: "Smart-casual collared shirt or polo. Take it with classmates or teammates (for example your project group), shaking hands or talking around a table.",
    caption:
      "Visiting a software house with my classmates to gather Software Requirements Engineering (SRE) questions from industry professionals, I wore a smart-casual black shirt that is polished but easy to approach. It reflects Agreeableness and teamwork: cooperating with my group and building professional connections.",
    trait: "Agreeableness",
    skill: "Teamwork & networking",
  },
];

// Only looks that have a photo appear on the live site
export const visibleAttire = import.meta.env.DEV
  ? attireData
  : attireData.filter((item) => item.image);
