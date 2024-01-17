import { Table } from "@/app/ui/collection/Table";
import { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons/TableSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    type?: "trending" | "top_rated" | undefined;
  };
}) {
  let genre = searchParams?.type as "trending" | "top_rated" | undefined;
  return (
    <main>
      <Suspense fallback={<TableSkeleton />}>
        <Table genre={genre} />
      </Suspense>
    </main>
  );
}
