import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="tw-flex tw-gap-4 tw-h-full">
      <aside className="tw-bg-slate-600 tw-p-4 tw-h-full"> Aside</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
