import User from '../models/user.model';
import { IUser } from '../modules/IUser';

export async function saveUser(user: IUser) {
    try {
        if (!await userExists(user.email)) {
            const newUser = new User(user);
            await newUser.save();
            return "Save Done";
        } else {
            // The user does not exist
            return "The user allready exists";
        }

    }
    catch (e) {
        console.log(e);
        return "Error";
        }
}

export async function userExists(email: String) {
    const user = await User.findOne({ email });
    return user;

}
