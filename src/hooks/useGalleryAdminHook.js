import { useState } from "react";
import * as Constants from "../constants";
import Images from "../images.json";
const useGalleryAdminHook = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [images, setImages] = useState([...Images.images]);
  const [errorValues, setErrorValues] = useState({
    nameError: "",
    urllError: "",
    error: true,
  });
  const handleEdit = (index, name) => {
    console.log("edit", name);
    let tempImgArr = [...images];
    let position = tempImgArr.indexOf(Images.images[index - 1]);
    tempImgArr[position].name = name;
    setImages(tempImgArr);
  };
  const handleDelete = (index) => {
    console.log("del", index);
    let tempImgArr = [...images];
    let position = tempImgArr.indexOf(Images.images[index - 1]);
    tempImgArr.splice(position, 1);
    console.log(images);
    setImages(tempImgArr);
  };
  const handleNameChange = (event) => {
    event.preventDefault();

    const name = event.target.value;
    setImageName(name);
    var namePattern = /^[a-zA-Z]+/;
    if (name === "" || name === null) {
      //setNameError(Constants.INVALID_NAME);
      //setError(true);
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["nameError"]: Constants.INVALID_NAME,
      }));
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["error"]: true,
      }));
    } else if (!namePattern.test(name)) {
      //   setNameError(Constants.INVALID_NAME);
      //   setError(true);
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["nameError"]: Constants.INVALID_NAME,
      }));
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["error"]: true,
      }));
    } else {
      //setNameError("");
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["nameError"]: "",
      }));
      if (errorValues["nameError"] === "" && errorValues["urlError"] === "" && imageURL.length > 0)
        //setError(false);
        setErrorValues((errorValues) => ({
          ...errorValues,
          ["error"]: true,
        }));
    }
  };
  const handleURLChange = (event) => {
    event.preventDefault();

    const url = event.target.value;
    setImageURL(url);
    var urlPattern = /^[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/;
    if (url === "" || url === null) {
      //   setUrlError(Constants.INVALID_URL);
      //   setError(true);
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["urlError"]: Constants.INVALID_URL,
      }));
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["error"]: true,
      }));
    } else if (!urlPattern.test(url)) {
      //   setUrlError(Constants.INVALID_URL);
      //   setError(true);
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["urlError"]: Constants.INVALID_URL,
      }));
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["error"]: true,
      }));
    } else {
      //setUrlError("");
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["urlError"]: "",
      }));
      if (errorValues["nameError"] === "" && errorValues["urlError"] === "" && imageName.length > 0)
        //setError(false);
        setErrorValues((errorValues) => ({
          ...errorValues,
          ["error"]: false,
        }));
    }
  };
  const handleAdd = (url, name) => {
    setIsAdd(!isAdd);
  };
  const handleAddClick = () => {
    let tempImgArr = [...images];
    let size = tempImgArr.length;
    size = size + 1;
    console.log("size", size);
    let imageObject = {
      id: size,
      name: imageName,
      url: imageURL,
    };
    console.log(imageObject);
    tempImgArr = [...images, imageObject];

    setImages(tempImgArr);
    setIsAdd(!isAdd);
  };
  return {
    handleNameChange,
    handleURLChange,
    errorValues,
    handleAdd,
    handleAddClick,
    isAdd,
    handleEdit,
    handleDelete,
    images,
  };
};
export default useGalleryAdminHook;
