import { Graph } from "../../components/admin/Graph";
import { Card } from "../../components/admin/Card";

export const Dashboard = () => {
  return (
    <main className="flex flex-col items-center w-full h-auto">
      <section className="w-3/4 flex flex-col items-center ">
        <div className="gap-4 p-4 w-full border-2">
          <Card />
          <Graph />
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold text-lg">Data peminjam buku</span>
              <div className="w-80 bg-slate-200 h-[40vh] rounded-lg"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold text-lg">Data member</span>
              <div className="w-80 bg-slate-200 h-[40vh] rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
