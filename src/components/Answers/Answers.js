import React from 'react';

const Answers = () => {
    return (
        <div className='mx-5 my-4'>
            <h3 className="bg-success p-2">Q: How React works?</h3>
            <p className="bg-light p-2">A: Virtual DOM is a programming concept. React creates a virtual DOM as like as real Dom. Then stores it's componenet in virtual DOM. With this virtual DOM react compares the changes that made in the UI. According to the changes react makes change in UI. To sort out the changes react use 'diff algorithm'. React is unidirectional.</p>

            <h3 className="bg-success p-2">Q: What is the difference between props and state?</h3>
            <p className="bg-light p-2">A: There are some differences between props and state. Such as :
                <br />
                1. Props pass data from one componenet to another; but state pass data only within the component.
                <br />
                2. Props can't be modified but state can be modified.
                <br />
                3. Props are read-only but state is writable and readable.
                <br />
                4. We can use props in state and functional components but state can't be used in functional components.
            </p>
        </div>
    );
};

export default Answers;