<?php

namespace Azhar25git\TaskMan;

use Illuminate\Support\ServiceProvider;

class TaskManServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot(): void
    {
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'azhar25git');
        // $this->loadViewsFrom(__DIR__.'/../resources/views', 'azhar25git');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->loadRoutesFrom(__DIR__.'/routes.php');

        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__.'/../config/taskman.php', 'taskman');

        // Register the service the package provides.
        $this->app->singleton('taskman', function ($app) {
            return new TaskMan;
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['taskman'];
    }

    /**
     * Console-specific booting.
     *
     * @return void
     */
    protected function bootForConsole(): void
    {
        // Publishing the configuration file.
        $this->publishes([
            __DIR__.'/../config/taskman.php' => config_path('taskman.php'),
        ], 'taskman.config');

        // Publishing the views.
        /*$this->publishes([
            __DIR__.'/../resources/views' => base_path('resources/views/vendor/azhar25git'),
        ], 'taskman.views');*/

        // Publishing assets.
        /*$this->publishes([
            __DIR__.'/../resources/assets' => public_path('vendor/azhar25git'),
        ], 'taskman.views');*/

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/azhar25git'),
        ], 'taskman.views');*/

        // Registering package commands.
        // $this->commands([]);
    }
}
