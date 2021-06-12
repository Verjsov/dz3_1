import React, { Component} from 'react';
import ReactDOM from 'react-dom'

export class GenerateCat extends Component {

    constructor(props) {
        super(props);
        this.state = { parent: "" };
    }

    componentDidMount() {
        this.setState({
            parent: ReactDOM.findDOMNode(this).parentNode
        });
    }


    getRandomNumber (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    parseCats (min, max) {
        const svg = require.context ( '../img/cats', true, /\.svg$/ );
        const paths = svg.keys();

        let number = this.getRandomNumber(min,max);
        const res = [];
        while (number){
            const rand = this.getRandomNumber(0,(paths.length-1));
            res.push(
                <img className="icon"
                     src={svg(paths[rand]).default}
                     alt="cat logo"
                     style={{
                         top: this.state.parent.offsetTop + this.getRandomNumber(1,(this.state.parent.offsetHeight-50)),
                         left: this.state.parent.offsetLeft + this.getRandomNumber(1,(this.state.parent.offsetWidth-100)),
                     }}
                />
            );
            number--;
        }
        return res;
    }


    render() {
        console.log(this.props)
        return (this.parseCats(1,10))
    }
}
