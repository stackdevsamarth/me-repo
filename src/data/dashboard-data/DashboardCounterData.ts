interface DataType {
   id: number;
   icon: string;
   count: number;
   title: string;
}[];

const dashboard_count_data: DataType[] = [
   {
      id: 1,
      icon: "skillgro-book",
      count: 0,
      title: "ENROLLED EVENTS",
   },
   {
      id: 2,
      icon: "skillgro-tutorial",
      count: 0,
      title: "ACTIVE BLOGS",
   },
   // {
   //    id: 3,
   //    icon: "skillgro-diploma-1",
   //    count: 0,
   //    title: "COMPLETED COURSES",
   // },
   // {
   //    id: 4,
   //    icon: "skillgro-group",
   //    count: 160,
   //    title: "TOTAL STUDENTS",
   // },
   {
      id: 5,
      icon: "skillgro-notepad",
      count: 0,
      title: "TOTAL HACKATHON PARTICIPATIONS",
   },
   {
      id: 6,
      icon: "skillgro-dollar-currency-symbol",
      count: 29000,
      title: "TOTAL EARNINGS",
   },
];

export default dashboard_count_data;