<?php

namespace Azhar25git\TaskMan\Controllers;

use Azhar25git\TaskMan\Models\Task;
use Azhar25git\TaskMan\Models\Assignable;
use App\Models\User;
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
        return Task::orderBy('created_at', 'DESC')->limit(20)->get();
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
            'task.status' => 'required|string',
            'task.title' => 'required|string|max:255',
            'task.description' => 'required|string|max:1000',
            'task.project_type' => 'required|string|max:91',
            'task.user_ids.*.user_id' => 'sometimes|required|integer',            
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
                $newAssignable->user_id = $user["user_id"];
                $newAssignable->save();
            }
            DB::commit();
            return "Task assigned successfully.";
        }

        catch (\Exception $e) {
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
            'task.status' => 'required|string',
            'task.title' => 'required|string|max:255',
            'task.description' => 'required|string|max:1000',
            'task.project_type' => 'required|string|max:91',
            'task.user_ids.*.user_id' => 'sometimes|required|integer',  
            'task.task_id' => 'required|integer',           
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
                $newAssignable->user_id = $user["user_id"];
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
        ->orWhere('name', 'like', '%' . $input . '%')->get(['name','email','id']);
        return $users;
    }
    /**
     * Get the users of assigned task
     * 
     * @param  string
     * @return \Illuminate\Http\Response
     */
    public function getAssigned($task)
    {
        $task = Task::find($task);
        if($task) {
            $users_id = Assignable::where('task_id', $task->id)->get('user_id');
            if(count($users_id)>0){
                $users = User::whereIn('id', $users_id)->get(['id','name','email']);
                return $users;
            }
            return "Assigned To not found.";
        }
        return "Task not found.";
    }
}
