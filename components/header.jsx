import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Profile from './profile';

export default function Header() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <header className='bg-black py-2'>
            <div className="container px-4 mx-auto md:flex md:items-center">
                <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
                    <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
                    <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</a>
                    {
                        user ? (
                            <>
                                <a href="/api/auth/logout" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Logout</a>
                                <Profile user={user} />
                            </>
                        ) : (
                            <a href="/api/auth/login" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                        )
                    }
                </div>
            </div>
        </header>

        /*         <header className="py-3 mb-3 border-bottom">
                    <div className="container-fluid d-grid gap-3 align-items-center">
                        <div class="d-flex align-items-center">
                            <svg class="bi me-2" width="40" height="32" />
                            <form class="w-100 me-3" role="search">
                                <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                            </form>
        
                            <li><a class="dropdown-item" href="/api/auth/login">Sign In</a></li>
                            {
                                user && (
                                    <div>
                                        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Profile user={user} />
                                        </a>
                                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                            <li><a class="dropdown-item" href="/api/auth/logout">Sign out</a></li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </header> */
    )
};