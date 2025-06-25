export interface Post {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    date:  Date; // puede venir como string del markdown
    image: string;
  };
}