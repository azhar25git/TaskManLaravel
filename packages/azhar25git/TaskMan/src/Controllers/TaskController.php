<?php

namespace Azhar25git\TaskMan\Controllers;

use Azhar25git\TaskMan\Models\Task;
use Azhar25git\TaskMan\Models\Assignable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task::with(['user'])->orderBy('create_at', 'DESC')->limit(20)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'status' => 'required|string',
            'title' => 'required|max:255',
            'description' => 'required|string|max:1000',
            'project_type' => 'required|string|max:91',
            'user_ids.*.user_id' => 'sometimes|required|integer',            
        ]);
        try {
            DB::beginTransaction();
            $newTask = new Task;
            $newTask->status = $request->task['status'];
            $newTask->title = $request->task['title'];
            $newTask->description = $request->task['description'];
            $newTask->project_type = $request->task['project_type'];
            
            $newTask->save();
            $users = $request->task['user_ids'];
            foreach($users as $user){
                $newAssignable = new Assignable;
                $newAssignable->task_id = $newTask->id;
                $newAssignable->user_id = $user->user_id;
                $newAssignable->save();
            }
            DB::commit();
            return "Task assigned successfully.";
        }

        catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
        }

        return "Task not assigned.";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $validated = $request->validate([
            'status' => 'required|string',
            'title' => 'required|max:255',
            'description' => 'required|string|max:1000',
            'project_type' => 'required|string|max:91',
            'task_id' => 'required|integer',
            'user_ids.*.user_id' => 'sometimes|required|integer',            
        ]);

        try {
            DB::beginTransaction();
            $existingTask = $task;
            $existingTask->status = $request->task['status'];
            $existingTask->title = $request->task['title'];
            $existingTask->description = $request->task['description'];
            $existingTask->project_type = $request->task['project_type'];
            
            $existingTask->save();

            // delete existing Assignables
            Assignable::where('task_id', $existingTask->id)->delete();

            $users = $request->task['user_ids'];

            foreach($users as $user){
                $newAssignable = new Assignable;
                $newAssignable->task_id = $existingTask->id;
                $newAssignable->user_id = $user->user_id;
                $newAssignable->save();
            }
            DB::commit();

            return "Task updated successfully.";
        }

        catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
        }
        
        return "Task not updated.";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        if($task) {
            $task->delete();
            return "Task deleted successfully.";
        }
        return "Task not found.";
    }

    /**
     * Search the users to assign task
     * 
     * @param  string
     * @return \Illuminate\Http\Response
     */
    public function searchAssignable($input)
    {
        $users = DB::table('users')->where('email', $input)
        ->orWhere('name', 'like', '%' . $input . '%')->get();

        return $users;
    }
}
