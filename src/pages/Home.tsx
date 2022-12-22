import React from 'react';
import { Link } from "react-router-dom";
function HelloPage () {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Hello Everyone</h1>
        <h1 className="text-2xl font-bold">
            Welcome to my simple demo React App
        </h1>
        <h1>
            - React v18 <br/>
            - TypeScript <br/>
            - Redux <br/>
            - React Router <br/>
            - Webpack <br/>
            - Server Side Rendering(SSR) <br/>
        </h1>
        <h1 className="text-xl font-bold">
            These are implemented 
        </h1>
        <br/>
        <h1>
            - Need to start from CRA(create-react-app). <br/>
            - No need Next.js. <br/>
            - React Router - Having 2 or 3 simple routes are ideal. <br/>
            - Make a simple Counter component with Increase(+) and Decrease(-) buttons. <br/>
            - Use latest versions. <br/>
            - Tailwind CSS and simple styles with Tailwind <br/>
        </h1>
        <button className='mt-8'>
            <Link to="/counter"  className='py-3 px-5 rounded-xl font-mono font-3xl text-lime-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl'>To Counter Page</Link>
        </button>
      </div>
    );
}

export default HelloPage;