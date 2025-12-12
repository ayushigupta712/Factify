import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const Guide = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='flex flex-col items-center'>
                <h1 className='pt-40 font-bold text-2xl'>User Guides and How-to Manual</h1>
                <p className='w-7xl ml-40 mb-20 mt-10 text-justify'>
                    Welcome to the Guides section of our IT News Website. Whether you’re a first-time visitor, aspiring Reporter, active Publisher, or advertiser, this section is designed to help you navigate our platform with ease. Explore step-by-step instructions, helpful tips, and feature overviews to make the most of your experience on our website.
                    <br />
                    <b>🔹 Getting Started</b>
                    <ol className='list-decimal list-inside'>
                        <li>Account Registration</li>
                        <ul className='list-disc list-inside'>
                            <li>Click on the “Register” button from the homepage.</li>
                            <li>Fill out the registration form with accurate personal and professional details.</li>
                            <li>Choose your role: Reporter or Publisher.</li>
                            <li>Submit the request and wait for Admin approval.</li>
                            <li>You’ll receive a confirmation email once approved.</li>
                        </ul>
                        <li>Logging In</li>
                        <ul className='list-disc list-inside'>
                            <li>Use your registered email and password to log in.</li>
                            <li>In case of a forgotten password, click “Forgot Password” to reset via email.</li>
                        </ul>
                    </ol>
                    <b>🔹 Reporter Guide</b>
                    <ol className='list-decimal list-inside'>
                        <li>Submitting News Content</li>
                        <ul className='list-disc list-inside'>
                            <li>Navigate to the Reporter Dashboard.</li>
                            <li>Click on “Create News Post”.</li>
                            <li>Fill in the required fields: title, summary, full content, image (optional), and category.</li>
                            <li>Ensure the news is authentic, IT-focused, and properly cited.</li>
                            <li>Click “Submit” — your post will be reviewed before publishing.</li>
                        </ul>
                        <li>Viewing Submission Status</li>
                        <ul className='list-disc list-inside'>
                            <li>Under “My Submissions”, check whether your news post is Pending, Approved, or Rejected.</li>
                            <li>Admin feedback (if any) will be visible next to rejected posts.</li>
                        </ul>
                    </ol>
                    <b>🔹 Publisher Guide</b>
                    <ol className='list-decimal list-inside'>
                        <li>Publishing External Content</li>
                        <ul className='list-disc list-inside'>
                            <li>Visit the Publisher Dashboard.</li>
                            <li>Submit newsletters, whitepapers, or press releases relevant to the IT sector.</li>
                            <li>Monitor approval status and readership insights in the Reports section.</li>
                        </ul>
                        <li>Managing Published Content</li>
                        <ul className='list-disc list-inside'>
                            <li>Edit or delete existing posts from the “My Content” tab.</li>
                            <li>View real-time engagement metrics (likes, views, comments, etc.).</li>
                        </ul>
                    </ol>
                    <b>🔹 Admin Panel Overview</b>
                    <ol className='list-decimal list-inside'>
                        <li>Approving Users</li>
                        <ul className='list-disc list-inside'>
                            <li>Review applications under User Requests.</li>
                            <li>Approve or reject based on role, quality of application, and background check.</li>
                        </ul>
                        <li>Content Moderation</li>
                        <ul className='list-disc list-inside'>
                            <li>Access all user-submitted content from the Content Review section.</li>
                            <li>Approve, edit, or reject based on quality and guidelines.</li>
                        </ul>
                        <li>Advertisement Approval</li>
                        <ul className='list-disc list-inside'>
                            <li>Approve paid advertisements submitted by users after verifying successful QR payment.</li>
                            <li>Schedule visibility and manage ad duration.</li>
                        </ul>
                    </ol>
                    <b>🔹 Advertisement Submission Guide</b>
                    <ol className='list-decimal list-inside'>
                        <li>Submit an Ad</li>
                        <ul className='list-disc list-inside'>
                            <li>Go to the Advertise With Us page.</li>
                            <li>Fill in the details: headline, image, description, and redirect link.</li>
                            <li>Complete the payment via QR code.</li>
                        </ul>
                        <li>Ad Approval</li>
                        <ul className='list-disc list-inside'>
                            <li>Admin reviews all ad requests before publication.</li>
                            <li>Approved ads are live based on selected duration.</li>
                        </ul>
                    </ol>
                    <b>🔹 Content Guidelines</b>
                    <ul className='list-disc list-inside'>
                        <li>All news content must be:</li>
                        <li>Related to the IT industry (e.g., cybersecurity, startups, software releases).</li>
                        <li>Fact-checked and original (no plagiarism).</li>
                        <li>Free from hate speech, spam, and irrelevant promotions.</li>
                    </ul>
                    🔹 FAQ Section
                    <ul className='list-disc list-inside'>
                    <li>Visit our [FAQ Page] for common questions regarding account approval, content guidelines, and payment issues.</li>
                    <li>Need Further Help? If you have specific issues or need personalized assistance, reach out via the Contact Us form or email us at support@[yourdomain].com. We’re here to help!</li>
                    </ul>
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default Guide
