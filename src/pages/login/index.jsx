import React from 'react'
import parse from 'html-react-parser';

export default function page() {

    let span = ``;

    for (let i = 0; i < 100; i++) {
        span += `<span></span>`;
    }
    return (
        <section className='section'>
            {
                parse(span)
            }
            <div className="signin">
                <div className="content">
                    <h2>Sign In</h2>
                    <div className="form">
                        <div className="inputBx">
                            <input type="text" required />
                            <i>Username</i>
                        </div>
                        <div className="inputBx">
                            <input type="password" required />
                            <i>Password</i>
                        </div>
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <a href="#">Signup</a>
                        </div>
                        <div className="inputBx">
                            <input type="submit" required value="login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
