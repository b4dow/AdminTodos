import { WidgetItem } from "@/components";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="Total a pagar">
        <h2>Este es un ejemplo</h2>
      </WidgetItem>
    </div>
  );
}
