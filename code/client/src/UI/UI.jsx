import React, { Component, createRef, useEffect } from 'react';
import "./CSS/UI.css";
import BottomBar from "./bottomBar/BottomBar";
import TopBar from "./topBar/TopBar";
import MiddleBar from "./middleBar/MiddleBar";
import ComponentsContextRefsStorage from "../componentsContextRefs/ComponentsContextRefsStorage";

class UI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '0px',
            height: '0px',
            left: '0px',
            top: '0px',
            transform: 'none',
            display: 'none'
        };
        this.topBarRef = createRef()
        this.bottomBarRef = createRef()
        this.middleBarRef = createRef()

        ComponentsContextRefsStorage.add("bottomBar", this.bottomBarRef)
        ComponentsContextRefsStorage.add("middleBar", this.middleBarRef)
        ComponentsContextRefsStorage.add("topBar", this.topBarRef)
    }

    handleVisible(value){
        value === true ? this.setState({display: 'block'}) : this.setState({display: 'none'})
        this.middleBarRef.current.startOpenTween()
        this.topBarRef.current.startOpenTween()
        this.bottomBarRef.current.startOpenTween()
    }

    resize(resizeData){
        this.setState(resizeData);
    }

    resizeBottomBar(resizeData){
        this.bottomBarRef.current.resize(resizeData)
    }

    resizeTopBar(resizeData){
        this.topBarRef.current.resize(resizeData)
    }

    get bottomBarHeight(){
        return  this.bottomBarRef.current.getHeight()
    }

    render() {
        const { width, height, left, top, transform, display } = this.state;
        const style = { width, height, left, top, transform, display };

        return (
            <div id="UI" ref={this.props.forwardedRef} style={style}>
                <TopBar ref={this.topBarRef} />
                <BottomBar ref={this.bottomBarRef} />
                <MiddleBar ref={this.middleBarRef} />     
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => <UI ref={ref} {...props} />);