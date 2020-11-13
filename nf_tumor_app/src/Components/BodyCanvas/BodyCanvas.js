import React, {useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {addBodyLocation, cleanupLocation} from '../../Redux/Actions/bodyLocation'
import DeleteButton from '../DeleteButton/DeleteButton';

import './BodyCanvas.css'

export default function BodyCanvas() {
    const dispatch = useDispatch();
    const canvas = useRef();
    let ctx = null;
    
    // initialize the canvas context
    useEffect(() => {
        
        const canvasEle = canvas.current;
        // dynamically assign the width and height to canvas
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = (2.9 * (canvasEle.clientHeight));
    
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
    }, []);

    // draw point
    const drawPoint = (e, style = {}) => {
        // debugger;
        
        //get mouse click location
        let mouseClickX = e.clientX;
        let mouseClickY = e.clientY;
         
        //get for canvas bounds
        let canvasLeftBound = e.target.offsetLeft;
        let canvasTopBound = e.target.offsetTop;
        
        // adjust click coords by canvas bounds
        let calcX = mouseClickX - canvasLeftBound;
        let calcY = mouseClickY - canvasTopBound;
        console.log(calcX, calcY);

        dispatch(addBodyLocation({x: calcX, y: calcY}));

        const { color = 'black', width = 1 } = style;
    
        ctx.beginPath();
        ctx.arc(calcX, calcY, 2, 0, 2*Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }

    const resetBodyCanvas = () => {
        const canvasEle = canvas.current;
        dispatch(cleanupLocation());
        ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
    }

    return (
        <div className='BodyCanvas'>
            <canvas onClick={(e)=>{drawPoint(e)}} ref={canvas}></canvas>
            <div onClick={()=>resetBodyCanvas()} > <DeleteButton text={'Clear'} /> </div>
            {/* <button onClick={()=>resetBodyCanvas()}>Clear</button> */}
            {/* <button onClick={}>Submit</button> */}
        </div>
    )
}
