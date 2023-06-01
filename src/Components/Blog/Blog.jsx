import React from 'react';

const Blog = () => {
    return (
        <div className='p-10 bg-zinc-100 mt-10 max-w-7xl mx-auto rounded-lg'>
            <h1 className='text-2xl font-bold'>a. When should you use context API?</h1>
            <p className='text-lg mt-3'><span className='font-semibold'>Answer:</span> Context API is a useful tool for managing global state in React applications. It allows to pass data down the component tree without having to manually pass props through each level of nesting.We should consider using Context API if we have data or state that needs to be accessed by multiple components at different levels of our application's component tree. This can help simplify our code and reduce the amount of prop drilling needed.</p>
            <h1 className='text-2xl font-bold mt-7'>b. What is a custom hook?</h1>
            <p className='mt-3 text-lg'><span className='font-semibold'>Answer:</span> A custom hook is a JavaScript function that starts with the prefix "use" and allows you to use React's built-in hooks like useState, useEffect, useContext, etc. in your own custom logic. Custom hooks allow  to extract reusable logic from our components and share it across different parts of our application. This can help simplify our code and make it easier to manage.</p>
            <h1 className='text-2xl font-bold mt-7'>c. What is useRef?</h1>
            <p className='mt-3 text-lg'><span className='font-semibold'>Answer:</span>In React, useRef is a hook that allows to create a mutable reference to a DOM element or any other value. We can think of useRef as a way to "remember" a value between renders without triggering a re-render like useState would. Unlike regular variables, when a ref is updated, React does not trigger a re-render of the component.One common use case for useRef is accessing the value of an input element or another DOM element. For example, we might use a ref to get access to the current value of an input field without having to rely on state.</p>
            <h1 className='text-2xl font-bold mt-7'>d. What is useMemo?</h1>
            <p className='mt-3 text-lg'><span className='font-semibold'>Answer:</span>In React, useMemo is a hook that allows to memoize the result of a function call, so that it is only re-computed when its dependencies change.Memoization is an optimization technique that can improve performance by caching the results of a function call and returning the cached value when the same inputs occur again. By using useMemo, we can avoid unnecessary re-computations of expensive calculations.</p>
        </div>
    );
};

export default Blog;