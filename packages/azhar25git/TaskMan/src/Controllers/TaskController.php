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
        return Task::orderBy('created_at', 'DESC')->with('assigned_user')->limit(20)->get();
    }

    /**
     * Display a filtered listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTasksBySource(string $source, int $id)
    {
        $userRole = 'user';
        if($id === 1) {
            $userRole = 'admin';
        }
        // switch results based on the user role
        switch ($userRole) {
            case 'admin':
                // return all the tasks
                return Task::where('source', strtolower($source))
                ->with('assigned_user')
                ->orderBy('created_at', 'DESC')
                ->limit(20)
                ->get();

            case 'user':
                // return the tasks that user is the assignee or assigned_to
                return Task::where('source', strtolower($source))
                ->where('assignee_user_id', $id)
                ->with(['assigned_user'=> function ($query) use ($id) {
                    $query->orWhere('user_id', $id);
                }])
                ->orderBy('created_at', 'DESC')
                ->limit(20)
                ->get();

            default:
                return false;
        }
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
            'task.source' => 'required|string',
            'task.title' => 'required|string|max:255',
            'task.description' => 'required|string|max:1000',
            'task.project_type' => 'required|string|max:91',
            'task.assignee_user_id' => 'required|integer',
            'task.assigned_user' => 'required|array',            
            'task.assigned_user.*' => 'required',            
            'task.assigned_user.*.id' => 'required|integer',            
        ]);

        try {
            DB::beginTransaction();
            $newTask = new Task;
            $newTask->source = $request->task['source'];
            $newTask->title = $request->task['title'];
            $newTask->description = $request->task['description'];
            $newTask->project_type = $request->task['project_type'];
            $newTask->assignee_user_id = $request->task['assignee_user_id'];
            
            $newTask->save();
            $users = $request->task['assigned_user'];
            $usersArray = [];
            foreach($users as $user){
                $newAssignable = new Assignable;
                $newAssignable->task_id = $newTask->id;
                $newAssignable->user_id = $user["id"];
                $usersArray[]= $user["id"];
                $newAssignable->save();
            }
            DB::commit();
            $newTask->assigned_user = $usersArray;
            return $newTask;
        }

        catch (\Exception $e) {
            // Woopsy
            DB::rollBack();
        }

        // return var_export($users);
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
            'task.source' => 'required|string',
            'task.title' => 'required|string|max:255',
            'task.description' => 'required|string|max:1000',
            'task.project_type' => 'required|string|max:91', 
            'task.task_id' => 'required|integer',  
            'task.assignee_user_id' => 'required|integer',
            'task.assigned_user' => 'required|array',            
            'task.assigned_user.*' => 'required',            
            'task.assigned_user.*.id' => 'required|integer',           
        ]);

        try {
            DB::beginTransaction();
            $existingTask = $task;
            $existingTask->source = $request->task['source'];
            $existingTask->title = $request->task['title'];
            $existingTask->description = $request->task['description'];
            $existingTask->project_type = $request->task['project_type'];
            $existingTask->assignee_user_id = $request->task['assignee_user_id'];
            
            $existingTask->save();

            // delete existing Assignables
            Assignable::where('task_id', $existingTask->id)->delete();

            $users = $request->task['assigned_user'];
            $usersArray = [];
            foreach($users as $user){
                $newAssignable = new Assignable;
                $newAssignable->task_id = $existingTask->id;
                $newAssignable->user_id = $user["id"];
                $usersArray[]= $user["id"];
                $newAssignable->save();
            }
            DB::commit();
            $existingTask->assigned_user = $usersArray;
            return $existingTask;
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
        ->orWhere('name', 'like', '%' . $input . '%')->get(['id','name','email','avatar']);
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
                $users = User::whereIn('id', $users_id)->get(['id','name','email','avatar']);
                return $users;
            }
            return "Assigned To not found.";
        }
        return "Task not found.";
    }

    /**
     * Get the users 
     * 
     * @param  none
     * @return \Illuminate\Http\Response
     */
    public function getAssignedTo()
    {
        $users = User::limit(10)->get(['id','name','email','avatar']);
        return $users;
    }
    /**
     * Get the single user
     * 
     * @param  none
     * @return \Illuminate\Http\Response
     */
    public function getAssignee($id)
    {
        $user = User::where('id',$id)->get(['id','name','email','avatar']);
        return $user;
    }
}
