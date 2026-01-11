export interface HowItWorksItem {
    title: string;
    description: string;
    image: string;
}

export const HOW_IT_WORKS: HowItWorksItem[] = [
    {
        title: "Create a Position",
        description: "Define the role and let our AI help you craft the description.",
        image: "/images/hiw-one.svg"
    },
    {
        title: "Upload Resumes",
        description: "Drag and drop candidate CVs directly into the dashboard.",
        image: "/images/hiw-two.svg"
    },
    {
        title: "AI Analysis",
        description: "The system instantly analyzes each profile against your criteria.",
        image: "/images/hiw-three.svg"
    },
    {
        title: "Shortlist",
        description: "Review the ranked list and deep-dive insights to select your top candidates.",
        image: "/images/hiw-one.svg" // Reusing image 1 as placeholder for 4th step
    }
];