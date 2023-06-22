import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";


const formCards = [
    {
        label: `what's your full name?*`,
        placeholder: "e.g John Jide",
        inputType: "text",
        name: "fullName",
    },
    {
        label: `Email address*`,
        placeholder: "e.g johnjide@gmail.com",
        inputType: "text",
        name: "email",
    },
    {
        label: `Years of professional experience*`,
        placeholder: "Enter your answer",
        inputType: "text",
        name: "experience",
    },
    {
        label: `Portfolio website*`,
        placeholder: "Enter your answer",
        inputType: "text",
        name: "portfolio",
    },
    {
        label: `Tell us about your experience and your interest in mentoring*`,
        placeholder: "Enter your answer...",
        inputType: "textarea",
        name: "experienceInterest",
    },
];

export default function MentorshipForm() {
    const [formValues, setFormValues] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validateForm = () => {
        const requiredFields = formCards.filter((formCard) => formCard.inputType !== "textarea");
        const isValid = requiredFields.every((formCard) => formValues[formCard.name]?.trim() !== "");
        setIsFormValid(isValid);
    };

    return (
        <section className="bg-[#edf5fd]  flex lg:p-[7.5rem] px-4 py-20 ">
            <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
                <div className="flex flex-col md:w-1/2 lg:w-1/3 p-4 items-start gap-2">
                    <h2 className="font-neue font-normal text-4xl lg:text-5xl leading-[1.2]">
                        Join us in making <br />
                        technology <br />
                        accessible to all.
                    </h2>
                    <p className="font-neue font-normal text-base text-[#191919] tracking-[0.005em]">
                        We’re looking for world-class designers to join our community. Fill this form to impact the next generation
                        of tech talents with This Tech Thing.
                    </p>
                </div>
                <div className="md:w-1/2 button3 pr-2 pb-2">
                    <div className="flex flex-col items-start gap-4 p-12 bg-white rounded-[.5rem] shadow-lg shadow-[#0000000F]">
                        <div className="flex flex-col w-full items-start gap-4">
                            <h2 className="font-neue font-normal text-2xl items-center text-[#191919]">Enter your details</h2>
                            <div className="flex flex-col w-full items-start gap-4">
                                {formCards.map((formCard, index) => (
                                    <div key={index} className="flex flex-col w-full items-start gap-2">
                                        <label
                                            className="font-neue font-normal text-base tracking-[0.015em] text-[#1a1a1a]"
                                            htmlFor={formCard.name}
                                        >
                                            {formCard.label}
                                        </label>
                                        {formCard.inputType === "textarea" ? (
                                            <textarea
                                                placeholder={formCard.placeholder}
                                                className="bg-white rounded-[.4rem] border border-[#737373] w-full p-4"
                                                name={formCard.name}
                                                id={formCard.name}
                                                cols="10"
                                                rows="5"
                                                required
                                                onChange={handleInputChange}
                                                onBlur={validateForm}
                                            ></textarea>
                                        ) : (
                                            <input
                                                placeholder={formCard.placeholder}
                                                className="bg-white rounded-[.4rem] border border-[#737373] w-full p-4"
                                                type="text"
                                                name={formCard.name}
                                                id={formCard.name}
                                                required
                                                onChange={handleInputChange}
                                                onBlur={validateForm}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                            <Link to="/FormSubmit">
                                <button 
                                disabled={!isFormValid} 
                                className={`button4 text-[#191919] whitespace-nowrap ${isFormValid ? "" : " opacity-80 hover:none cursor-not-allowed"} `}
                                style={{ pointerEvents: isFormValid ? "auto" : "none" }}
                                >
                                    Submit
                                </button>
                            </Link>
                    </div>
                </div>
                </div>
        </section>
    );
}
