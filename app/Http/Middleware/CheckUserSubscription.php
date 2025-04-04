<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $status)
    {
        /*
            param $status didapat dari route web.php
        */

        // cek jika user tidak memiliki subscription plan yang aktif
        // jika user tidak memiliki subscription plan yang aktif dan mengakses detail movie, redirect ke halaman subscription plan
        if ($status == 'true' && !Auth::user()->isActive) {
            return redirect()->route('user.dashboard.subscriptionPlan.index');
        }
        // cek jika user memiliki subscription plan yang aktif
        // jika user memiliki subscription plan yang aktif dan mengakses menu payment, redirect ke halaman dashboard
        if ($status == 'false' && Auth::user()->isActive) {
            return redirect()->route('user.dashboard.index');
        }
        return $next($request);
    }
}
