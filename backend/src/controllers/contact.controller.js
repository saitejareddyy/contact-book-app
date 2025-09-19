import { Contact } from "../models/contact.model.js";

const createContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: "All credentials are required" });
        }

        const emailRegix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegix.test(email)) {
            return res.status(400).json({ success: false, message: "invalid email" });
        }

        const existingUser = await Contact.findOne({
            $or: [{ name }, { phone }]
        });

        if (existingUser) {
            if (existingUser.name === name) {
                return res.status(400).json({ success: false, message: "User name already exists" });
            }
            if (existingUser.phone === phone) {
                return res.status(400).json({ success: false, message: "Phone number already exists" });
            }
        }

        const newContact = new Contact({
            name,
            email,
            phone
        })

        await newContact.save();

        return res.status(201).json({
            success: true,
            message: "Contact created successfully",
            data: newContact
        });

    } catch (error) {
        console.log("Error in the create contact controller: ", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ success: false, message: "Invalid contact" });
        }

        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }

        return res.status(200).json({ success: true, message: "Contact deleted successfully" });
    } catch (error) {
        console.log("Error in delete contact controller: ", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getContacts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const contactsData = await Contact.find({})
            .skip(skip)
            .limit(limit);

        const total = await Contact.countDocuments();

        res.status(200).json({
            success: true,
            data: contactsData,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error("Error in get contacts controller: ", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { createContact, deleteContact, getContacts }
