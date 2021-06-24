<?php

namespace Azhar25git\TaskMan\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignable extends Model
{
    use HasFactory;

    public function tasks() {
        
        return $this->belongsToMany(Task::class);
    }

    public function users() {

        return $this->belongsToMany(User::class);
    }
}
