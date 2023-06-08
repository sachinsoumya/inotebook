//import React from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'

const About = () => {


    return (
        <div className="container-fluid">
            <div className="h1 text-secondary">Welcome to iNotebook, a powerful closed-based notebook system designed to help you organize your notes, tasks, and ideas efficiently. </div>
            <div className="h2 mt-4 text-center text-primary">Key Features</div>
            <ul class="list-group  my-4">
                <li class="list-group-item text-center">
                    <div class="ms-2 me-auto">
                        <div class="fw-bolder fs-3">Note-taking</div>
                        <div className="fw-bold">Capture and organize your thoughts, ideas, and important information in a structured manner.</div>
                    </div>
                    
                </li>
                <li class="list-group-item text-center">
                    <div class="ms-2 me-auto">
                        <div class="fw-bolder fs-3">Rich Text Editing</div>
                        <div className="fw-bold ">Customize your notes with rich text formatting, including bold, italics, bullet points, and more.</div>
                    </div>
                    {/* <span class="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li class="list-group-item text-center">
                    <div class="ms-2 me-auto">
                        <div class="fw-bolder fs-3">Organization</div>
                        <div className="fw-bold">Categorize your notes into notebooks or categories, making it easy to find and access them later.</div>
                    </div>
                    {/* <span class="badge bg-primary rounded-pill">14</span> */}
                </li>
            </ul>
            <div className="h2 mt-4 text-center text-primary ">System Requirements</div>
            <ul class="list-group  my-4">
                <li class="list-group-item text-center">
                    <div class="ms-2 me-auto">
                        <div class="fw-bolder fs-3">Supported Browsers</div>
                        <div className="fw-bold">Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.</div>
                    </div>
                    
                </li>
               
                <li class="list-group-item text-center">
                    <div class="ms-2 me-auto">
                        <div class="fw-bolder fs-3">Operating Systems</div>
                        <div className="fw-bold">Windows 10, macOS, Linux.</div>
                    </div>
                    {/* <span class="badge bg-primary rounded-pill">14</span> */}
                </li>
            </ul>
            <div className="text-md-center text-start border border-light-subtle my-3 ">
            <div className="h2 mt-4 text-primary">Security and Privacy</div>
            <div className="fw-bold">At MyNotebook, we take your security and privacy seriously. We implement industry-standard security measures to protect your data and ensure your privacy. Our system uses end-to-end encryption, and we adhere to strict security practices to keep your information safe.
</div>
            
            </div>
            <div className="text-md-center text-start border border-light-subtle my-3 ">
            <div className="h2 mt-4 text-primary">User Guide</div>
            <div className="fw-bold">To learn more about how to use MyNotebook, please refer to our comprehensive user guide. It provides step-by-step instructions on setting up your account, creating notes, managing tasks, collaborating with others, and making the most out of our app.</div>
            </div>
            <div className="text-md-center text-start border border-light-subtle my-3 ">
            <div className="h2 mt-4 text-primary">Contact Us</div>
            <div className="fw-bold">If you have any questions, feedback, or need assistance, please don't hesitate to reach out to our support team. You can contact us at support@mynotebookapp.com or submit a support ticket through our website. We're here to help!</div>
            </div>
            <div className="text-center text-secondary h5 my-5">Thank you for choosing iNotebook to organize your life and boost your productivity. We hope you enjoy using our app!</div>
            
        </div>
    )
}

export default About
