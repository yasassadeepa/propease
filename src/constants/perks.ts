export interface PerkItem {
    title: string;
    description: string;
    icon: string;
}

export const PERKS: PerkItem[] = [
    {
        title: "Job Sync",
        description: "Post once, publish everywhere. Sync job listings across multiple job boards instantly.",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "Hiring Analytics",
        description: "Track candidate sources and time-to-hire with real-time insights.",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "Resume Manager",
        description: "Parse and organize thousands of resumes automatically.",
        icon: "/icons/perk-three.svg"
    },
    {
        title: "Candidate Connect",
        description: "Communicate with applicants directly from the dashboard.",
        icon: "/icons/perk-four.svg"
    }
]; 