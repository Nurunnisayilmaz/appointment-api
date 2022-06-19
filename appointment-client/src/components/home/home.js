import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../../config/imageConfig";
import "./home.css";

function home() {

    const [images, setImages] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            let allImages = await axios.get(`${server.localApi}/photos`);
            if (allImages.error){
                console.log("Error Occured while fetching datas")
            }
            setImages(allImages.data.allImages)
        }

        // call the function
        fetchData().catch(console.error);
        console.log(images)
    }, [JSON.stringify(images)]) //getirilen datanın tekrarla


        return(

            <div className="home">

                {
                    characters.map((element) => (

                        <img className="slider">{element.url}</img>
                        
                    ))}

            </div>

        )
}
export default home;