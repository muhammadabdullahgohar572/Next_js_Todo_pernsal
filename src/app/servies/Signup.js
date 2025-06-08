import { HttpasAxios } from "../Helper/Httpsreponse";

export const Signup =async (formData) => {
  try {
    const Userrequest =await HttpasAxios.post("/api/user", formData);
    return Userrequest.data;
  } catch (error) {
    console.log(error);
  }
};


export const LoginRequest =async (formData) => {
  try {
    const Userrequest =await HttpasAxios.post("/api/login", formData);
    return Userrequest.data;
  } catch (error) {
    console.log(error);
  }
};

