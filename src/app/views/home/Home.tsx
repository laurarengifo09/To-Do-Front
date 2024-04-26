import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

export function Home() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
        </div>
      </div>
    );
  }