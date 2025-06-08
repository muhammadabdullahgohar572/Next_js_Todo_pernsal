import { ToastContainer } from "react-toastify"

 const Show_Task=()=>{
    return(
        <>
        <h1>This is Show Task page</h1>
         <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        </>
    )
}


export default Show_Task