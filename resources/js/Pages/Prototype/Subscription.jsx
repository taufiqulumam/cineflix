import Authenticated from "@/Layouts/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head } from "@inertiajs/react";

export default function Subscription() {
    return (
        <Authenticated>
            <Head title="Subscription" />
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard name={"Basic"} price={299000} durationInMonth={3} features={["All Movies", "Full HD", "Download"]} />
                    <SubscriptionCard isPremium name={"Premium"} price={599000} durationInMonth={6} features={["All Movies", "Full HD", "Download", "Watch Offline", "No Ads", "Exclusive Content", "Priority Support"]} />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
