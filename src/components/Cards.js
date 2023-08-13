import React from "react";
import Card from "./Card";
import { useState,useEffect } from "react";

const Cards=(props)=>{
    let courses=props.courses;
    
    const[likedCourses,setLikedCourses]=useState([]);
    let category=props.category;
    function getCourses(){

        if(category ==="All"){

        let allCourses=[];
        Object.values(courses).forEach((arr)=>{
            arr.forEach((courseData)=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {
            getCourses().map((course)=>(
                <Card key={course.id} setLikedCourses={setLikedCourses} likedCourses={likedCourses} course={course} />
            ))
          }
        </div>
    )
}
export default Cards;