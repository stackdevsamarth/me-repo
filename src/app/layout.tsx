// "use client"
// import store from "@/redux/store";
// import { Provider } from "react-redux";
// import "../styles/index.scss";
// import { SessionProvider } from "next-auth/react";
// const isDev = process.env.NODE_ENV === 'development'

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={isDev}>
//       <head>
//         <meta name="description" content="Metaedschool - Koch to milega yrr" />
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap" />
//       </head>
//       <body suppressHydrationWarning={true}>
//         <Provider store={store}>
//           {children}
//         </Provider>
//       </body>
//     </html>
//   );
// }
"use client";

import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import "../styles/index.scss";

const isDev = process.env.NODE_ENV === "development";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="Metaedschool - Koch to milega yrr" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Wrap with SessionProvider to provide authentication state */}
        <SessionProvider>
          {/* Wrap Redux Provider to maintain state management */}
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
