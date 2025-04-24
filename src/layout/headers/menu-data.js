const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service-3",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Portfolio",
    link: "/portfolio-2",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Team",
    link: "/team-2",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Career",
    link: "/job",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "AI Demo",
    link: "#",
    sub_menus: [
      {
        title: "Book Demo - Team",
        link: "https://devmatesolutionsai.vercel.app/",
        new_tab: true,
      },
      {
        title: "Book Demo - CEO",
        link: "https://zainulabideenai.vercel.app/",
        new_tab: true,
      },
    ],
  },
];
export default menu_data;
