import {User} from "./partial-spike";

type ReadOnlyNewUser = Readonly<Omit<User, "id">>
