import React, { Component, useEffect } from 'react'
import WishList from "./WishList"
import axios from "axios";

const rootURL = "http://127.0.0.1:8000/"

export default class WishCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [],
        loaded: false,
        placeholder: "Loading"
        };
    }


    componentDidMount() {
        const fetchData = () => {
            axios.get(rootURL + 'wishes/' + this.props.url)

            // axios.get(rootURL + 'wishes/' + this.props.url, {
            //     method: 'get',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json',
            //         // 'Authorization': key,
            //         withCredentials: true,
            //         // mode: 'no-cors',
            //     }})
            
            // What TYPE should resp and data be?
            .then(resp => {
                if (resp.status > 400) {
                    return this.setState( () => {
                        return { placeholder: "Something's fucky" }
                    })
                }
                console.log(resp)
                return resp.data;
            })
            .catch(resp => {console.log(resp)})
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    }
                })
            })
        }

        // Using navigator.geolocation times out, don't use
        // const error = (err) => {
        //     console.warn(`ERROR(${err.code}): ${err.message}`);
        //   }
        
        // navigator.geolocation.getCurrentPosition(fetchData, error, {timeout:60000, enableHighAccuracy: false})
        fetchData()
    };

    render() {
        if (this.state.data != undefined && this.state.data.length) {
            if (this.props.url === 'nearby' && !("geolocation" in navigator)) {
                return (
                    <h1>Turn on location please</h1>
                )
            } else {
            return (
                <WishList data={this.state.data} />
            );
            }
        } else {

            // TODO: Change to component from semantic UI or create one
            // return <CircularProgress />
            return <h1>Loading</h1>
        }
    }
}
