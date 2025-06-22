import HomeOne from "@/components/homes/home-two";
import Wrapper from "@/layouts/Wrapper";
import { authOptions } from "@/lib/authOptions"; // ✅ Correct import
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Metaedschool",
};

export default async function HomePage() {
  await getServerSession(authOptions); // ✅ Fetch session but don't use it in UI

  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
}
