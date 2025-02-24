"use server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const onToggleTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    throw `Todo with id ${id} not found`;
  }
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete: complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({ data: { description } });

    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (error) {
    console.log(error);
    return {
      message: "Error created todo",
    };
  }
};

export const deleteTodosCompleted = async (): Promise<void> => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dasboard/server-todos");
};
