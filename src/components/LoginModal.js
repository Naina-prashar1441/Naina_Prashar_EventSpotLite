import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import checkValidData from "../utils/validate";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  backgroundColor: "transparent", 
  backdropFilter: "blur(5px)",
  boxShadow: 80,
  zIndex: 100,
  p: 4,
  border:"2px solid white"
};

const LoginModal = ({ setShowLoginModal }) => {
  const handleOnClose = () => {
    setShowLoginModal(false);
  };

  const [email, setEmail] = useState("naina@gmail.com");
  const [signInPassword, setSignInPassword] = useState("Naina@1411");
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState("Naina");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleClickButton = () => {
    //validate the data of the form
    const message = checkValidData(email, signInPassword);
    // console.log(message);
    setErrorMessage(message);
    if (message) return;

    //SignIn and SignUp logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, signInPassword)
        .then((userCredential) => {
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          // setErrorMessage(errorCode + "--" + errorMessage);
          setErrorMessage("User already created with this email id");
        });
    } else {
      signInWithEmailAndPassword(auth, email, signInPassword)
        .then((userCredential) => {
          
          navigate(from || "/mainpage");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         
          setErrorMessage("Not a valid user or Email/Password is incorrect");
        });
    }
  };

  return (
    <div>
      <Modal open={true} onClose={handleOnClose} className="">
        <div className="">
          <Box sx={style} className="shadow-2xl">
            <h1 className="text-white text-[35px] font-bold mx-[10px] ml-5 mb-[10px]">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <div>
                
                <input
                type="text"
                className="my-4 mx-5 ml-8 text-center px-[60px] py-[11px] w-[88%] bg-transparent border border-white text-white text-[19px] border-b-white rounded-sm"
                name="email"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              </div>
            )}
            <div className="flex-col">
              
              <input
                type="text"
                className="my-4 mx-5 ml-8 text-center w-[88%] px-[60px] py-[11px] bg-transparent border border-white text-white text-[19px] border-b-white rounded-sm"
                name="email"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              
              <input
                className="my-4 mx-5 ml-8 px-[60px] py-[11px] w-[88%] bg-transparent border border-white text-white text-[19px] border-white text-center rounded-sm"
                type="password"
                name="password"
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => {
                  setSignInPassword(e.target.value);
                }}
              />
              <button
                className="py-3 px-[145px]  mt-2 my-3 ml-8 text-white text-md justify-center bg-blue-800 rounded-sm hover:bg-blue-700 hover:text-[16px]"
                onClick={handleClickButton}
              >
                {isSignInForm ? "Sign in" : "Sign Up"}
              </button>
              <p className="text-red-800">{errorMessage}</p>
              <h3 className="underline text-white font-bold text-right cursor-pointer hover:text-xl">
                Forgot Password
              </h3>
              <h4 className="text-white text-center py-2">
                {isSignInForm ? "New to Netflix?" : "Already Registered?"}
                <h3
                  className="font-bold underline py-2 cursor-pointer hover:text-xl"
                  onClick={toggleSignInForm}
                >
                  {isSignInForm ? "Sign Up Now" : "Sign In Now"}
                </h3>
              </h4>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;


