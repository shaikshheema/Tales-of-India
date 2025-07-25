import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-left">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                At <strong>Tales of India</strong>, we value your privacy. We only collect the
                necessary information required for login purposes — such as your name, email, and password.
            </p>

            <p className="mb-4">
                Your data is never shared with third parties and is securely stored. We are committed
                to maintaining the confidentiality and security of your personal information.
            </p>

            <p className="mb-4">
                By using our platform, you agree to this privacy policy. If you have any concerns,
                feel free to reach out to us through our official contact channel.
            </p>

            <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
            </Button>
        </div>
    );
}
