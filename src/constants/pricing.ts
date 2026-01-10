export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter",
        description: "Perfect for small teams",
        price: {
            monthly: 49,
            yearly: 490,
        },
        features: [
            { text: "Active Jobs (up to 3)", included: true },
            { text: "Basic AI Screening", included: true },
            { text: "Candidate Management", included: true },
            { text: "Email Support", included: true },
            { text: "Advanced Insights", included: false },
            { text: "Bulk Resume Upload", included: false },
        ],
    },
    {
        name: "Growth",
        description: "Ideal for growing companies",
        price: {
            monthly: 99,
            yearly: 990,
        },
        popular: true,
        features: [
            { text: "Active Jobs (up to 10)", included: true },
            { text: "Advanced AI Screening", included: true },
            { text: "Candidate Management", included: true },
            { text: "Priority Support", included: true },
            { text: "Advanced Insights", included: true },
            { text: "Bulk Resume Upload", included: true },
        ],
    },
    {
        name: "Enterprise",
        description: "For large organizations",
        price: {
            monthly: 299,
            yearly: 2990,
        },
        features: [
            { text: "Unlimited Active Jobs", included: true },
            { text: "Custom AI Models", included: true },
            { text: "Team Collaboration", included: true },
            { text: "24/7 Support", included: true },
            { text: "API Access", included: true },
            { text: "White Labeling", included: true },
        ],
    },
];
