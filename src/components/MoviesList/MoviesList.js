import React from "react";
import Movie from "./Movie";

export default class MoviesList extends React.PureComponent{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.movies !== this.props.movies;
    }

    render(){
        return(
            <ul>
                {this.props.movies.map(data => <Movie {...data} key={data.id}/>)}
            </ul>
        )
    }
}