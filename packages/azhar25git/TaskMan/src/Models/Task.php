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

    public function assigned_to() {

        return $this->hasManyThrough(User::class, Assignable::class, 'user_id', 'id', 'id', 'id');
    }
    public function assignee() {

        return $this->hasOne(User::class,'id', 'assignee_user_id');
    }
}
