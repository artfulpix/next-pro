import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

export type UserSortBy = "name" | "email" | "id";
interface Props {
  params: any;
  searchParams: { sortBy: UserSortBy };
}

export interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div>
      <Link href="/users/new" className="tw-btn tw-btn-accent">
        New User
      </Link>
      <h1 className="tw-text-xl">UsersPage</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortBy={sortBy} users={users} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
