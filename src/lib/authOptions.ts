// // src/lib/authOptions.ts
// import { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcrypt";
// import connection from "@/app/db/connection"; // Adjust the path as per your structure

// export const authOptions: AuthOptions = {
//   session: {
//     strategy: "jwt",
//     maxAge: 60 * 60 * 24 * 1,
//   },
//   jwt: {
//     maxAge: 60 * 60 * 24 * 1,
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "jsmith@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(
//         credentials: Record<"email" | "password", string> | undefined
//       ) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const { email, password } = credentials;
//         const [rows]: any = await connection.execute(
//           "SELECT * FROM Users WHERE email = ?",
//           [email]
//         );

//         if (!rows || rows.length === 0) {
//           throw new Error("No user found with this email");
//         }

//         const user = rows[0];
//         const checkPassword = await compare(password, user.password);
//         if (!checkPassword) {
//           throw new Error("Password doesn't match");
//         }

//         return { id: user.id?.toString(), name: user.name, email: user.email };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// src/lib/authOptions.ts
// src/lib/authOptions.ts
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import connection from "@/app/db/connection"; // Adjust path as needed

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 1,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const { email, password } = credentials;
        const [rows]: any = await connection.execute(
          "SELECT * FROM Users WHERE email = ?",
          [email]
        );

        if (!rows || rows.length === 0) {
          throw new Error("No user found with this email");
        }

        const user = rows[0];
        const checkPassword = await compare(password, user.password);
        if (!checkPassword) {
          throw new Error("Password doesn't match");
        }

        return {
          id: user.user_id.toString(),
          fname: user.first_name, // Ensure this field matches the database
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.fname = (user as any).fname; // Ensure fname is included in the JWT
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.fname = token.fname as string; // Explicitly cast as string
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
