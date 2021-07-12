const categories =  {
  network: 'Refcode Network',
  teach: 'Teaching / Tutoring',
  partner: 'Partner',
  donate: 'Donate',
  mentor: 'Career Coaching / Mentoring',
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
      title:  "Class TA",
      program: "Intro To Coding Class",
      categories: [categories.teach, categories.mentor],
      skills: [skills.code],
      description: "Attend class with students and help them work through the in-class projects.",
      requirements: "A little coding experience is nice but not required as long as you're good with computers and a quick study. 3 hours per week.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Study group lead",
      program: "Intro to Coding Class",
      categories: [ categories.teach, categories.mentor],
      skills: [skills.code],
      description: "Meet on Zoom with a small group of students to check-in, ask questions about homework and review lessons from class.",
      requirements: "Some previous web development experience is required since you'll have less support than the class TAs. 1 hour per week.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Homework Tutor",
      program: "Intro to Coding Class",
      categories: [ categories.teach, categories.mentor],
      skills: [skills.code],
      description: "Homework tutors will connect with a student one-on-one after class to help them with homework.",
      requirements: "Some previous web development experience is required since you'll have less support than the class TAs. 1 hour per week.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
        title:  "Slack Oncall",
        program: "Intro to Coding Class",
        categories: [ categories.teach, categories.mentor],
        skills: [skills.code],
        description: "Ensure there is always someone available to answer student questions on Slack quickly.",
        requirements: "Ability to respond to slack messages with a sympathetic emoji or helpful clarification.",
        buttonText: "Go to Volunteer Form",
        buttonHref: null,
      }, {
      title:  "Career Mentor",
      program: "Career Mentorship Program",
      categories: [categories.mentor],
      skills: [skills.code, skills.career],
      description: "Participants who have completed the discernment class and want to persue a software career are assigned a dedicated mentor to guide them through the next decisions they will make.",
      requirements: "You must have career experience in software. 1 hour per month for 6 months.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
   }, {
      title:  "Office Hours Tutor",
      program: "Intro To Coding Class",
      categories: [categories.teach],
      skills: [skills.code],
      description: "Hold scheduled zoom sessions for students to join to get help.",
      requirements: "Web development skills required. 1 hour per week.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Refcode Extended Network Member",
      program: "General",
      categories: [categories.network],
      skills: [skills.network],
      description: "Extended network members commit to reading a regular email (less than once per month) to stay informed when students are searching for a job. Beyond that, you just need to keep an ear out for opportunities and share them with the community when you find them.",
      requirements: "Some kind of professional or social network or any connections related to software hiring. ",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Laptop Donation",
      program: "General",
      categories: [categories.donate],
      skills: [skills.laptops],
      description: "Donate laptops for students to use.",
      requirements: "Macbooks in good condition that are less than 5 years old. Very limited use for Windows laptops.",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Apprentice Guide",
      program: "Apprenticeship Program",
      categories: [categories.teach, categories.mentor],
      skills: [skills.management, skills.code, skills.career],
      description: "Apprentice guides partner with a Refcode participant at a company and serve as a guarantee that the work will be done. Ideally this can be accomplished through guidance, pair programming, and coaching, but the guide may need to step in to write code if necessary.",
      requirements: "Career experience in software engineering relevant to the apprenticeship. Additionally, the guide must be skilled at teaching and mentoring. ",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Donor",
      program: "Refcode Overhead",
      categories: [categories.donate],
      skills: [skills.money],
      description: "Tax-deductible cash or in-kind donations given to support participants in their journey to software engineering careers.",
      requirements: "Cash or tangible goods",
      buttonText: "Go to Volunteer Form",
      buttonHref: null,
    }, {
      title:  "Meetup Participant",
      program: "Refcode Meetup",
      categories: [categories.network, categories.teach, categories.mentor],
      skills: [skills.code, skills.career],
      description: "Join the monthly Refcode Meetup to connect with refugees learning code and be a part of our community.",
      requirements: "None",
      buttonText: "Subscribe for updates",
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
