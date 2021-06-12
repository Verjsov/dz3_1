import React, { Component } from 'react';
import bengal from "../img/cats/bengal-cat.svg"

export class CatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            top: '100px',
            left: '500px'
        };
    }

    handleMouseMove = (e) => {
        const elem = document.getElementById("box");
        let isShow = false;
        let rect = elem.getBoundingClientRect();
        if (e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom) {
            isShow = true;
        }
        this.setState((state, props) => {
            return {
                top: e.clientY + 'px',
                left: e.clientX + 'px',
                show: isShow
            }
        });
    }

    componentDidMount() {
        window.addEventListener("mousemove",this.handleMouseMove)
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove",this.handleMouseMove)
    }

    render() {
        return (
            <div>
                <div className="box" id="box" style={{width:'100px',position:'relative',top:this.state.top,left:this.state.left}}>
                    <img src={bengal} className="cat" alt="logo" />
                </div>
                { this.state.show && <div style={{width:'150px',position:'relative',top:(parseInt(this.state.top) - 40) +'px' ,left:(parseInt(this.state.left) - 35) + 'px'}}>Покорми меня!</div>}
            </div>
        );
    }
}
