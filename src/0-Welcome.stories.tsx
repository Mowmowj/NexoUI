import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from "./components/Button/button";



storiesOf('Quickly Using kit',module)
  .add('welcome',()=>{
   return(
     <>
       <img src='../sketch/logo.jpg' alt="logo"/>
       <h1>Welcome to Nexo UI </h1><br/><h2>NexoUI</h2>
       <p>Author: Shelton Cheung</p>
       <h3>Install:</h3>
        <code>
          npm install nexoui --save
        </code>
        <br/>
        <h3>Source Code:</h3>
        <Button btnType="link" size='lg' href="https://github.com/Mowmowj/NexoUI"> 🏝Github</Button>
        <br/>
        <br/>
        <h3>Technology Stack</h3>
        <ul>
          <li>🧠️Base on TypeScript with React</li>
          <li>🎮use React Hooks</li>
          <li>🍥use storybook build the static pages</li>
          <li>🥗use Sass finish the style</li>
          <li>💧 use react-doc-gen write docs</li>
          <li>🥩publish on npm</li>
        </ul>
     </>
   ) 
  },{info:{inline:false}})