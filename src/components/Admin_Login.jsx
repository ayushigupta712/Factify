import { Link } from 'react-router-dom'
import React from 'react'
import Admin from './Admin'

export default function Admin_Login() {
    return (
        <div className='flex items-center h-lvh justify-center'>
            <div class="flex h-100 w-100 flex-col items-center justify-self-center rounded-4xl border-2">
                <div class="my-5 text-2xl">Admin Login</div>
                <div class="my-5 flex items-center">
                    <div class="">Name:</div>
                    <div class=""><input type="text" placeholder="Type your username" class="mx-2 rounded-md border px-2 py-0.5" /></div>
                </div>
                <div class="my-5 flex items-center">
                    <div class="">Password:</div>
                    <div class=""><input type="text" placeholder="Type your Password" class="mx-2 rounded-md border px-2 py-0.5" /></div>
                </div>
                <Link to={"/admin"}>
                <button class="cursor-pointer rounded-md border border-black bg-blue-500 px-3 py-1 text-white">Login</button></Link>
            </div>
        </div>
    )
}
