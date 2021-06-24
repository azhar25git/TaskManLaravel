<?php

namespace Azhar25git\TaskMan\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function users() {

        return $this->hasManyThrough(User::class, Assignable::class);
    }
}
