import UserTable from "./UserTable";

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
      <h1 className="tw-text-xl">UsersPage</h1>
      <UserTable sortBy={sortBy} users={users} />
    </div>
  );
};

export default UsersPage;
