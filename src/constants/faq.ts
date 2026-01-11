export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "How does the job posting process work?",
        answer: "Posting a job is simple. Just provide the basic details, and our AI helps you draft a compelling description. Once approved, your job is live and ready to receive optimal candidates."
    },
    {
        question: "How does the AI screening ranking work?",
        answer: "Our AI analyzes resumes against your specific job requirements, extracting skills, experience, and education. It then scores and ranks candidates, ensuring you see the best matches first without bias."
    },
    {
        question: "Is candidate data secure?",
        answer: "Yes, we prioritize data security. All candidate information is encrypted and stored securely, complying with global data protection regulations to ensure privacy and safety."
    },
    {
        question: "Can I collaborate with my team?",
        answer: "Absolutely! PeoplyAI is built for teams. You can invite colleagues, share candidate profiles, leave notes, and make collaborative hiring decisions all within the platform."
    },
    {
        question: "What kind of support do you provide?",
        answer: "We offer dedicated support via email and chat. Our team fits familiar with HR workflows and can assist you with everything from setting up your account to optimizing your hiring pipeline."
    },
    {
        question: "Is there a trial period?",
        answer: "Yes, we offer a free trial so you can experience the power of AI recruiting firsthand. No credit card is required to get started."
    }
];
