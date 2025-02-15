import { useDispatch, useSelector } from "react-redux"
import set from "../assets/manage.png"
import {
    Menu,
    MenuHandler,
    IconButton,
    MenuList,
    MenuItem,
    Checkbox,
  } from "@material-tailwind/react";

import { useState } from "react";
import { addModeratorAPI, getAllUsersAPI, handleBan, handleUnban, removeModeratorAPI } from "../redux/slices/userSlice";

export const Usercard = ({users}) =>{

    // get the current user from the redux store
    const currentUser = useSelector((state)=>state.auth?.data.loggedInUserDetails)
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = async (event) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        if (isChecked) {

            // if the user is not a moderator, add the user as a moderator
            const res = await dispatch(addModeratorAPI(users?._id))
            await dispatch(getAllUsersAPI())
        } else {

            // if the user is a moderator, remove the user as a moderator
            const res = await dispatch(removeModeratorAPI(users?._id))
            await dispatch(getAllUsersAPI())
        }
    };

    async function handleBanUnban(){

        if(users?.ban == false){

            // if the user is not banned, ban the user
            const res = await dispatch(handleBan(users?._id))
            await dispatch(getAllUsersAPI())
        }else if (users?.ban == true){

            // if the user is banned, unban the user
            const res = await dispatch(handleUnban(users?._id))
            await dispatch(getAllUsersAPI())
        }

    }


    return(
        <div className="h-16 w-full border my-4 px-2 flex rounded-lg">

            <div className="w-[20%] flex justify-center items-center">
                 <div className="flex justify-center items-center border rounded-full  h-12 w-12">{users?.username?.slice(0,2)}</div>
            </div>
            <div className="w-[80%] h-full flex ">
                <div className="h-full text-sm flex justify-start items-center mx-1">
                    <div className="font-semibold">{users?.username}</div>
                </div>
                <div className="w-1/2 h-full flex justify-start items-center mx-1">
                        <div className={`font-mono text-xs text-white py-1 px-2 rounded-md mx-2
                          ${users?.role == "ADMIN" ? 'bg-red-400' : ``}
                          ${users?.role == "MODERATOR" ? 'bg-green-400' : ``}
                          ${users?.role == "USER" ? 'bg-black' : ``}
                          `}>
                         {users?.role}
                         </div>
                </div>
            </div>

            {
                currentUser?.role == "ADMIN" ? 
                <div className="flex justify-center items-center">

                    {
                        users?.role  == 'ADMIN' ? <></>
                        :
                        <Menu dismiss={{ itemPress: false,}}>
                        <MenuHandler>
                            <IconButton variant="text">
                                <img
                                    src={set}
                                    alt="Wrench Icon"
                                    className="h-4 w-4"
                                />
                            </IconButton>
                        </MenuHandler>

                        <MenuList>

                                <MenuItem className="p-0">

                                  <label   htmlFor="item-1" className="flex cursor-pointer items-center gap-2 p-2" >
                                      <Checkbox checked={ users?.role == "MODERATOR" ? true : false}
                                        onChange={handleCheckboxChange}
                                        ripple={true}
                                        id="item-1"
                                        containerProps={{ className: "p-0" }}
                                        className="hover:before:content-none"
                                    />
                                    Moderator
                                 </label>
                                </MenuItem>
                                
                                <hr className="my-3" />

                                <MenuItem className="bg-red-400 text-white hover:bg-red-500" onClick={handleBanUnban}>
                                    {
                                        users?.ban == false ? <div>Ban</div> : <div>Unban</div>
                                    }
                                </MenuItem>                            
                        </MenuList>
                        </Menu>
        }
                </div>
                :
                <></>
            }

        </div>
    )
}