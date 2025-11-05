import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import TransactionsTable from "../components/TransactionsTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <Dashboard />
        <div className="mt-10">
          <TransactionsTable />
        </div>
      </div>
    </main>
  );
}
