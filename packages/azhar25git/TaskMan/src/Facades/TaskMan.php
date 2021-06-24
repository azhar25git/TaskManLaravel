<?php

namespace Azhar25git\TaskMan\Facades;

use Illuminate\Support\Facades\Facade;

class TaskMan extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor(): string
    {
        return 'taskman';
    }
}
