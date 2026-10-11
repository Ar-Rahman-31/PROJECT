import { createContext } from "react";

export const PostContext=createContext()

export const PostContextProvider =({children})=>{

    const [loading, setloading] = useState(false)
    const [post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)

    return(
        <PostContext.Provider value={(loading,setloading,post,setPost,feed,setFeed)}>
            {children}
        </PostContext.Provider>
    )
}