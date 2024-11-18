import Steps from "~/app/_components/Steps";
import Form from "~/app/_components/Form";
import React from "react";

export default function StudentOnboardingPage() {
    const steps = [
        {
            number: 1,
            title: "Personal Info",
        },
        {
            number: 2,
            title: "Education",
        },
        {
            number: 3,
            title: "Experience",
        },
        {
            number: 4,
            title: "Languages",
        },
        {
            number: 5,
            title: "Submit and Confirmation",
        },
    ];
    return (
        <div className="bg-black  p-4 max-h-screen h-screen">
            <div
                className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 h-full">                {/* Steps */}
                <Steps steps={steps}/>
                {/* Form */}
                <div className="rounded-lg col-span-full md:col-span-8">
                    <Form/>
                </div>
            </div>
        </div>
    );
}
