<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Bila Esok Ibu Tiada',
                'slug' => 'bila-esok-ibu-tiada',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/UQURtWvSt9o?si=1Kne5spWBjKbW_c-',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Poster_BEIT.jpg/838px-Poster_BEIT.jpg',
                'rating' => 9.3,
                'is_featured' => true
            ],
            [
                'name' => 'Mission Impossible - Fallout',
                'slug' => 'mission-impossible-fallout',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/wb49-oV0F78?si=bXanDCnoNw9CMZEI',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/0/0e/MissionImpossibleFalloutPoster.jpg',
                'rating' => 7.8,
                'is_featured' => true
            ],
            [
                'name' => 'Miracle in Cell No. 7',
                'slug' => 'miracle-in-cell-no-7',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/GLhkcd_4lCg?si=4COiqIa4oLadhege',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/en/9/92/Miracle_in_Cell_No._7_%282022_film%29.jpg',
                'rating' => 9.0,
                'is_featured' => false
            ]

        ];

        Movie::insert($movies);
    }
}
