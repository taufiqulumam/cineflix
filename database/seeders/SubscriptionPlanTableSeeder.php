<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'features' => json_encode(['All Movies', 'Full HD', 'Download']),
            ],

            [
                'name' => 'Premium',
                'price' => 599000,
                'active_period_in_months' => 6,
                'features' => json_encode(['All Movies', 'Full HD', 'Download', 'Watch Offline', 'No Ads', 'Exclusive Content', 'Priority Support']),
            ],

        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
