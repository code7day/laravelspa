<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      =>  'Jeffry Jesus De La Rosa',
            'username'  => 'jjdelarosa',
            'email'     =>  'jeffryjesus@gmail.com',
            'password'  =>  bcrypt('Jehova07')
        ]);
    }
}
