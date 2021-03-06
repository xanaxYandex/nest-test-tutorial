import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task } from "./task.entity";
import UpdateTaskStatusDto from "./dto/update-task-status.dto";
import { AuthGuard } from '@nestjs/passport';

@Controller("tasks")
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  @Get("/:id")
  getTaskById(@Param("id") id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: string): Promise<void | never> {
    return this.tasksService.deleteTask(id);
  }

  @Patch("/:id/:field")
  updateTask(
    @Param("id") id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto
  ): Promise<Task> {
    return this.tasksService.updateTask(id, updateTaskStatusDto.status);
  }

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto);
  }
  //
  // @Get("/:id")
  // getTaskById(@Param("id") id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }
  //

  //

  //

}
