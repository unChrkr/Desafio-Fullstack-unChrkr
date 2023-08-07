import React from "react";
import { UserInfoProvider } from "./UserInfoContext";
import { CreateModalProvider } from "./ModalContext";
import { ContactContextProvider } from "./ContactContext";


const Providers = ({ children }) => {
    return (
        <UserInfoProvider>
            <ContactContextProvider>
                <CreateModalProvider>
                    {children}
                </CreateModalProvider>
            </ContactContextProvider>
        </UserInfoProvider>
    )
}

export default Providers