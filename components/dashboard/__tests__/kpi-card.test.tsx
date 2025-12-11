import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { KPICard } from "../kpi-card";

describe("KPICard Component", () => {
  it("renders title and value", () => {
    const { getByText } = render(
      <KPICard title="Active Users" value="1,250" type="number" />
    );

    expect(getByText("Active Users")).toBeInTheDocument();
    expect(getByText("1,250")).toBeInTheDocument();
  });

  it("displays percentage type correctly", () => {
    const { getByText } = render(
      <KPICard
        title="Uptime"
        value="98%"
        subtitle="System is healthy"
        type="percentage"
      />
    );

    expect(getByText("98%")).toBeInTheDocument();
    expect(getByText("System is healthy")).toBeInTheDocument();
  });

  it("displays trend indicators", () => {
    const { getByText, rerender } = render(
      <KPICard
        title="Users"
        value="1,250"
        type="number"
        change={10}
        trend="up"
      />
    );

    expect(getByText("10%")).toBeInTheDocument();

    rerender(
      <KPICard
        title="Users"
        value="1,250"
        type="number"
        change={-10}
        trend="down"
      />
    );

    expect(getByText("10%")).toBeInTheDocument();
  });

  it("displays progress ring for progress type", () => {
    const { getByText } = render(
      <KPICard
        title="Tasks"
        value="12/31"
        subtitle="Tasks done"
        type="progress"
        progress={38.7}
      />
    );

    expect(getByText("12/31")).toBeInTheDocument();
    expect(getByText("Tasks done")).toBeInTheDocument();
  });
});
