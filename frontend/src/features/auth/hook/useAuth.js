import { useDispatch } from "react-redux";
import {register , login ,getME} from "../service/auth.api"
import { setUser,setLoading,setError } from "../auth.slice";

export function useAuth()
{
    const dispatch = useDispatch()

    async function handleRegister({email,register,password})
    {
        try
        {
            dispatch(setLoading(true))
            const data = await register({email,username, password})

        }catch(err)
        {
            dispatch(setError(err.response.data?.message || "register failed"))
        }finally
        {
            setLoading(false)
        }
    }
   async function handleLogin({email, password})
{
    try
    {
        dispatch(setLoading(true))

        const data = await login({email,password})

        // console.log("Login:",data.user)
        dispatch(setUser(data))

        return data

    }catch(err)
    {
        dispatch(
          setError(
            err.response?.data?.message || "Login Failed"
          )
        )

        throw err
    }
    finally
    {
        dispatch(setLoading(false))
    }
}
    async function handleGetMe()
    {
        try
        {
            dispatch(setLoading(true))
            const data = await getME()
            dispatch(setUser(data))

        }catch(err)
        {
            dipatch(setError(err.response?.data?.message || "Failed To fetch Profile "))
        }
        finally
        {
            setLoading(false)
        }
    }

    return {

        handleRegister,handleGetMe,handleLogin
    }
    

}