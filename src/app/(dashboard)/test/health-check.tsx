"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export function HealthCheck() {
    const trpc = useTRPC();

    const { data } = useSuspenseQuery(trpc.health.queryOptions());
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Health Check: {data.status}</h1>
    </div>
  );
}