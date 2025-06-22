interface MenuItem {
  id: number;
  title: string;
  link: string;
  menu_class?: string;
  home_sub_menu?: {
    menu_details: {
      link: string;
      title: string;
      badge?: string;
      badge_class?: string;
    }[];
  }[];
  sub_menus?: {
    link: string;
    title: string;
    dropdown?: boolean;
    mega_menus?: {
      link: string;
      title: string;
    }[];
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "About",
    link: "#",
    sub_menus: [
      { link: "/about-us", title: "About us" },
       { link: "/team", title: "Our team", },
      // { link: "#", title: "Our squad", },
      // { link: "#", title: "Our Student Stories", },
      // { link: "#", title: "Our Trusted Veterans", },

      // { link: "#", title: "About us", },
      { link: "#", title: "Our team" },
      { link: "#", title: "Our squad" },
      { link: "#", title: "Our Student Stories" },
      { link: "#", title: "Our Trusted Veterans" },
      //instructor-details
    ],
  },
  {
    id: 2,
    title: "Blogs",
    link: "#",
    sub_menus: [
      // { link: "blog-3", title: "All Blogs" },
      // { link: "#", title: "News Blogs" },
      // { link: "#", title: "Other Blogs" },

      { link: "#", title: "All Blogs" },
      { link: "#", title: "News Blogs" },
      { link: "#", title: "Other Blogs" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    link: "#",
    sub_menus: [
      {
        // link: "/events",
        // title: "Our Events",
        link: "#",
        title: "Our Events",
        // mega_menus: [
        //     { link: "/events", title: "Our Events", },
        //     { link: "/events-details", title: "Event Details", },
        // ]
      },
      {
        link: "#",
        title: "Shop",
        // dropdown: true,
        // mega_menus: [
        //     { link: "/shop", title: "Shop" },
        //     { link: "/shop-details", title: "Shop Details" },
        //     { link: "/wishlist", title: "Wishlist" },
        //     { link: "/cart", title: "Cart Page" },
        //     { link: "/check-out", title: "Checkout" },
        // ]
      },
      {
        link: "#",
        title: "Bootcamps (live)",
      },
      { link: "#", title: "Workshop" },
      { link: "#", title: "Coding Practice" },
      { link: "#", title: "Intervie Prep" },

      // { link: "/login", title: "Student Login" },
      // { link: "/registration", title: "Student Registration" },
      // { link: "/not-found", title: "404 Page" },
      // { link: "/contact", title: "Contact" },
    ],
  },
  {
    id: 4,
    title: "Programs",
    link: "#",
    sub_menus: [
      { link: "#", title: "Internship" },
      { link: "#", title: "Jobs" },
      { link: "#", title: "Mentorship" },
      { link: "#", title: "Counseling" },
      { link: "#", title: "Join our team" },
      { link: "#", title: "Request feature" },
      { link: "#", title: "Coming Soon" },
    ],
    // sub_menus: [
    //     {
    //         link: "#",
    //         title: "Instructor Dashboard",
    //         dropdown: true,
    //         mega_menus: [
    //             { link: "/instructor-dashboard", title: "Dashboard" },
    //             { link: "/instructor-profile", title: "Profile" },
    //             { link: "/instructor-enrolled-courses", title: "Enrolled Courses" },
    //             { link: "/instructor-wishlist", title: "Wishlist" },
    //             { link: "/instructor-review", title: "Reviews" },
    //             { link: "/instructor-attempts", title: "My Quiz Attempts" },
    //             { link: "/instructor-history", title: "Order History" },
    //             { link: "/instructor-courses", title: "My Course" },
    //             { link: "/instructor-announcement", title: "Announcements" },
    //             { link: "/instructor-quiz", title: "Quiz Attempts" },
    //             { link: "/instructor-assignment", title: "Assignments" },
    //             { link: "/instructor-setting", title: "Settings" },
    //         ]
    //     },
    //     {
    //         link: "#",
    //         title: "Student Dashboard",
    //         dropdown: true,
    //         mega_menus: [
    //             { link: "/student-dashboard", title: "Dashboard" },
    //             { link: "/student-profile", title: "Profile" },
    //             { link: "/student-enrolled-courses", title: "Enrolled Courses" },
    //             { link: "/student-wishlist", title: "Wishlist" },
    //             { link: "/student-review", title: "Reviews" },
    //             { link: "/student-attempts", title: "My Quiz Attempts" },
    //             { link: "/student-history", title: "Order History" },
    //             { link: "/student-setting", title: "Settings" },
    //         ]
    //     },
    // ],
  },
];
export default menu_data;
