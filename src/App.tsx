import { RouterProvider } from "react-router-dom"
import router from "./Routes"
import { Toaster } from "react-hot-toast"



function App()  {
  
  return (
    <>
    <RouterProvider router={router} />
        <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
            zIndex: 9999
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          }
        }}
      />
    </>
  )
}

export default App
