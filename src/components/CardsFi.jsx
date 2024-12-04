import { Users } from "../assets/Javascript-Data/Users";

const CardsFi = () => {
  return (
    <div className="grid grid-cols-3 px-8 py-4 gap-5">
      {Users.map((user) => {
        return (
          <div key={user.id} className="bg-white rounded-[6px] h-[350px] p-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full"></div>
              <div>
                <h2 className="font-bold text-lg uppercase tracking-[1px]">
                  {user.name}
                </h2>
              </div>
            </div>
            <div>
              <ul>
                <li className="flex pt-4">
                  <h2 className="font-bold">Roles:</h2>
                  <h2>{user.role}</h2>
                </li>
                <li className="flex pt-2">
                  <h2 className="font-bold">Email:</h2>
                  <h2>{user.email}</h2>
                </li>
                <li className="flex pt-2">
                  <h2 className="font-bold">Phone Number:</h2>
                  <h2>{user.phonenumber}</h2>
                </li>
                <li className="flex pt-2">
                  <h2 className="font-bold">Course:</h2>
                  <h2>{user.course}</h2>
                </li>
                <li className="flex pt-2">
                  <h2 className="font-bold">Status:</h2>
                  <h2>{user.status}</h2>
                </li>
              </ul>
            </div>
            <h2 className="w-full py-2 mt-10 rounded-[5px] bg-red-300 text-center">
              Delete
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default CardsFi;
