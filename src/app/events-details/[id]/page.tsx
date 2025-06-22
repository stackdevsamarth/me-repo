// File: /app/events-details/[id]/page.tsx
import { FC } from "react";
import EventDetails from "@/components/inner-pages/events/event-details";
import Wrapper from "@/layouts/Wrapper";

interface PageProps {
  params: {
    id: string;
  };
}

export const metadata = {
  title:
    "Event Details of Metaedschools - Learn, Grow, and Transform Yourself",
};

const Page: FC<PageProps> = ({ params }) => {
  return (
    <Wrapper>
      <EventDetails Id={params.id} />
    </Wrapper>
  );
};

export default Page;
