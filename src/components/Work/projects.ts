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
    color: "#d8a5ae",
    description:
      "The projects listed here are old; they're not indicative of my current skills. I'm working on building bigger, more robust full-stack applications, so stay tuned!",
    supportText: "Coming soon",
    title: "More Great Projects",
    imgSrc:
      "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    repoRef: null,
    siteRef: null
  },
  {
    background: "linear-gradient(45deg, #7aaec7, #a1c4d6)",
    description:
      "I am obsessed with reactive programming. This quick StackBlitz demonstrates some basics using user inputs. It also uses form validation and Angular Material.",
    color: "#98c1d6",
    supportText: "Angular / TS / RxJS",
    title: "Reactive Example",
    imgSrc:
      "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    // repoRef: "https://github.com/DrewMoody/gatsby-hero",
    siteRef: "https://stackblitz.com/edit/angular-zwmji9"
  },
  {
    background: "linear-gradient(20deg, #6ea99a, #84b3a8)",
    description:
      "The first site I ever made with Gatsby, and one of the first sites I ever made period. Features large hero headers (hence the name), a grid for displaying blog posts, and a beautiful UI.",
    color: "#9abfb6",
    supportText: "Gatsby / React",
    title: "Gatsby Hero",
    imgSrc:
      "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    repoRef: "https://github.com/DrewMoody/gatsby-hero",
    siteRef: "https://gatsby-hero.netlify.com"
  },
  {
    background: "linear-gradient(20deg, #9a9066, #c1b898)",
    color: "#b9b39b",
    description:
      "The first group project I was involved in. This is an app for training/studying based on the idea of spaced repetition. I designed the database and wrote much of the backend code. ",
    supportText: "React / Node / PostgreSQL",
    title: "Space Reps",
    imgSrc:
      "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
    repoRef: "https://github.com/Lambda-School-Labs/Labs8-SpacedRep",
    siteRef: "https://spaced-repetition.netlify.com/"
  }
];
