import { createContext, useContext, useEffect, useState } from "react";
import { ContactsData } from "../api/ContactsApi";

const ContactContext = createContext();


const ContactContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const dataValue = {
        contacts, setContacts
    }

    const getContactsData = async () => {
        try {
            const data = await ContactsData();
            setContacts(data.data);
            console.log("context data: ", data);
        } catch (error) {
            console.log("error in get contacts data, context: ", error);
        }
    }

    useEffect(() => {
        getContactsData();
    }, [])

    return (
        <ContactContext.Provider value={dataValue}>
            { children }
        </ContactContext.Provider>
    )
}

const UseStore = () => {
    return useContext(ContactContext)
}

export { UseStore, ContactContextProvider }
