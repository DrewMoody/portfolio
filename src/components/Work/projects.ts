import { ICard } from "../Card/Card";

// blueish
// linear-gradient(20deg, #8b8ec7, #a5a8e0)
// #b0b1e0
// purplish
// background: "linear-gradient(45deg, #9784af, #a48fbd)"
// color: "#b9a3d4"

export const myProjects: ICard[] = [
  {
    background: "#d8a5ae",
    color: "#de8d98",
    description:
      "The projects listed here are mostly old; they're not indicative of my current skills. I'm working on building bigger, more robust full-stack applications, so stay tuned!",
    supportText: "Coming soon!",
    title: "More Projects",
    // imgSrc: "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    repoRef: null,
    siteRef: null
  },
  {
    background: "linear-gradient(45deg, #7aaec7, #a1c4d6)",
    description:
      "I am a huge fan of reactive programming. This quick StackBlitz demonstrates some RxJS basics -- watching input change events and triggering the update of data on a table. It also uses form validation and Angular Material.",
    color: "#89b1c5",
    supportText: "Angular / TS / RxJS",
    title: "Reactive Example",
    // imgSrc: "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    // repoRef: "https://github.com/DrewMoody/gatsby-hero",
    siteRef: "https://stackblitz.com/edit/angular-zwmji9"
  },
  {
    background: "linear-gradient(20deg, #6ea99a, #84b3a8)",
    description:
      "The first site I ever made with Gatsby, and one of the first sites I ever made period. Features large hero headers (hence the name), a grid for displaying blog posts, and a beautiful UI.",
    color: "#88b3ab",
    supportText: "Gatsby / React",
    title: "Gatsby Hero",
    // imgSrc: "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    repoRef: "https://github.com/DrewMoody/gatsby-hero",
    siteRef: "https://gatsby-hero.netlify.com"
  },
  {
    background: "linear-gradient(20deg, #9a9066, #c1b898)",
    color: "#b3ac93",
    description:
      "The first group project I was involved in. This is an app for training/studying based on the idea of spaced repetition. I designed the database and wrote much of the backend code. ",
    supportText: "React / Node / PostgreSQL",
    title: "Space Reps",
    // imgSrc: "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    repoRef: "https://github.com/Lambda-School-Labs/Labs8-SpacedRep",
    siteRef: "https://spaced-repetition.netlify.com/"
  }
];
