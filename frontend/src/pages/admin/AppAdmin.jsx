import { Outlet, useLocation } from "react-router-dom";
import { AdminSidebar } from "../../layouts/AdminSidebar";
import { Upbar } from "../../components/admin/Upbar";
import { useLoginAdmin } from "../../hooks/useLoginAdmin";
import { useEffect, useState } from "react";

export const AppAdmin = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const username = useLoginAdmin();
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  function UpbarUpdated({ pathname }) {
    let title;
    if (pathname == "/admin") {
      title = "Dashboard";
    } else if (pathname == "/admin/books") {
      title = "Books";
    } else if (pathname == "/admin/member") {
      title = "Data Member";
    }
    return <Upbar title={title} onClick={() => setIsOpen(!isOpen)} />;
  }

  useEffect(() => {
    if (isOpen == true && window.innerWidth <= 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <main className="flex min-h-screen">
      <AdminSidebar username={username} isOpen={isOpen} />
      <section className="w-full  flex flex-col items-center   lg:ml-[20%]">
        <UpbarUpdated pathname={pathname} />
        <Outlet />
      </section>
    </main>
  );
};
