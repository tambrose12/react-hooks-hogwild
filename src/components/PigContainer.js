import React from "react";
import PigCard from "./PigCard";

const PigContainer = ({hogs}) => {

    console.log(props.hogs);

    const renderHogs = props.hogs.map(hog => {

        return (
            <div className="ui grid container">
                <PigCard hog={hog}/>
            </div>
        )
	})

    }

export default PigContainer;