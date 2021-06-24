<?php

namespace Azhar25git\TaskMan\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tasks';

    public function users() {

        return $this->hasManyThrough(Assignable::class, User::class);
    }
}
