<?php

namespace Azhar25git\TaskMan\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignable extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'assignable_task';

    public function tasks() {
        
        return $this->belongsToMany(Task::class);
    }

    public function users() {

        return $this->hasMany(User::class);
    }
}
