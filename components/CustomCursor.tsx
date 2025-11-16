
'use client';
import {useState,useEffect} from 'react';

export default function CustomCursor(){
  const [pos,setPos]=useState({x:0,y:0});
  const [hover,setHover]=useState(false);

  useEffect(()=>{
    const mv=e=>setPos({x:e.clientX,y:e.clientY});
    const over=e=>{if(e.target.closest('a,button,.card-hover'))setHover(true)};
    const out=e=>{if(e.target.closest('a,button,.card-hover'))setHover(false)};
    window.addEventListener('mousemove',mv);
    document.addEventListener('mouseover',over);
    document.addEventListener('mouseout',out);
    return()=>{window.removeEventListener('mousemove',mv);document.removeEventListener('mouseover',over);document.removeEventListener('mouseout',out);}
  },[]);

  return <div className={`custom-cursor ${hover?'custom-cursor--hover':''}`} style={{left:pos.x,top:pos.y}}/>;
}
