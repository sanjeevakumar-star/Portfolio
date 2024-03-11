import React from "react";
import linkedin from '../../assets/linked-in.png';

const contactDetails = [{
    id: "1",
    email: "sanjeevakumars123@gamil.com",
    phone: "+91 6379474309",
    linked: "https://www.linkedin.com/in/sanjeevakumar-s-1b02a31b5"
}]

export default function ContactDetails() {
    return (
        <div className="bg-gray-100 min-h-screen lg:pl-20 pl-0 pr-0 lg:pr-20 py-4">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-screen items-center">
                <div className="md:ml-12">
                    <h1 className="text-emerald-900 font-bold lg:text-5xl pb-4 text-2xl">Contact Details</h1>
                    <hr className="h-8" />
                    <p className="text-emerald-900 font-medium">
                        Thanks for reaching out! We're thrilled to connect with you. Let's work together to make great things happen. Looking forward to collaborating!
                    </p>
                </div>
                <div className="md:min-h-screen bg-no-repeat md:flex items-center justify-center">
                    <div className="flex items-center justify-center bg-gray-200 rounded-lg md:shadow-2xl">
                        <div className="lg:p-12 md:p-4 p-4">
                            {contactDetails.map(data => (
                                <div className="text-emerald-900 md:font-bold font-medium">
                                    <div className="p-2">
                                        <div className="lg:p-5 md:p-3 p-5 rounded-sm shadow-2xl" >
                                            <p> <span className="w-px">{data.email}</span></p>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="lg:p-5 md:p-3 p-5 rounded-sm shadow-2xl" >
                                            <p>Phone : <span>{data.phone}</span></p>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="lg:p-5 md:p-3 p-5 rounded-sm shadow-2xl flex items-center" >
                                            <p className="flex">Linked In : <a className="ml-2" href={data.linked}><img className="w-6" src={linkedin} alt='linkedin' /></a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
