export interface NavTabItem {
  title: string;
  uri: string;
}

const navItems: NavTabItem[] = [
  { title: "Home", uri: "/" },
  { title: "Bio", uri: "/bio/professional" },
  { title: "Experience", uri: "/experience" },
  { title: "Education", uri: "/education" },
  { title: "Skills", uri: "/skills" },
  { title: "Projects", uri: "/projects" }
];

export default navItems;
