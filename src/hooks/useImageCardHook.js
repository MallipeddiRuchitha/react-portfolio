import { useState } from "react";
import * as Constants from "../constants";
import Images from "../images.json";
const useImageCardHook = ({image1, handleDelete, handleEdit}) => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(image1.name);
    const[nameError,setNameError]=useState("");
    const handleClick = () => {
      setEdit(true);
      console.log("clicked");
    };
    const handleChangeInName = (event) => {
      event.preventDefault();
      // setName(event.target.value);
      const name=event.target.value;
      setName(name);
      var namePattern = /^[a-zA-Z]+/;
      if ((name === "" || name === null||!namePattern.test(name))){
        setNameError(Constants.INVALID_NAME);      
        
      } 
       else { setNameError("");        
      }
     console.log(name);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setEdit(false);
      return handleEdit(image1.id, name);
    };
  
    return {
        handleClick,
        handleSubmit,
        handleChangeInName,
        nameError,
        name,
        edit,
      };
};
export default useImageCardHook;