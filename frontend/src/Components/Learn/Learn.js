import React from 'react'
import "./Learn.css"

const Learn = () => {
  return (
    <>
    <div className='learn'>
        <h1>Want to learn more about Hyperautomation?</h1>
        <p>Check out our blogs where we talk about the latest in the Hyperautomation Industry!</p>
        <div className='learn1'>
            <div className='learn2'>
                <img src='https://bradsol.com/wp-content/uploads/2023/01/finance-guide-intelligent-automation.jpg'/>
                <p>28 Jun 2024</p>
                <h2>Transform Financial Operations with Bradsol and Automation Anywhere</h2>
            </div>
            <div className='learn2'>
                <img src='https://bradsol.com/wp-content/uploads/2024/06/rag-stack.jpg'/>
                <p>27 Jun 2024</p>
                <h2>The RAG Stack: Unlocking the Power of Knowledge Graphs</h2>
            </div>
            <div className='learn2'>
                <img src='https://bradsol.com/wp-content/uploads/2024/06/intelligent-automation-for-all.jpg'/>
                <p>14 Jun 2024</p>
                <h2>Intelligent Automation For All</h2>
            </div>
        </div>
    </div>

    <div className='contact'>
        <div className='contact1'>
            <div className='contact2'>
                <h1>Contact Us</h1>
                <p>Get in touch with a Bradsol automation expert!</p>
            </div>
            <div className='contact3'>
                <div className='contact4'>
                    <div className='contact5'>
                    <input placeholder='Your First Name*'/>
                    <div></div>
                    </div>
                    <div className='contact5'>
                    <input placeholder='Your Last Name*'/>
                    <div></div>
                    </div>
                </div>

                <div className='contact4'>
                    <div className='contact5'>
                    <input placeholder='Your Email*'/>
                    <div></div>
                    </div>
                    <div className='contact5'>
                    <input placeholder='Your Phone Number*'/>
                    <div></div>
                    </div>
                </div>

                <div className='contact4'>
                    <div className='contact5'>
                    <input placeholder='Your Country*'/>
                    <div></div>
                    </div>
                    <div className='contact5'>
                    <input placeholder='Your Organization*'/>
                    <div></div>
                    </div>
                </div>

                <div className='contact4'>
                    <div className='contact5'>
                    <input placeholder='Your Industry*'/>
                    <div></div>
                    </div>
                    <div className='contact5'>
                    <input placeholder='Your Role'/>
                    <div></div>
                    </div>
                </div>

                <div className='contact6'>
                    <input placeholder='What servives are you looking for?'/>
                    <div></div>
                </div>

                <button className='contact7'>SEND</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Learn
