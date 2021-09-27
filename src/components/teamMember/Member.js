import React from 'react';
import "./Member.css";
const Member = (props) => {
    console.log(props.member);
    const {img, name, post, current_semester, salary, dept} = props.member ;

    return (
                <>
                    <div className="col">
                        <div className="card w-75">
                             <img src= {img} alt="" />
                          <div className="card-body">
                                <h4 className="card-title">Name:{name}</h4>
                                <h5 className="card-text">Post: {post} </h5>
                                <h5> Semester: {current_semester} </h5>            
                                <h5> Department: {dept} </h5>            
                                <h5> Expected salary: {salary} </h5>   
                                <button 
                                onClick = {() => props.handleAddToCart(props.member)}
                                className="btn btn-outline-info"> Select the member </button>
                            </div>
                            
                        </div>
                  </div>
             </>







        
    );
};

export default Member;