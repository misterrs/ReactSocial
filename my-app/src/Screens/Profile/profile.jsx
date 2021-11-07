import { toggleShowNameAction } from "../../Store/profile/actions";
import { useSelector, useDispatch } from "react-redux";
import { profileSelector } from "../../Store/profile/selectors";

export const Profile = () => {
   const {name, showName} = useSelector(profileSelector);
   const dispatch = useDispatch();

   const handleToggleShowName = () => {
      dispatch(toggleShowNameAction());
   };
 return (
    <div>
    <button onClick={handleToggleShowName}>ShowName</button>
    <div>{showName && name}</div>
    </div>
 ); 
}