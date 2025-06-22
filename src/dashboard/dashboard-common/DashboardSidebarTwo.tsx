"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";

interface DataType {
  id: number;
  title: string;
  class_name?: string;
  sidebar_details: {
    id: number;
    link: string;
    icon: string;
    title: string;
  }[];
}
[];

const sidebar_data: DataType[] = [
  {
    id: 1,
    title: "Welcome, Student Name",
    sidebar_details: [
      {
        id: 1,
        link: "/student-dashboard",
        icon: "fas fa-home",
        title: "Dashboard",
      },
      {
        id: 2,
        link: "/student-profile",
        icon: "skillgro-avatar",
        title: "My Profile",
      },
      {
        id: 3,
        link: "/student-enrolled-courses",
        icon: "skillgro-book",
        title: "Enrollments",
      },
      // {
      //   id: 4,
      //   link: "/student-wishlist",
      //   icon: "skillgro-label",
      //   title: "Opportunities Portal",
      // },
      // {
      //   id: 5,
      //   link: "/student-review",
      //   icon: "skillgro-book-2",
      //   title: "Blog Published",
      // },
      // {
      //   id: 6,
      //   link: "/student-attempts",
      //   icon: "skillgro-question",
      //   title: "Assigments",
      // },
      // {
      //   id: 7,
      //   link: "/student-history",
      //   icon: "skillgro-satchel",
      //   title: "History",
      // },
    ],
  },
  {
    id: 2,
    title: "User",
    class_name: "mt-30",
    sidebar_details: [
      {
        id: 1,
        link: "/student-setting",
        icon: "skillgro-settings",
        title: "Settings",
      },
      {
        id: 2,
        link: "/logout",
        icon: "skillgro-logout",
        title: "Logout",
      },
    ],
  },
];

const DashboardSidebarTwo = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const sidebar_data: DataType[] = [
    {
      id: 1,
      title: `Welcome, ${session?.user?.fname || "User"}`,
      sidebar_details: [
        {
          id: 1,
          link: "/student-dashboard",
          icon: "fas fa-home",
          title: "Dashboard",
        },
        {
          id: 2,
          link: "/student-profile",
          icon: "skillgro-avatar",
          title: "My Profile",
        },
        {
          id: 3,
          link: "/student-enrolled-courses",
          icon: "skillgro-book",
          title: "Enrollments",
        },
        // {
        //   id: 4,
        //   link: "/student-wishlist",
        //   icon: "skillgro-label",
        //   title: "Opportunities Portal",
        // },
        // {
        //   id: 5,
        //   link: "/student-review",
        //   icon: "skillgro-book-2",
        //   title: "Blog Published",
        // },
        // {
        //   id: 6,
        //   link: "/student-attempts",
        //   icon: "skillgro-question",
        //   title: "Assigments",
        // },
        // {
        //   id: 7,
        //   link: "/student-history",
        //   icon: "skillgro-satchel",
        //   title: "History",
        // },
      ],
    },
    {
      id: 2,
      title: "User",
      class_name: "mt-30",
      sidebar_details: [
        {
          id: 1,
          link: "/student-setting",
          icon: "skillgro-settings",
          title: "Settings",
        },
        {
          id: 2,
          link: "/logout",
          icon: "skillgro-logout",
          title: "Logout",
        },
      ],
    },
  ];

  return (
    <div className="col-lg-3">
      <div className="dashboard__sidebar-wrap">
        {sidebar_data.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className={`dashboard__sidebar-title mb-20 ${item.class_name}`}
            >
              <h6 className="title">{item.title}</h6>
            </div>
            <nav className="dashboard__sidebar-menu">
              <ul className="list-wrap">
                {item.sidebar_details.map((list) => (
                  <li
                    key={list.id}
                    className={pathname === list.link ? "active" : ""}
                  >
                    <Link href={list.link}>
                      <i className={list.icon}></i>
                      {list.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebarTwo;
