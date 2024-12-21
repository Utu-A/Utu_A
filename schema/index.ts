import * as z from 'zod'

export const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/components/About.tsx" },
    { name: "Services", link: "/components/Services.tsx" },
    { name: "Work", link: "/components/Work.tsx" },
    { name: "Contact", link: "auth/contact" },
];

export const BookSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    phoneNumber: z.string().min(10,{
        message: "Please enter a valid phone number"
    })
    .max(10, {
        message: "Please enter a valid phone number",
      }),
    payload : z.string().min(1, {
        message: "Enter weight below 1 Tonne"
    }),
    message: z.string().max(10000,{
        message:"Enter Additional Information"
    })
})