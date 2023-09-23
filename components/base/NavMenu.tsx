import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MenuIcon } from 'lucide-react'
import LoginModel from '../auth/LoginModel'
import SignupModel from '../auth/SignupModel'

const NavMenu = ({ session }: { session: object | undefined }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <MenuIcon className='cursor-pointer' />
            </PopoverTrigger>
            <PopoverContent className='mr-6'>
                <ul>
                    {session != null ? (
                        <>
                            <li className='hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
                                Dashboard
                            </li>
                            <li className='hover:bg-slate-200 rounded-md p-2 cursor-pointer'>
                                Logout
                            </li>
                        </>
                    ) : (
                        <>
                            <LoginModel />
                            <SignupModel />
                        </>
                    )}
                </ul>
            </PopoverContent>
        </Popover>

    )
}

export default NavMenu
