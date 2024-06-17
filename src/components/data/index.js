const categories =  {
  network: 'Refcode Network',
  teach: 'Teaching / Tutoring',
  partner: 'Partner',
  donate: 'Donate',
  mentor: 'Career Coaching / Mentoring',
  code: 'Coding',
}
const skills =  {
    code: 'Coding',
    network: 'Professional Network',
    laptops: 'Used Company Laptops',
    management: 'Management',
    career: 'Software Career',
    design: 'Design',
    money: 'Money',
}
const data = {
  cards: [
    {
      title:  "Lab TA",
      program: "Refcode Lab",
      categories: [categories.teach, categories.mentor, categories.code],
      description: "Attend walk-in lab and help one or more participants on an ad-hoc basis in their learning goals. ",
      requirements: "Good with computers or some coding skills. 3 hours per week.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Class TA",
      program: "Intro To Coding Class",
      categories: [categories.teach, categories.mentor, categories.code],
      description: "Attend class with students and help them work through the in-class projects.",
      requirements: "A little coding experience is nice but not required as long as you're good with computers and a quick study. 3 hours per week.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }
  ],
  categories: [
    {
      text: categories.network,
      backgroundColor: '306F9C'
    },
    {
      text: categories.teach,
      backgroundColor: '0D7D18'
    },
    {
      text: categories.partner,
      backgroundColor: 'B26F20'
    },
    {
      text: categories.donate,
      backgroundColor: 'B22020'
    },
    {
      text: categories.mentor,
      backgroundColor: '412986'
    },
    {
      text: categories.code,
      backgroundColor: 'B26F20'
    }
  ],
  skills: {
    backgroundColor: '333333',
    texts:[
      skills.code,
      skills.network,
      skills.laptops,
      skills.management,
      skills.career,
      skills.design,
      skills.money,
  ]
  }
}

export default data
