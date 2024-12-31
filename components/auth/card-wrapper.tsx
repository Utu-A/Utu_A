"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import AuthHeader from "./auth-header";

interface CardWrapperProps {
    label: string
    title: string
    backButtonHref: string
    backButtonLabel: string
    children:React.ReactNode
}


const CardWrapper = ({label, title, backButtonHref, backButtonLabel, children}: CardWrapperProps) => {
  return (
    <Card className="x1:w-1/4 md:w-1/2 shadow-md">
        <CardHeader>
            <AuthHeader label={label} title={title} />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}

export default CardWrapper