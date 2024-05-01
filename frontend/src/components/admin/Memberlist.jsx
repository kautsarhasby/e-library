import { SearchBar } from "../admin/SearchBar";

export const MemberList = () => {
  return (
    <main className="w-full flex justify-center">
      <section className=" flex justify-center flex-col items-center w-3/4">
        <span className="font-bold text-xl">Memberlist</span>
        <SearchBar />
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </section>
    </main>
  );
};
